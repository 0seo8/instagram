import useSWR from 'swr';
import { HomeUser } from '@/model/user';
import { useCallback } from 'react';

async function updateBookmark(postId: string, bookmark: boolean) {
  return fetch('api/bookmarks', {
    method: 'PUT',
    body: JSON.stringify({ id: postId, bookmark }),
  }).then((res) => res.json());
}

export default function useMe() {
  const { data: user, isLoading, error, mutate } = useSWR<HomeUser>('/api/me');

  const setBookmark = useCallback(
    (postId: string, bookmark: boolean) => {
      if (!user) return null;
      const { bookmarks } = user;
      const newUser = {
        ...user,
        bookmaarks: bookmark
          ? [...bookmarks, postId]
          : bookmarks.filter((b) => b !== postId),
      };

      return mutate(updateBookmark(postId, bookmark), {
        optimisticData: newUser,
        populateCache: false,
        revalidate: false,
        rollbackOnError: true,
      });
    },
    [mutate, user],
  );

  return { user, isLoading, error, setBookmark };
}
