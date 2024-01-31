'use client';

import useSWR from 'swr';
import { SimplePost } from '@/model/post';
import { GridLoader } from 'react-spinners';
import PostListCard from '@/components/PostListCard';

export default function PostList() {
  const {
    data: posts,
    isLoading: loading,
    error,
  } = useSWR<SimplePost[]>('/api/post');
  return (
    <section>
      {loading && (
        <div>
          <GridLoader color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts &&
            posts.map((post) => (
              <li key={post.id}>
                <PostListCard post={post} />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}
