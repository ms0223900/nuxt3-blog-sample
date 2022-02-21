import { SinglePost } from "custom-types";

export interface PostCardItemProps extends SinglePost {}
export interface PostContentProps extends SinglePost {}

export interface PostCardListProps {
  postListData: SinglePost[];
}

export interface PostTitleListProps {
  postListData: SinglePost[];
}
