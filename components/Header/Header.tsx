'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { user, setUser } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
    });
    setUser(null);
    router.push('/');
  };

  return (
    <header style={{ display: 'flex', gap: '10px', padding: '1rem' }}>
      <Link href="/">Home</Link>
      {!user ? (
        <>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
        </>
      ) : (
        <>
          <span>Welcome, {user}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </header>
  );
}
