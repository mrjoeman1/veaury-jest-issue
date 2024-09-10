<template>
    <CarbonProvider :theme="sageTheme" :focusRedesignOptOut="true">
        <slot/>
    </CarbonProvider>
</template>

<script setup>
    import { applyReactInVue } from 'veaury';
    import { sageTheme } from "carbon-react/lib/style/themes";
    import CarbonCarbonProvider from "carbon-react/lib/components/carbon-provider";

    const CarbonProvider = applyReactInVue(CarbonCarbonProvider);
</script>
