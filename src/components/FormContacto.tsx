'use client'
import emailjs from '@emailjs/browser';

import { motion } from 'motion/react';
import { useRef } from 'react';

import { toast, ToastContainer } from 'react-toastify';

interface EmailFormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    email: HTMLInputElement;
    message: HTMLTextAreaElement;
    phone: HTMLInputElement;
  }
  
  interface EmailForm extends HTMLFormElement {
    readonly elements: EmailFormElements;
  }
  
 
   

const FormContacto = () => {
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
    <div className="w-full max-w-md">
    {/* <h2 className="mb-8 text-center text-xl font-medium tracking-wide">
      CONTACTO
    </h2> */}
    <motion.form
      onSubmit={sendEmail}
      ref={form}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-white shadow-md rounded-lg py-10 px-6 mb-6 flex flex-col items-center"
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
        <label className="text-md font-medium">Mensaje</label>
        <textarea
          name="message"
          required
          className="w-full p-3 border border-gray-600"
          placeholder="Mensaje"
        ></textarea>
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
      <div className="mb-5 w-full flex items-center gap-2">
        <input type="checkbox" 
        required/>
        <label>
          <span>Acepto ley de protección de datos</span>
        </label>
      </div>
      <button
        type="submit"
        className="uppercase text-sm bg-hovernav m-2 p-2 rounded-md transition-all hover:bg-green-400 w-full"
      >
        Enviar
      </button>
      <ToastContainer />
    </motion.form>
  </div>
    
  )
}

export default FormContacto
