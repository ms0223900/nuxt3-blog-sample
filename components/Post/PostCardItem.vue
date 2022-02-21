<template>
  <div class="post-card-item">
    <h2>{{ postCardItemProps.title }}</h2>
    <p>{{ postCardItemProps.content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import { PostCardItemProps } from "./types";

export default defineComponent({
  name: "PostCardItem",
  props: {
    postCardItemProps: {
      type: Object as PropType<PostCardItemProps>,
      default: () => ({}),
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "./post-card-item.scss";
</style>
