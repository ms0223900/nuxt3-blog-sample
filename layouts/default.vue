<template>
  <div class="root">
    <nav class="nav-list--wrapper">
      <ul>
        <li v-for="(nav, i) in navList" :key="i">
          <NuxtLink :to="nav.link">
            {{ nav.title }}
          </NuxtLink>
        </li>
      </ul>
      <intl-toggle-button />
    </nav>
    <slot :key="path" />
  </div>
</template>

<script lang="ts">
import navList from "~~/static/navList.mock";
import { defineComponent, PropType, toRefs } from "vue";
import IntlToggleButton from "~~/components/Intl/IntlToggleButton.vue";

export default defineComponent({
  components: { IntlToggleButton },
  name: "DefaultLayoutWrapper",
  setup(props) {
    const route = useRoute();
    const path = computed(() => route.path);
    return {
      path,
      navList,
    };
  },
});
</script>

<style lang="scss" scoped></style>
