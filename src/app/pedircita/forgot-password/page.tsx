'use client'

import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setMessage(data.message || 'Check your email for reset instructions');
  };

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Forgot Password</h2>
        <input type="email" placeholder="Email" className="border p-2 w-full mb-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded w-full">Send Reset Link</button>
        {message && <p className="text-blue-500 mt-2 text-center">{message}</p>}
      </form>
    </main>
    );
}