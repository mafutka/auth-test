'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegistePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const hansleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) router.push('/auth/login');
    else alert('user already exists');
  };
  return (
    <form onSubmit={hansleSubmit} action="">
      <input placeholder="email" type="text" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign up</button>
    </form>
  );
}
