import { getServerSession } from 'next-auth';
import { getFollowingPostsOf } from '@/service/post';
import { NextResponse } from 'next/server';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  return getFollowingPostsOf(user.username).then((data) =>
    NextResponse.json(data),
  );
}
