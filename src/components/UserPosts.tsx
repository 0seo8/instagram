'use client';
import React, { useState } from 'react';
import { ProfileUser } from '@/model/user';
import BookmarkIcon from '@/components/ui/icons/BookmarkIcon';
import PostIcon from '@/components/ui/icons/PostIcon';
import HeartIcon from '@/components/ui/icons/HeartIcon';
import PostGrid from '@/components/PostGrid';

type Props = {
  user: ProfileUser;
};

const tabs = [
  { type: 'posts', icon: <PostIcon /> },
  { type: 'saved', icon: <BookmarkIcon className="w-3 h-3" /> },
  { type: 'liked', icon: <HeartIcon className="w-3 h-3" /> },
];

export default function UserPosts({ user: { username } }: Props) {
  // /api/user/${username}/posts
  // /api/user/${username}/liked
  // /api/user/${username}/bookmarks
  const [query, setQuery] = useState(tabs[0].type);

  return (
    <section>
      <ul>
        {tabs.map(({ type, icon }) => (
          <li key={type} onClick={() => setQuery(type)}>
            <button>{icon}</button>
            <span>{type}</span>
          </li>
        ))}
      </ul>
      <PostGrid username={username} query={query} />
    </section>
  );
}
