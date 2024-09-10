<template>
    <CarbonProvider>
        <Box display="flex" flexDirection="column" :gap="2">
            <Test3/>
            <RadioButtonGroup name="select1" :value="select1Value" @change="select1Value = $event.target.value">
                <RadioButton size="small" :value="'111'" :labelSpacing="2" :label="'value 1'" :labelInline="true" :m="0"/>
                <RadioButton size="small" :value="'222'" :labelSpacing="2" :label="'value 1'" :labelInline="true" :m="0"/>
            </RadioButtonGroup>
            <Button buttonType="primary" @click="next()" :disabled="!select1Value || store.disabled1">Next</Button>
        </Box>
    </CarbonProvider>
</template>

<script setup>
import Box from './carbon/Box.vue';
import RadioButton from "./carbon/RadioButton.vue";
import RadioButtonGroup from "./carbon/RadioButtonGroup.vue";
import {ref} from "vue";
import Button from "./carbon/Button.vue";
import {useRouter} from "vue-router";
import {useStore} from "@/store.js";
import Test3 from "./SimpleComponent.vue";
import CarbonProvider from "./carbon/CarbonProvider.vue";

const router = useRouter();
const store = useStore();
const select1Value = ref(null);

function next() {
    if (select1Value.value === '222') {
        store.disabled2 = true;
        router.push({name: 'Page2'});
    }
}
</script>