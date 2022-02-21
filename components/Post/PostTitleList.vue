<template>
  <div class="post-title-list">
    <ul>
      <li v-for="(p, i) in postTitleListProps.postListData" :key="i">
        <NuxtLink :to="`/posts/${p.id}`">
          {{ p.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import { PostTitleListProps } from "./types";

export default defineComponent({
  name: "PostTitleList",
  props: {
    postTitleListProps: {
      type: Object as PropType<PostTitleListProps>,
      default: () => ({}),
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
