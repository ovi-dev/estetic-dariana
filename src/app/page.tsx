'use client'

import Image from 'next/image';

import { motion } from "framer-motion"
import { fadeIn2 } from '@/variantes/var';
import DualCardComponent from '@/components/Dualcard';



export default function Home() {
  
  return (
  <>
    <section className='container mx-auto space-x-0 mb-8 pt-20'>
    <div className="flex flex-wrap items-center justify-between p-[10px]">
      {/* Texto alineado a la izquierda */}
      <motion.div 
      variants={fadeIn2('left', 1.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}}
      className="w-full md:w-1/2">
      <h1 className="text-2xl font-bold mb-4 text-center">Dariana Ortiz</h1>

      <div className="p-6  rounded-lg shadow-lg  border ">
        <p className="text-lg leading-relaxed">
          Siempre he tenido la determinación de luchar por lo que me apasiona,
          es más que un trabajo es mi pasión.
          <br />
          <br />
          Soy experta en rejuvenecimiento facial no quirúrgico, después de muchos tratamientos exitosos,
          lo que más me llena de satisfacción es ver en la cara de mis pacientes la felicidad de verse y sentirse mejor,
          mi enfoque se basa en resultados naturales que potencian y realzan la belleza.
        </p>
      </div>
      </motion.div>

      {/* Imagen alineada a la derecha */}
      <motion.div 
      variants={fadeIn2('right', 0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}}
      className="w-full md:w-1/2 flex justify-center md:justify-center mt-3 md:mt-2">
      <Image
        src="/fotospng/dariana.jpg"
        width={350}
        height={200}
        alt="Dariana Ortiz"
        className="rounded-[90px] shadow-2xl"
      />
      </motion.div>
    </div>
    </section>

    <section className='container mx-auto space-x-0 mb-8'>
      <div>
    <h1 className="text-2xl font-bold mb-4 text-center">Nuestro Trabajo</h1>
    <DualCardComponent/>

      </div>
    </section>
  </>
  );
}
