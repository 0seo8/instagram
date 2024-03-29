import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { addComment } from '@/service/post';

export async function POST(req: NextResponse) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  const { id, comment } = await req.json();

  if (!id || comment === undefined) {
    return new Response('Bad Request', { status: 400 });
  }

  return addComment(id, user.id, comment)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
