'use client';

import useSWR from 'swr';
import { DetailUser } from '@/model/user';
import { PropagateLoader } from 'react-spinners';
import Link from 'next/link';
import Avatar from '@/components/Avatar';

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  const users = data?.following;

  return (
    <section>
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ul>
          {users.map(({ username, image }) => (
            <li key={username}>
              <Link href={`/user/${username}`}>
                <Avatar image={image} highlight />
                <p>{username}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
