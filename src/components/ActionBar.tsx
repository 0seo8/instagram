import React from 'react';
import HeartIcon from '@/components/ui/icons/HeartIcon';
import BookmarkIcon from '@/components/ui/icons/BookmarkIcon';
import { parseDate } from '@/util/date';
import ToggleButton from '@/components/ui/ToggleButton';
import HeartFillIcon from '@/components/ui/icons/HeartFillIcon';
import BookmarkFillIcon from '@/components/ui/icons/BookmarkFillIcon';
import { SimplePost } from '@/model/post';
import usePosts from '@/hooks/posts';
import useMe from '@/hooks/me';

type Props = {
  post: SimplePost;
  children?: React.ReactNode;
};

export default function ActionBar({ post, children }: Props) {
  const { likes, createdAt, id } = post;
  const { setLike } = usePosts();
  const { user, setBookmark } = useMe();

  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(id) ?? false;
  const handleLike = (like: boolean) =>
    user && setLike(post, user.username, like);

  const handleBookmark = (bookmark: boolean) =>
    user && setBookmark(id, bookmark);

  return (
    <>
      <div className="flex justify-between my-2 px-4">
        <ToggleButton
          toggled={liked}
          onToggle={handleLike}
          onIcon={<HeartFillIcon />}
          offIcon={<HeartIcon />}
        />
        <ToggleButton
          toggled={bookmarked}
          onToggle={handleBookmark}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
        />
      </div>
      <div className="px-4 py-1">
        <p className="text-sm font-bold mb-2">{`${likes?.length ?? 0} ${likes?.length > 1 ? 'likes' : 'like'}`}</p>
        {children}
        <p className="text-xs text-neutral-500 uppercase my-2">
          {parseDate(createdAt)}
        </p>
      </div>
    </>
  );
}
