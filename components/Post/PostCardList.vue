<template>
  <div class="post-card-list">
    <div
      v-for="(p, i) in postCardListProps.postListData"
      :key="i"
      class="card-item--wrapper"
    >
      <NuxtLink :to="`/posts/${p.id}`">
        <PostCardItem :postCardItemProps="p" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import PostCardItem from "./PostCardItem.vue";
import { PostCardListProps } from "./types";

export default defineComponent({
  components: { PostCardItem },
  name: "PostCardList",
  props: {
    postCardListProps: {
      type: Object as PropType<PostCardListProps>,
      default: () => ({}),
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "./post-card-list.scss";
</style>
