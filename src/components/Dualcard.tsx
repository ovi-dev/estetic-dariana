import React from 'react';
import Image from 'next/image';

const DualCardComponent = () => {
  return (
    <div className=" flex items-center justify-center ">
      
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


          {/* Tarjeta izquierda 1*/}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/fotospng/DAV_8805-Editar.png" // Reemplaza con tu imagen
              alt="Facial"
              width={100}
              height={100}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Título izquierdo</h2>
              <p className="text-gray-700">
                Este es un texto de ejemplo que hace referencia a la imagen de la izquierda. Puedes agregar más detalles aquí.
              </p>
            </div>
          </div>

          {/* Tarjeta derecha 2*/}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/fotospng/DAV_8827-Editar.png" // Reemplaza con tu imagen
              alt="Hidratación"
              width={100}
              height={100}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Título derecho</h2>
              <p className="text-gray-700">
                Este es un texto de ejemplo que hace referencia a la imagen de la derecha. Puedes agregar más detalles aquí.
              </p>
            </div>
          </div>
      
          {/* Tarjeta izquierda 3*/}  
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
            width={100}
            height={100}
              src="/fotospng/DAV_8827-Editar.png" // Reemplaza con tu imagen
              alt="Imagen derecha"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Título derecho</h2>
              <p className="text-gray-700">
                Este es un texto de ejemplo que hace referencia a la imagen de la derecha. Puedes agregar más detalles aquí.
              </p>
            </div>
          </div>
            
          {/* Tarjeta derecha 4*/}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
            width={100}
            height={100}
              src="/fotospng/DAV_8827-Editar.png" // Reemplaza con tu imagen
              alt="Imagen derecha"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Título derecho</h2>
              <p className="text-gray-700">
                Este es un texto de ejemplo que hace referencia a la imagen de la derecha. Puedes agregar más detalles aquí.
              </p>
            </div>
          </div>
            
          {/* Tarjeta izquierda 5*/}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
            width={100}
            height={100}
              src="/fotospng/DAV_8827-Editar.png" // Reemplaza con tu imagen
              alt="Imagen derecha"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Título derecho</h2>
              <p className="text-gray-700">
                Este es un texto de ejemplo que hace referencia a la imagen de la derecha. Puedes agregar más detalles aquí.
              </p>
            </div>
          </div>
            
          {/* Tarjeta derecha 6*/}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
            width={100}
            height={100}
              src="/fotospng/DAV_8827-Editar.png" // Reemplaza con tu imagen
              alt="Imagen derecha"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Título derecho</h2>
              <p className="text-gray-700">
                Este es un texto de ejemplo que hace referencia a la imagen de la derecha. Puedes agregar más detalles aquí.
              </p>
            </div>
          </div>
            
          {/* Tarjeta izquierda 7*/}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
            width={100}
            height={100}
              src="/fotospng/DAV_8827-Editar.png" // Reemplaza con tu imagen
              alt="Imagen derecha"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Título derecho</h2>
              <p className="text-gray-700">
                Este es un texto de ejemplo que hace referencia a la imagen de la derecha. Puedes agregar más detalles aquí.
              </p>
            </div>
          </div>
            
          {/* Tarjeta derecha 8*/}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
            width={100}
            height={100}
              src="/fotospng/DAV_8827-Editar.png" // Reemplaza con tu imagen
              alt="Imagen derecha"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Título derecho</h2>
              <p className="text-gray-700">
                Este es un texto de ejemplo que hace referencia a la imagen de la derecha. Puedes agregar más detalles aquí.
              </p>
            </div>
          </div>
            
          {/* Tarjeta izquierda 9*/}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
            width={100}
            height={100}
              src="/fotospng/DAV_8827-Editar.png" // Reemplaza con tu imagen
              alt="Imagen derecha"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Título derecho</h2>
              <p className="text-gray-700">
                Este es un texto de ejemplo que hace referencia a la imagen de la derecha. Puedes agregar más detalles aquí.
              </p>
            </div>
          </div>

          {/* Tarjeta derecha 10*/}              
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
            width={100}
            height={100}
              src="/fotospng/DAV_8827-Editar.png" // Reemplaza con tu imagen
              alt="Imagen derecha"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Título derecho</h2>
              <p className="text-gray-700">
                Este es un texto de ejemplo que hace referencia a la imagen de la derecha. Puedes agregar más detalles aquí.
              </p>
            </div>
          </div>

        </div>
      </div>

      


    </div>
  );
};

export default DualCardComponent;