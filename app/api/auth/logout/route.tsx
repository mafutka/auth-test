import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export default async function POST() {
  const cookiesStore = await cookies();
  cookiesStore.delete('user');
  return NextResponse.json({ success: true });
}
