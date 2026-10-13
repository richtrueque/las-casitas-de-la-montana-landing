"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hasBg, setHasBg] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const heroHeight = window.innerHeight;

      if (currentY <= 100) {
        setHidden(false);
        setHasBg(false);
      } else if (currentY > lastY.current) {
        if (currentY > heroHeight) {
          setHidden(true);
          setHasBg(false);
        } else {
          setHidden(false);
          setHasBg(false);
        }
      } else {
        setHidden(false);
        if (currentY > heroHeight) {
          setHasBg(true);
        } else {
          setHasBg(false);
        }
      }
      lastY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{'@keyframes slideDown { from { transform: translateY(-28px); opacity: 0; } to { transform: translateY(0); opacity: 1; } } @keyframes logoPop { 0% { transform: scale(1); } 40% { transform: scale(1.18); } 70% { transform: scale(0.95); } 100% { transform: scale(1); } } .logo-hover:hover { animation: logoPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }'}</style>

      <header className={"fixed top-0 left-0 z-30 w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] " + (hidden ? "-translate-y-full " : "translate-y-0 ") + (hasBg ? "bg-[#0f2e1e]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.25)]" : "bg-transparent border-b border-transparent")}>
        <div className="flex items-center justify-between px-5 py-4 lg:px-10 lg:py-5">
          <Link
            href="/"
            className="flex items-center"
            style={{
              animation: "slideDown 0.7s ease-out 0.1s forwards",
              opacity: 0,
            }}
          >
            <img
              src="/logo.png"
              alt="Las Casitas de la Montaña"
              className="logo-hover h-[65px] w-auto lg:h-[80px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition-transform duration-300 will-change-transform"
            />
          </Link>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="group relative flex h-6 w-8 flex-col justify-between py-1"
              aria-label="Menú"
              style={{
                animation: "slideDown 0.7s ease-out 0.3s forwards",
                opacity: 0,
              }}
            >
              <span className={"block h-[4px] w-8 origin-left rounded-full bg-[#ff8c42] transition-all duration-300 " + (menuOpen ? "translate-y-[8px] rotate-[45deg] w-8" : "group-hover:w-[18px] group-hover:translate-y-[4px] group-hover:rotate-[35deg]")} />
              <span className={"block h-[4px] w-8 rounded-full bg-[#ff8c42] transition-all duration-200 " + (menuOpen ? "opacity-0 scale-x-0" : "group-hover:opacity-0 group-hover:scale-x-0")} />
              <span className={"block h-[4px] w-8 origin-left rounded-full bg-[#ff8c42] transition-all duration-300 " + (menuOpen ? "-translate-y-[8px] -rotate-[45deg] w-8" : "group-hover:w-[18px] group-hover:-translate-y-[4px] group-hover:-rotate-[35deg]")} />
            </button>

            <a
              href="https://wa.me/523335777594?text=Hola!%20Quiero%20reservar%20en%20Las%20Casitas%20de%20la%20Monta%C3%B1a%20-%20Mazamitla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-[1.5px] border-[#22c55e] bg-white/[0.04] backdrop-blur-md px-4 py-[8px] text-[12px] sm:px-7 sm:py-[10px] sm:text-[14px] font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#22c55e] hover:border-[#22c55e] hover:shadow-[0_0_22px_rgba(34,197,94,0.5)] hover:scale-[1.02] active:scale-[0.97]"
              style={{
                animation: "slideDown 0.7s ease-out 0.5s forwards",
                opacity: 0,
              }}
            >
              Reservación
            </a>
          </div>
        </div>
      </header>

      <div className={"fixed inset-0 z-40 transition-all duration-300 " + (menuOpen ? "visible" : "invisible")}>
        <div className={"absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 " + (menuOpen ? "opacity-100" : "opacity-0")} onClick={() => setMenuOpen(false)} />
        <aside className={"absolute left-0 top-0 flex h-full w-[300px] max-w-[85vw] flex-col bg-[#0f2e1e]/95 backdrop-blur-xl border-r border-white/10 shadow-2xl transition-transform duration-300 ease-out " + (menuOpen ? "translate-x-0" : "-translate-x-full")}>
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
            <button onClick={() => setMenuOpen(false)} className="text-white/60 hover:text-white p-2">✕</button>
          </div>
          <nav className="flex flex-col gap-1 p-6">
            <button onClick={scrollToTop} className="rounded-lg px-4 py-3 text-left text-white/90 hover:bg-white/10 hover:text-[#ff8c42]">Inicio</button>
            <button onClick={() => scrollToSection("cabanas")} className="rounded-lg px-4 py-3 text-left text-white/90 hover:bg-white/10 hover:text-[#ff8c42]">Cabañas</button>
            <button onClick={() => scrollToSection("experiencias")} className="rounded-lg px-4 py-3 text-left text-white/90 hover:bg-white/10 hover:text-[#ff8c42]">Experiencias</button>
            <button onClick={() => scrollToSection("ubicacion")} className="rounded-lg px-4 py-3 text-left text-white/90 hover:bg-white/10 hover:text-[#ff8c42]">Ubicación</button>
            <button onClick={() => scrollToSection("galeria")} className="rounded-lg px-4 py-3 text-left text-white/90 hover:bg-white/10 hover:text-[#ff8c42]">Galería</button>
            <button onClick={() => scrollToSection("contacto")} className="rounded-lg px-4 py-3 text-left text-white/90 hover:bg-white/10 hover:text-[#ff8c42]">Contacto</button>
          </nav>
          <div className="mt-auto p-6">
            <a href="https://wa.me/523335777594?text=Hola!%20Quiero%20reservar%20en%20Las%20Casitas%20de%20la%20Monta%C3%B1a%20-%20Mazamitla" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="flex w-full items-center justify-center rounded-full bg-[#22c55e] px-6 py-3 text-[15px] font-medium text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-[#16a34a]">Reservación por WhatsApp</a>
            <p className="mt-3 text-center text-[12px] text-white/50">3335777594</p>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Header;
