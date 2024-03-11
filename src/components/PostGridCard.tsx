import React, { useState } from 'react';
import { SimplePost } from '@/model/post';
import Image from 'next/image';
import ModalPortal from '@/components/ui/ModalPortal';
import PostModal from '@/components/PostModal';
import PostDetail from '@/components/PostDetail';

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostGridCard({ post, priority = false }: Props) {
  const { image, username } = post;
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Image
        src={image}
        alt={`photo by ${username}`}
        fill
        sizes="650ox"
        priority={priority}
      />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </div>
  );
}
