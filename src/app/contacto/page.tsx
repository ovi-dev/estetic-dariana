'use client'
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useRef } from 'react';
import { FaWhatsapp } from "react-icons/fa";

import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import FormContacto from '@/components/FormContacto';


interface EmailFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
  phone: HTMLInputElement;
}

interface EmailForm extends HTMLFormElement {
  readonly elements: EmailFormElements;
}

const Contacto = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<EmailForm>) => {
    e.preventDefault();

    emailjs.sendForm('service_72pp6wb', 'template_0qb52ij', form.current as unknown as HTMLFormElement, {
        publicKey: '-AY7GDC4SkSSFlu8R',
      })
    
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
      toast.success('Paciente Registrado Correctamente')
      // alert('Mensaje enviado')
      e.currentTarget.reset()
      
    };
   

  return (
    <section className="flex justify-center items-center min-h-screen margin-top">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-20 mt-4">
        {/* Imagen y detalles */}
        <div className="flex flex-col items-center gap-5">
          <p className="text-xl font-medium tracking-wide mt-20">Dariana Ortiz</p>
          <Image
            className="rounded-[10px]"
            src="/fotospng/DAV_8898-Editar.png"
            alt="Dariana Ortiz"
            width={350}
            height={400}
          />
        <div className='flex flex-col items-center gap-5'>
  <h5 className=' uppercase font-medium text-slate-900'>Telefono</h5>
  <Link 
   href="https://wa.me/34691296345"
   target="_blank"
   rel="noopener noreferrer"
   className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
  >
    <FaWhatsapp size={20} /> 
    <span className=' text-[20px]'>691 296 345</span>
  </Link>
</div>
    </div>
        {/* Formulario */}
      <FormContacto/>
      </div>
    </section>
  )
};

export default Contacto;

