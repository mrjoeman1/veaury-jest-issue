import {defineStore} from "pinia";

export const useStore = defineStore('$store', {
    state: () => {
        return {
            disabled1: false,
            disabled2: false,
        }
    }
});
