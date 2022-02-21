import { SinglePost } from "custom-types";
import useStore from "~~/store";

const useApp = async () => {
  const store = useStore();

  const { data, refresh: handleRefreshPosts } = await useAsyncData<{
    data: SinglePost[];
  }>("posts", () => $fetch("/api/posts"));

  store.setPostList(data.value.data);

  return {
    data,
    handleRefreshPosts,
  };
};

export default useApp;
