'use client';

import useSWR from 'swr';
import { SimplePost } from '@/model/post';

export default function PostList() {
  const {
    data: posts,
    isLoading: loading,
    error,
  } = useSWR<SimplePost[]>('/api/post');
  return (
    <ul>{posts && posts.map((post) => <li key={post.id}>{post.text}</li>)}</ul>
  );
}
