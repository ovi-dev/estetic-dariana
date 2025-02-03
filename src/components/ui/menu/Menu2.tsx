'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const Navbar = () => {

  // logica para cerrar el submenu si se hace clic fuera 
  const pathname = usePathname();

  // diseno de pantalla grande
  const linkClasses = (path: string) =>
    `m-2 p-2 rounded-md transition hover:bg-hover ${
      pathname === path ? "bg-hover text-black" : "text-gray-700 hover:bg-hovernav"
    }`;

  // diseno de pantalla movil
    const linkClassesMobile = (path: string) =>
      `block px-4 py-2 transition hover:bg-hover ${
        pathname === path ? "bg-hover text-black" : "text-gray-700 hover:bg-hovernav"
      }`;

  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[90px] items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
          <Link href="/">
              <Image
                src="/fotospng/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="mr-2 aspect-auto"
              />
            </Link>
          </div>

          {/* pantalla grande Menu */}
            <div className="hidden md:flex space-x-6">
            <Link href="/" className={linkClasses("/")} >Inicio</Link>
            <Link href="/about" className={linkClasses("/about")}>Dariana Ortiz</Link>
            <div className="relative">


              <button
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                className="flex  items-center m-2 p-2 rounded-md transition-all hover:bg-hover"
              >
                Tratamiento <ChevronDown className="w-z h-4 ml-1" />
              </button>

              {isSubMenuOpen && (
                <div className="absolute left-0 mt-1 w-40 shadow-lg rounded-md">
                  <Link href="/tratamientos/faciales" className={`${linkClasses("/tratamientos/faciales")} block px-4 py-2`}>Facial</Link>
                  <Link href="/tratamientos/corporales" className={`${linkClasses("/tratamientos/corporales")} block px-4 py-2`}>Corporal</Link>
                </div>
              )}
            </div>
            <Link href="/contacto" className={`m-2 p-2 rounded-md transition-all hover:bg-hover ${pathname === "CONTACTO" ? "bg-hover text-black" : "hover:bg-hovernav"}`}>Contacto</Link>
            <Link href="/pedircita" className={linkClasses("/pedircita")}>Citas</Link>
          </div>






          {/* Mobile Menu Button la X = lado derecho */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className='flex items-center m-2 p-2 rounded-md bg-hover'>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 flex items-center rounded-md transition-all hover:bg-hover" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-100/70 shadow-md">
          <Link href="/" className={`${linkClassesMobile("/")}`}>Inicio</Link>
          <Link href="/about" className={`${linkClassesMobile("/about")}`}>Dariana Ortiz</Link>
          <div className="px-4 py-2">
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="flex justify-between w-full"
            >
              Tratamiento <ChevronDown className="w-5 h-5" />
            </button>
            {isSubMenuOpen && (
              <div className="pl-4">
                <Link href="/tratamientos/faciales" className={`${linkClassesMobile} px-4 py-2 block`}>Facial</Link>
                <Link href="/tratamientos/corporales" className={`${linkClassesMobile} px-4 py-2 block`}>Corporal</Link>
              </div>
            )}
          </div>
          <Link href="/contacto" className={`${linkClassesMobile("/contacto")}`}>Contacto</Link>
          <Link href="/pedircita" className={`${linkClassesMobile("/pedircita")}`}>Citas</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




  // const pathName = [
  //   { href: '/', label: 'Inicio' },
  //   { href: '/about', label: 'Dariana Ortiz' },
  //   {
  //     href: '/tratamientos',
  //     label: 'Tratamientos',
  //     submenu: [
  //       { href: '/tratamientos/corporales', label: 'Corporales' },
  //       { href: '/tratamientos/faciales', label: 'Faciales' },
  //     ],
  //   },
  //   { href: '/contacto', label: 'Contacto' },
  //   { href: '/pedircita', label: 'Citas' },
  // ];
