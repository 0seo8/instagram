import { NextResponse } from 'next/server';

import { getUserByUsername } from '@/service/user';
import { withSessionUser } from '@/util/sesseion';

export async function GET(_: Request) {
  return withSessionUser(async (user) =>
    getUserByUsername(user.username).then((data) => NextResponse.json(data)),
  );
}
