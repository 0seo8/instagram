import React from 'react';
import { User } from '@/model/user';
import Avatar from '@/components/Avatar';

type Props = {
  user: User;
};

export default function SideBar({
  user: { name, username, image, email },
}: Props) {
  return (
    <>
      <div>
        <div>{image && <Avatar image={image} />}</div>
        <p>{username}</p>
        <p>{name}</p>
      </div>
      <p>
        About ﹒ Help ﹒ Press ﹒ API ﹒ Jobs ﹒ Privacy ﹒ Terms ﹒ Location ﹒
        Language
      </p>
      <p>@Copyright INSTANTGRAM from METAL</p>
    </>
  );
}
