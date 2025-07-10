import { NextResponse } from 'next/server';
import { fakeDb } from '../../../../lib/auth';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const userExist = fakeDb.find((user) => user.email === email);
  if (userExist) {
    return NextResponse.json({ error: 'user exists' }, { status: 400 });
  }
  fakeDb.push({ email, password });
  return NextResponse.json({ success: true });
}
