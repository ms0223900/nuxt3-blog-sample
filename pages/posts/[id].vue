<template>
  <div v-if="!post">Post Not Found :(</div>
  <PostContent v-else :postContentProps="post" />
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import PostContent from "~~/components/Post/PostContent.vue";
import useStore from "~~/store";
// import { PostContentViewProps } from '../../components/Post/types';

export default defineComponent({
  components: { PostContent },
  name: "PostContentView",
  // props: {
  //   PostContentViewProps: {
  //     type: Object as PropType<PostContentViewProps>,
  //     default: () => ({}),
  //   },
  // },
  setup(props) {
    const s = useStore();
    const r = useRoute();

    const post = computed(() => {
      const matched = s.allPostList.find(
        (p) => p.id.toString() === r.params.id.toString()
      );
      if (!matched) return null;
      return matched;
    });

    return {
      post,
    };
  },
});
</script>

<style lang="scss" scoped></style>
