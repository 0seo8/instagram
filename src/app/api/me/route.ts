import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import { getUserByUsername } from '@/service/user';
import { authOptions } from '@/app/api/auth/[...nextauth]';

export async function GET(_: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  return getUserByUsername(user.username).then((data) =>
    NextResponse.json(data),
  );
}
