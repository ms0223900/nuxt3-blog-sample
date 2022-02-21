<template>
  <Head>
    <Title>Posts</Title>
  </Head>
  <PostTitleList :postTitleListProps="postTitleListProps" />
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import PostTitleList from "~~/components/Post/PostTitleList.vue";
import { PostTitleListProps } from "~~/components/Post/types";
import useStore from "~~/store";
// import { PostsProps } from './types';

export default defineComponent({
  components: { PostTitleList },
  name: "Posts",
  // props: {
  //   PostsProps: {
  //     type: Object as PropType<PostsProps>,
  //     default: () => ({}),
  //   },
  // },
  setup(props) {
    const s = useStore();
    const postTitleListProps = computed(
      (): PostTitleListProps => ({
        postListData: s.allPostList,
      })
    );
    return {
      postTitleListProps,
    };
  },
});
</script>

<style lang="scss" scoped></style>
