import { NextResponse } from 'next/server';
import { fakeDb } from '../../../../lib/auth';
import { cookies } from 'next/headers';

export default async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = fakeDb.find((u) => u.email === email && u.password === password);

  if (!user) {
    return NextResponse.json({ error: 'user not found' }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set('user', email, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24,
  });

  return NextResponse.json({ succes: true });
}
