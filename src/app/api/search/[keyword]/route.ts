import { NextRequest, NextResponse } from 'next/server';
import { searchUsers } from '@/service/user';

type Context = {
  params: { keyword: string };
};

export async function GET(_: NextRequest, { params: { keyword } }: Context) {
  return searchUsers(keyword).then((data) => NextResponse.json(data));
}
