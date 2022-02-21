<template>
  <Head>
    <Title>Home</Title>
  </Head>
  <div class="container">
    <h1>Home Here</h1>
    <post-card-list :postCardListProps="postCardListProps" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import PostCardList from "~~/components/Post/PostCardList.vue";
import { PostCardListProps } from "~~/components/Post/types";
import useStore from "~~/store";

export default defineComponent({
  components: { PostCardList },
  name: "Home",
  setup(props) {
    const s = useStore();
    const postCardListProps = computed(
      (): PostCardListProps => ({
        postListData: s.allPostList,
      })
    );
    return {
      postCardListProps,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/home.scss";
</style>
