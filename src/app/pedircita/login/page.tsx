'use client';
import { useState } from 'react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name }),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error);
    alert('Registration successful');
  };

  return (
    <main className="flex justify-center items-center h-screen bg-gray-10">
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded w-96">
      <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
      <input type="text" placeholder="Name" className="border p-2 w-full mb-2" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" className="border p-2 w-full mb-2" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 w-full mb-2" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">Register</button>
      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
    </form>
  </main>
  );
}