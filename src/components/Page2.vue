<template>
    <Box display="flex" flexDirection="column" :gap="2">
        <SimpleComponent/>
        <div>
            <Button buttonType="primary" :disabled="store.disabled2">Next</Button>
        </div>
    </Box>
</template>

<script setup>
import Box from './carbon/Box.vue';
import Button from "./carbon/Button.vue";
import {useStore} from "@/store.js";
import SimpleComponent from "@/components/SimpleComponent.vue";

const store = useStore();

</script>