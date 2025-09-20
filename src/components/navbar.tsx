"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Climatec" width={40} height={40} />
          <span className="text-xl font-bold primary">Climatec</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:primary font-medium">
            Inicio
          </Link>
          <Link href="/servicios" className="text-gray-700 hover:primary font-medium">
            Servicios
          </Link>
          <Link href="/productos" className="text-gray-700 hover:primary font-medium">
            Productos
          </Link>
          <Link href="/proyectos" className="text-gray-700 hover:primary font-medium">
            Proyectos
          </Link>
          <Link href="/contacto" className="text-gray-700 hover:primary font-medium">
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:primary font-medium" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:primary font-medium" onClick={() => setIsMenuOpen(false)}>
              Servicios
            </Link>
            <Link href="/productos" className="text-gray-700 hover:primary font-medium" onClick={() => setIsMenuOpen(false)}>
              Productos
            </Link>
            <Link href="/proyectos" className="text-gray-700 hover:primary font-medium" onClick={() => setIsMenuOpen(false)}>
              Proyectos
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:primary font-medium" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;