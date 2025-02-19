'use client';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

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
    <div className='max-w-md mx-auto justify-center items-center p-8'>

    
    <form
      className="container bg-white shadow-md rounded-lg py-10 px-6 mb-6 flex flex-col items-center mt-20"
    >
      <div className="mb-5 w-full">
      <label className="text-md font-medium">Nombre</label>
      <input
        name="name"
        required
        className="w-full p-3 border border-gray-600"
        type="text"
        placeholder="Nombre"
      />
      </div>
      <div className="mb-5 w-full">
      <label className="text-md font-medium">Correo</label>
      <input
        name="email"
        type="email"
        required
        className="w-full p-3 border border-gray-600"
        placeholder="Email"
      />
      </div>
      <div className="mb-5 w-full">
      <label className="text-md font-medium">Contraseña</label>
      <input
        name="name"
        required
        className="w-full p-3 border border-gray-600"
        type="password"
        placeholder="Contraseña"
      />
      </div>
  
      <div className="mb-5 w-full">
      <label className="text-md font-medium">Teléfono</label>
      <input
        name="phone"
        type="tel"
        required
        className="w-full p-3 border border-gray-600"
        placeholder="Teléfono"
        pattern="\d*"
        maxLength={10}
        onInput={(e) => {
        const input = e.target as HTMLInputElement; // Especificar el tipo
        input.value = input.value.replace(/[^0-9]/g, ""); // Permitir solo números
        }}
      />
      </div>
    
      <button
      type="submit"
      className="uppercase text-sm bg-hovernav m-2 p-2 rounded-md transition-all hover:bg-green-400 w-full"
      >
      Registrar
      </button>
      <ToastContainer />
    </form>
    </div>
  );
}