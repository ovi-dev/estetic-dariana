"use client";
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ActiveLink from '../active-link/ActiveLink';

const Menu = () => {
  const pathName = [
    { href: '/', label: 'Inicio' },
    { href: '/about', label: 'Dariana Ortiz' },
    {
      href: '/tratamientos',
      label: 'Tratamientos',
      submenu: [
        { href: '/tratamientos/corporales', label: 'Corporales' },
        { href: '/tratamientos/faciales', label: 'Faciales' },
      ],
    },
    { href: '/contacto', label: 'Contacto' },
    { href: '/pedircita', label: 'Citas' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const submenuRef = useRef<HTMLDivElement | null>(null); // Referencia para el submenú

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  // Lógica para cerrar submenú si se hace clic fuera (solo para pantallas grandes)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setSubmenuOpen(false); // Cierra el submenú si se hace clic fuera
      }
    };

    const handleLinkClick = () => {
      setMenuOpen(false); // Cierra el menú en pantallas pequeñas
      setSubmenuOpen(false); // Cierra el submenú
    };

    if (window.innerWidth >= 768) { // Solo aplica para pantallas grandes
      document.addEventListener('mousedown', handleClickOutside);
    }

    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      if (window.innerWidth >= 768) {
        document.removeEventListener('mousedown', handleClickOutside);
      }

      document.querySelectorAll('a').forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, [submenuOpen]);

  return (
    <header className="sticky top-6 mx-auto px-4 bg-slate-200 mt-4 ">
      <nav className="flex">
        <div className="container mx-auto flex items-center justify-between p-1">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/fotospng/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="mr-2"
              />
            </Link>
          </div>

          {/* Menú de Navegación (pantallas grandes) */}
          <div className="hidden md:flex space-x-4">
            {pathName.map((navItem) =>
              navItem.label === 'Tratamientos' ? (
                <div key={navItem.href} className="relative" ref={submenuRef}>
                  <button
                    className="m-2 p-2 rounded-md transition-all hover:bg-hover"
                    onClick={toggleSubmenu}
                  >
                    {navItem.label}
                  </button>
                  {submenuOpen && (
                    <div className="absolute top-full bg-slate-100 border border-gray-200 rounded-md shadow-lg">
                      <ul>
                        {navItem.submenu?.map((subItem) => (
                          <li
                            key={subItem.href}
                            className="m-2 p-2 rounded-md transition-all hover:bg-cyan-400"
                          >
                            <Link href={subItem.href}>{subItem.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : ( <ActiveLink key={navItem.href} {...navItem} /> )
            )}
          </div>

          {/* Botón de Menú para pantallas pequeñas */}
          <div className="md:hidden">
            <button className="text-black focus:outline-none" onClick={toggleMenu}>
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menú desplegable para pantallas pequeñas */}
        {menuOpen && (
          <div className="md:hidden flex justify-end pt-28">
            <div className="flex flex-col space-y-2 p-2 absolute bg-fondonav rounded-[12px] border-gray-800">
              {pathName.map((navItem) =>
                navItem.label === 'Tratamientos' ? (
                  <div key={navItem.href}>
                    <button
                      className="m-2 p-2 rounded-md transition-all hover:bg-hover"
                      onClick={toggleSubmenu}
                    >
                      {navItem.label}
                    </button>
                    {submenuOpen && (
                      <div className="pl-4">
                        <ul className="flex flex-col space-y-2">
                          {navItem.submenu?.map((subItem) => (
                            <li key={subItem.href}>
                              <Link
                                href={subItem.href}
                                className="m-2 p-2 rounded-md transition-all hover:bg-cyan-400"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <ActiveLink key={navItem.href} {...navItem} />
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Menu;

