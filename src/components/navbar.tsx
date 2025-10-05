"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-[#e6a126]/20 bg-[#0a1b25]/75 backdrop-blur-lg transition-all">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 z-40">
          {/* Línea izquierda - solo desktop */}
          <span className="hidden lg:block h-0.5 w-12 bg-[#e6a126] rounded-full" />
          
          {/* Logo + Texto */}
          <span className="flex items-center space-x-2 px-3 py-2">
            {/* Copo de nieve SVG */}
            <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
              <g stroke="#e6a126" strokeWidth="2.5" strokeLinecap="round">
                <line x1="19" y1="4" x2="19" y2="34" />
                <line x1="4" y1="19" x2="34" y2="19" />
                <line x1="9" y1="9" x2="29" y2="29" />
                <line x1="29" y1="9" x2="9" y2="29" />
              </g>
            </svg>
            {/* Texto */}
            <span className="font-extrabold italic text-white text-xl tracking-tight">
              CLIMATEC
            </span>
          </span>
          
          {/* Línea derecha - solo desktop */}
          <span className="hidden lg:block h-0.5 w-12 bg-[#e6a126] rounded-full" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex h-full items-center space-x-1">
          <Link 
            href="/" 
            className="text-white/80 hover:text-[#e6a126] font-semibold px-4 py-2 rounded-md transition-colors hover:bg-[#11344a]/50"
          >
            Inicio
          </Link>
          <Link 
            href="/servicios" 
            className="text-white/80 hover:text-[#e6a126] font-semibold px-4 py-2 rounded-md transition-colors hover:bg-[#11344a]/50"
          >
            Servicios
          </Link>
          <Link 
            href="/productos" 
            className="text-white/80 hover:text-[#e6a126] font-semibold px-4 py-2 rounded-md transition-colors hover:bg-[#11344a]/50"
          >
            Productos
          </Link>
          <Link 
            href="/proyectos" 
            className="text-white/80 hover:text-[#e6a126] font-semibold px-4 py-2 rounded-md transition-colors hover:bg-[#11344a]/50"
          >
            Proyectos
          </Link>
          
          {/* Separador vertical */}
          <div className="h-6 w-px bg-[#e6a126]/30 mx-2" />
          
          {/* Botón CTA */}
          <Link 
            href="/contacto" 
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] text-[#0a1b25] font-bold px-5 py-2 rounded-full shadow-lg hover:shadow-[#e6a126]/50 transition-all hover:scale-105 border border-[#ffbe3d]/30"
          >
            Contacto
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-[#11344a]/50 rounded-md transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0a1b25]/95 backdrop-blur-lg border-b border-[#e6a126]/20 shadow-2xl">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-1">
              <Link 
                href="/" 
                className="text-white/90 hover:text-[#e6a126] hover:bg-[#11344a]/50 font-semibold px-4 py-3 rounded-lg transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/servicios" 
                className="text-white/90 hover:text-[#e6a126] hover:bg-[#11344a]/50 font-semibold px-4 py-3 rounded-lg transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                href="/productos" 
                className="text-white/90 hover:text-[#e6a126] hover:bg-[#11344a]/50 font-semibold px-4 py-3 rounded-lg transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <Link 
                href="/proyectos" 
                className="text-white/90 hover:text-[#e6a126] hover:bg-[#11344a]/50 font-semibold px-4 py-3 rounded-lg transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </Link>
              
              {/* Separador */}
              <div className="h-px bg-[#e6a126]/20 my-2" />
              
              {/* CTA Button Mobile */}
              <Link 
                href="/contacto" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] text-[#0a1b25] font-bold px-5 py-3 rounded-full shadow-lg hover:shadow-[#e6a126]/50 transition-all mt-2 border border-[#ffbe3d]/30" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
                <ArrowRight className="h-5 w-5" />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;