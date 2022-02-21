import { SinglePost } from "custom-types";
import { useI18n } from "vue-i18n";
import useStore from "~~/store";

const useApp = async () => {
  const store = useStore();
  const { locale } = useI18n();

  const { data, refresh: handleRefreshPosts } = await useLazyAsyncData<{
    data: SinglePost[];
  }>("posts", () => $fetch("/api/posts"));

  store.setPostList(data.value.data);

  watch([locale], async () => {
    try {
      const data = (await $fetch("/api/posts", {
        params: {
          locale: locale.value,
        },
      })) as any;
      store.setPostList(data.data);
    } catch (error) {}
  });

  return {
    data,
    handleRefreshPosts,
  };
};

export default useApp;
