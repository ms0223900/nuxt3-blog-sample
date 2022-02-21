import { SinglePost } from "custom-types";
import { defineStore, _ActionsTree, _GettersTree } from "pinia";

export interface State {
  viewedPostList: SinglePost[];
  allPostList: SinglePost[];
}

const state = (): State => ({
  viewedPostList: [],
  allPostList: [],
});

const getters: _GettersTree<State> = {
  getViewedPostAmount: (s) => s.viewedPostList.length,
};

const useStore = defineStore("main", {
  state,
  actions: {
    addViewedPost(newPost: SinglePost) {
      this.viewedPostList = [...this.viewedPostList, newPost];
    },

    resetViewedPost() {
      this.viewedPostList = [];
    },

    setPostList(postList: SinglePost[]) {
      this.postList = postList;
    },
  },
  getters,
});

export default useStore;
