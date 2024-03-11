import React from 'react';
import { getUserForProfile } from '@/service/user';
import { notFound } from 'next/navigation';
import UserProfile from '@/components/UserProfile';

type Props = {
  params: {
    username: string;
  };
};

export default async function UserPage({ params: { username } }: Props) {
  // 상단: 사용자 프로필 이미지와 정보(username, name, 숫자)
  // 하단: 3개의 탭(Post, liked, boomarks)
  const user = await getUserForProfile(username);

  if (!user) {
    notFound();
  }
  return <UserProfile user={user} />;
}
