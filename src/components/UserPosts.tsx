'use client';
import React, { useState } from 'react';
import { ProfileUser } from '@/model/user';
import useSWR from 'swr';

type Props = {
  user: ProfileUser;
};

export default function UserPosts({ user: { username } }: Props) {
  // /api/user/${username}/posts
  // /api/user/${username}/liked
  // /api/user/${username}/bookmarks
  const [tab, setTab] = useState('posts');
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(`/api/users/${username}/${tab}`);
  console.log(posts);
  return <div></div>;
}
