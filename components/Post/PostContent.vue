<template>
  <article>
    <h1>{{ postContentProps.title }}</h1>
    <hr />
    <p>{{ postContentProps.content }}</p>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import { PostContentProps } from "./types";

export default defineComponent({
  name: "PostContent",
  props: {
    postContentProps: {
      type: Object as PropType<PostContentProps>,
      default: () => ({}),
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
