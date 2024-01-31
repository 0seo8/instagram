import React from "react";
import { FullPost, SimplePost } from "@/model/post";
import userSWR from "swr";

type Props = {
  post: SimplePost;
};

export default function PostDetail({ post }: Props) {
  const { id, username, userImage, image, createdAt, likes } = post;
  const { data } = userSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;
  console.log(comments);
  return <></>;
}
