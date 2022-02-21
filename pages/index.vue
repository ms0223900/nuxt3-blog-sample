<template>
  <Head>
    <Title>Home</Title>
  </Head>
  <div class="container">
    <h1>Home Here</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
  name: "Home",
  // setup(props) {
  //   return ({
  //     ...toRefs(props.ComponentProps),
  //   });
  // },
});
</script>

<style lang="scss" scoped>
@import "../styles/home.scss";
</style>
