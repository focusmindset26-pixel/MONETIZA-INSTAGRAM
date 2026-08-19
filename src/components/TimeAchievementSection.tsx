import React from 'react';
import { Clock, Check } from 'lucide-react';

export const TimeAchievementSection: React.FC = () => {
  const achievements = [
    'Nicho definido',
    'Perfil preparado',
    'Pilares de contenido',
    'Banco de ideas',
    'Monetización elegida',
    'Primera oferta + CTA'
  ];

  return (
    <section className="py-16 md:py-24 border-b border-white/5 bg-[#020202] relative overflow-hidden">
      {/* Subtle ambient red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-[#D71912]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[860px] mx-auto px-5 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-block bg-[#D71912]/10 border border-[#D71912]/40 text-[#F1261D] px-3 py-1 rounded text-[11px] font-extrabold tracking-[1.5px] uppercase mb-4">
          UNA RUTA CLARA. UN OBJETIVO CONCRETO.
        </div>

        {/* Headline */}
        <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(2.1rem,5vw,3.2rem)] leading-[0.98] text-[#F5F5F5] uppercase tracking-[0.5px] max-w-[760px] mx-auto mb-4">
          7 DÍAS PARA DEJAR DE IMPROVISAR Y CONSTRUIR LAS BASES DE TU CUENTA FACELESS
        </h2>

        {/* Subheadline */}
        <p className="text-[#C7C7C7] text-base md:text-lg max-w-[680px] mx-auto leading-relaxed mb-12">
          Sigue una ruta de implementación paso a paso para terminar con una cuenta preparada para crear contenido, atraer una audiencia y comenzar a construir una estructura de monetización.
        </p>

        {/* 2 Main Blocks: Side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left max-w-[780px] mx-auto mb-10">
          
          {/* BLOQUE 1 — TIEMPO */}
          <div className="bg-[#0E0E0E] border border-white/10 hover:border-[#D71912]/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D71912]/10 blur-2xl rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-[1.5px] text-[#8F8F8F] uppercase mb-4">
                <Clock className="w-4 h-4 text-[#F1261D]" />
                <span>TIEMPO DE IMPLEMENTACIÓN</span>
              </div>

              {/* Número protagonista */}
              <div className="font-['Bebas_Neue',sans-serif] text-6xl sm:text-7xl lg:text-8xl leading-[0.9] text-white tracking-wide flex items-baseline gap-2 mb-2">
                <span className="text-[#F1261D]">7</span> DÍAS
              </div>

              <h3 className="font-['Bebas_Neue',sans-serif] text-xl sm:text-2xl text-[#F5F5F5] tracking-[0.5px] mb-4 uppercase">
                PARA IMPLEMENTAR LAS BASES
              </h3>
            </div>

            <div className="pt-4 border-t border-white/10 text-sm sm:text-base text-[#C7C7C7] leading-relaxed space-y-1">
              <p className="text-[#8F8F8F]">No son 7 días de teoría.</p>
              <p className="text-white font-semibold">Son 7 días de decisiones y ejecución.</p>
            </div>
          </div>

          {/* BLOQUE 2 — LOGRO */}
          <div className="bg-[#0E0E0E] border border-white/10 hover:border-[#D71912]/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D71912]/10 blur-2xl rounded-full pointer-events-none" />

            <div>
              <div className="text-xs font-bold tracking-[1.5px] text-[#8F8F8F] uppercase mb-2">
                RESULTADO CONCRETO
              </div>

              <h3 className="font-['Bebas_Neue',sans-serif] text-2xl sm:text-3xl text-white tracking-[0.5px] mb-5 uppercase leading-none">
                TERMINAS CON UN SISTEMA CONSTRUIDO
              </h3>

              {/* Checklist breve: Exact 6 elements */}
              <div className="space-y-2.5">
                {achievements.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-[0.93rem] sm:text-[0.98rem] text-[#F5F5F5] font-semibold"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#22C55E] flex items-center justify-center text-xs shrink-0 font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 text-xs text-[#8F8F8F]">
              Estructura lista para comenzar a operar.
            </div>
          </div>
        </div>

        {/* FRANJA FINAL */}
        <div className="max-w-[780px] mx-auto bg-gradient-to-r from-transparent via-[#141414] to-transparent border-y border-white/10 py-5 px-4 text-center">
          <p className="font-['Bebas_Neue',sans-serif] text-xl sm:text-2xl md:text-3xl tracking-[0.5px] text-[#F5F5F5] leading-tight uppercase">
            EN <span className="text-[#F1261D]">7 DÍAS</span> NO TIENES QUE SABERLO TODO.{' '}
            <span className="block sm:inline">
              TIENES QUE SABER <span className="text-[#F1261D]">QUÉ HACER DESPUÉS</span>.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
