<template>
  <Head>
    <Link rel="icon" href="/favicon.ico" />
  </Head>
  <NuxtLayout>
    <main>
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import useApp from "./composables/useApp";

export default defineComponent({
  name: "App",
  async setup(props) {
    await useApp();
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
