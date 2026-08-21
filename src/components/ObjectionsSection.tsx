import React from 'react';
import { XCircle } from 'lucide-react';

export const ObjectionsSection: React.FC = () => {
  const objections = [
    {
      title: 'SER EXPERTO EN IA',
      desc: 'Necesitas saber utilizarla para tareas concretas que te ayuden a investigar, crear y ejecutar más rápido.'
    },
    {
      title: 'SER INFLUENCER',
      desc: 'El sistema está diseñado para construir cuentas faceless sin convertir tu vida personal en contenido.'
    },
    {
      title: 'TENER MILES DE SEGUIDORES',
      desc: 'Primero necesitas dirección, contenido y una audiencia correcta. El tamaño viene después.'
    },
    {
      title: 'TENER UN EQUIPO',
      desc: 'Puedes empezar utilizando herramientas digitales e IA para multiplicar tu capacidad y reducir tareas que antes requerían más recursos.'
    },
    {
      title: 'SABERLO TODO',
      desc: 'Necesitas saber cuál es el siguiente paso y ejecutarlo.'
    }
  ];

  return (
    <section className="py-16 md:py-24 border-b border-white/5 bg-[#020202] text-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] bg-[#22C55E]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[860px] mx-auto px-5 relative z-10">
        {/* Eyebrow */}
        <div className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/40 text-[#22C55E] px-3.5 py-1.5 rounded text-xs font-extrabold tracking-[1.5px] uppercase mb-4">
          BARRERAS QUE EL SISTEMA ELIMINA
        </div>

        {/* Título Principal */}
        <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(2.1rem,5vw,3.2rem)] leading-[0.98] text-[#F5F5F5] uppercase tracking-[0.5px] mb-3">
          NO NECESITAS...
        </h2>

        {/* Subtítulo */}
        <p className="text-[#C7C7C7] text-base sm:text-lg max-w-[680px] mx-auto leading-relaxed mb-10 font-medium">
          EMPEZAR NO REQUIERE SABERLO TODO.{' '}
          <span className="text-white block sm:inline font-semibold">REQUIERE SABER QUÉ HACER DESPUÉS.</span>
        </p>

        {/* 5 Objeciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-[840px] mx-auto mb-12">
          {objections.map((obj, idx) => (
            <div
              key={idx}
              className={`bg-[#0E0E0E] border border-white/10 hover:border-[#22C55E]/40 p-5 rounded-xl transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#22C55E]/5 blur-lg rounded-full pointer-events-none" />

              <div>
                <div className="flex items-center gap-1.5 mb-2 text-[#EF4444] text-[11px] font-extrabold tracking-wider uppercase">
                  <XCircle className="w-3.5 h-3.5 text-[#EF4444]" />
                  <span>NO NECESITAS</span>
                </div>

                <h3 className="font-['Bebas_Neue',sans-serif] text-xl sm:text-2xl text-[#F5F5F5] mb-2 leading-tight tracking-[0.5px]">
                  {obj.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#A3A3A3] leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Remate del Bloque */}
        <div className="max-w-[780px] mx-auto bg-gradient-to-r from-transparent via-[#141414] to-transparent border-y border-white/10 py-6 px-4 text-center">
          <p className="font-['Bebas_Neue',sans-serif] text-xl sm:text-2xl md:text-3xl tracking-[0.5px] text-[#F5F5F5] uppercase leading-tight mb-1">
            NO NECESITAS MÁS RECURSOS.
          </p>
          <p className="font-['Bebas_Neue',sans-serif] text-2xl sm:text-3xl md:text-4xl tracking-[0.5px] text-[#22C55E] uppercase leading-tight mb-4">
            NECESITAS SABER UTILIZAR MEJOR LOS QUE YA TIENES.
          </p>
          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#D4D4D4]">
            <span>UN CELULAR.</span>
            <span className="text-[#22C55E]">•</span>
            <span>IA.</span>
            <span className="text-[#22C55E]">•</span>
            <span>INSTAGRAM.</span>
            <span className="text-[#22C55E]">•</span>
            <span>UN SISTEMA.</span>
            <span className="text-[#22C55E]">•</span>
            <span className="text-white">Y LA DECISIÓN DE EMPEZAR.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
