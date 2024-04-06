import { getPost } from '@/service/post';
import { NextRequest, NextResponse } from 'next/server';
import { withSessionUser } from '@/util/sesseion';

type Context = {
  params: { id: string };
};

export async function GET(request: NextRequest, context: Context) {
  return withSessionUser(async () =>
    getPost(context.params.id) //
      .then((data) => NextResponse.json(data)),
  );
}
