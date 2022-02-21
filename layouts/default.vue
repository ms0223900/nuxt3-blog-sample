<template>
  <Head>
    <Link rel="icon" href="/favicon.ico" />
  </Head>
  <div class="root">
    <nav class="nav-list--wrapper">
      <ul>
        <li v-for="(nav, i) in navList" :key="i">
          <NuxtLink :to="nav.link">
            {{ nav.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <slot :key="path" />
  </div>
</template>

<script lang="ts">
import navList from "~~/static/navList.mock";
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
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
