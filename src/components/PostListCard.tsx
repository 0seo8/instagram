import React from "react";
import { SimplePost } from "@/model/post";
import Avatar from "@/components/Avatar";
import Image from "next/image";
import CommentForm from "@/components/CommentForm";
import ActionBar from "@/components/ActionBar";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, likes, text, createdAt } = post;
  return (
    <article className="rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center p-2">
        <Avatar image={userImage} highlight size="medium" />
        <span className="text-gray-900 font-bold ml-2">{username}</span>
      </div>
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
      />
      <ActionBar
        username={username}
        createdAt={createdAt}
        likes={likes}
        text={text}
      />
      <CommentForm />
    </article>
  );
}
