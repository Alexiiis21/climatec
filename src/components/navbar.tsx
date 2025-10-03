"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-[#0d2230] shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          {/* Línea izquierda */}
          <span className="hidden md:block h-0.5 w-16 bg-[#e6a126] rounded-full" />
          {/* Logo SVG + texto */}
          <span className="flex items-center space-x-2 px-2 bg-[#11344a] rounded-md py-1 pl-3 pr-5">
            {/* Copo de nieve SVG */}
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
              <g stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <line x1="19" y1="4" x2="19" y2="34" />
                <line x1="4" y1="19" x2="34" y2="19" />
                <line x1="9" y1="9" x2="29" y2="29" />
                <line x1="29" y1="9" x2="9" y2="29" />
              </g>
            </svg>
            {/* Texto estilizado */}
            <span className="font-extrabold italic text-white text-2xl tracking-tight relative ml-2">
              CLIMATEC
            </span>
          </span>
          {/* Línea derecha */}
          <span className="hidden md:block h-0.5 w-16 bg-[#e6a126] rounded-full" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white/90 hover:text-[#e6a126] font-semibold transition-colors">Inicio</Link>
          <Link href="/servicios" className="text-white/90 hover:text-[#e6a126] font-semibold transition-colors">Servicios</Link>
          <Link href="/productos" className="text-white/90 hover:text-[#e6a126] font-semibold transition-colors">Productos</Link>
          <Link href="/proyectos" className="text-white/90 hover:text-[#e6a126] font-semibold transition-colors">Proyectos</Link>
          <Link href="/contacto" className="ml-2 inline-flex items-center bg-[#e6a126] text-[#11344a] font-semibold py-2 px-5 rounded-full shadow hover:bg-[#ffbe3d] transition-all border-2 border-[#e6a126]/30">
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#11344a] py-6 px-6 shadow-lg">
          <nav className="flex flex-col space-y-5">
            <Link href="/" className="text-white/90 hover:text-[#e6a126] font-semibold" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="/servicios" className="text-white/90 hover:text-[#e6a126] font-semibold" onClick={() => setIsMenuOpen(false)}>
              Servicios
            </Link>
            <Link href="/productos" className="text-white/90 hover:text-[#e6a126] font-semibold" onClick={() => setIsMenuOpen(false)}>
              Productos
            </Link>
            <Link href="/proyectos" className="text-white/90 hover:text-[#e6a126] font-semibold" onClick={() => setIsMenuOpen(false)}>
              Proyectos
            </Link>
            <Link href="/contacto" className="inline-flex items-center bg-[#e6a126] text-[#11344a] font-semibold py-2 px-5 rounded-full shadow hover:bg-[#ffbe3d] transition-all border-2 border-[#e6a126]/30" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;