/*
 * @jest-environment jsdom
 */
import flushPromises from 'flush-promises';
import {mount} from "@vue/test-utils";
import {createRouter, createWebHashHistory} from "vue-router";
import {createTestingPinia} from "@pinia/testing";
import {setActivePinia} from "pinia";
import TestApp from "@/App.vue";
import waitForExpect from "wait-for-expect";
import {useStore} from "@/store.js";
import Page1 from "@/components/Page1.vue";
import Page2 from "@/components/Page2.vue";

jest.setTimeout(30000);

let $store;
let $router;

function mountApp() {
    const routes = [{
        name: 'Page1',
        path: '/',
        component: Page1
    }, {
        name: 'Page2',
        path: '/page2',
        component: Page2
    }];
    $router = createRouter({
        base: import.meta.env.BASE_URL,
        history: createWebHashHistory(),
        routes
    });

    const pinia = createTestingPinia({
        stubActions: false,
        plugins: [function () {
            return {
                $router,
            }
        }],
    });
    setActivePinia(pinia);

    $store = useStore();

    const $storePlugin = {
        install: (app) => {
            app.config.globalProperties.$store = useStore();
        }
    };

    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });

    return mount(TestApp, {
        global: {
            plugins: [$router, pinia, $storePlugin]
        }
    })
}

test('test1', async() => {
    // If we are tession(prospect);
    let wrapper = mountApp();
    $router.replace({ path: '/' }).catch(() => {});
    await flushPromises();
    expect($router.currentRoute.value.name).toBe('Page1');
    await wrapper.findAll('input[type="radio"]').at(1).trigger('click');
    await waitForExpect(() => {
        expect(wrapper.findAll('button').at(0).attributes()).not.toHaveProperty('disabled');
    });
    await wrapper.findAll('button').at(0).trigger('click');
    await waitForExpect(() => {
        expect($router.currentRoute.value.path).toBe('/page2');
    });
    await waitForExpect(() => {
        expect(wrapper.findAll('button').at(0).attributes()).toHaveProperty('disabled');
    });

    wrapper.unmount();
});

