<template>
  <button @click="handleToggle">
    {{ locale }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import useIntlToggleButton from "./functions/useIntlToggleButton";
// import { IntlToggleButtonProps } from './types';

export default defineComponent({
  name: "IntlToggleButton",
  // props: {
  //   intlToggleButtonProps: {
  //     type: Object as PropType<IntlToggleButtonProps>,
  //     default: () => ({}),
  //   },
  // },
  setup(props) {
    const { locale, handleToggle } = useIntlToggleButton();
    return {
      locale,
      handleToggle,
    };
  },
});
</script>

<style lang="scss" scoped></style>
