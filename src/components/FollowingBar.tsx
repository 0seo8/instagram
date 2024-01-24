'use client';

import useSWR from 'swr';

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR('/api/me');
  console.log(data);
  // 4. 여기에서, 클라이언트 컴포넌트에서 follwings의 정보를 UI에 보여줌
  //  (image, username)
  return <div>FollowingBar</div>;
}
