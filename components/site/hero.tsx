"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative flex min-h-[100svh] h-screen w-full items-center justify-center overflow-hidden bg-[#0a1a0f]">
      <style>{'@keyframes fadeUpSlow { from { transform: translateY(28px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }'}</style>

      <div className="absolute inset-0">
        <img
          src="/images/hero-bosque.webp"
          alt="Bosque Mazamitla"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 pt-20 text-center">
        <h1 className="flex flex-col font-serif">
          <span
            className="font-serif font-light tracking-wide text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] text-[34px] sm:text-[46px] lg:text-[62px] leading-[1.15]"
            style={{
              animation: show ? "fadeUpSlow 1.2s ease-out 1s forwards" : "none",
              opacity: 0,
            }}
          >
            Tu refugio de paz
          </span>
          <span
            className="mt-1 font-serif font-light tracking-wide text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] text-[34px] sm:text-[46px] lg:text-[62px] leading-[1.15]"
            style={{
              animation: show ? "fadeUpSlow 1.2s ease-out 1.4s forwards" : "none",
              opacity: 0,
            }}
          >
            en Mazamitla
          </span>
        </h1>

        <div
          className="mt-10"
          style={{
            animation: show ? "fadeUpSlow 1s ease-out 1.9s forwards" : "none",
            opacity: 0,
          }}
        >
          <Link
            href="#cabanas"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[0.08] backdrop-blur-md px-9 py-3.5 text-[15px] font-medium tracking-wide text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Ver Cabañas</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
