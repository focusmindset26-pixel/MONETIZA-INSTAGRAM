import React from 'react';
import { Bot, FileText, Users, Target, DollarSign, ArrowRight, ArrowDown } from 'lucide-react';

export const OpportunityConnectionSection: React.FC = () => {
  const sequenceSteps = [
    {
      id: '01',
      title: 'IA',
      subtitle: 'Acelera investigación, ideas y ejecución.',
      icon: Bot,
    },
    {
      id: '02',
      title: 'CONTENIDO',
      subtitle: 'Convierte ideas en atención.',
      icon: FileText,
    },
    {
      id: '03',
      title: 'AUDIENCIA',
      subtitle: 'Convierte atención en confianza.',
      icon: Users,
    },
    {
      id: '04',
      title: 'OFERTA',
      subtitle: 'Conecta un problema con una solución.',
      icon: Target,
    },
    {
      id: '05',
      title: 'MONETIZACIÓN',
      subtitle: 'Da una dirección económica a la atención que construyes.',
      icon: DollarSign,
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-white/5 bg-[#0A0A0A] relative overflow-hidden">
      {/* Ambient green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#22C55E]/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[860px] mx-auto px-5 relative z-10 text-center">
        {/* Eyebrow / Texto superior */}
        <div className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/40 text-[#22C55E] px-3.5 py-1.5 rounded text-xs font-extrabold tracking-[1.5px] uppercase mb-4">
          LA OPORTUNIDAD NO ESTÁ EN USAR MÁS HERRAMIENTAS.
        </div>

        {/* Headline */}
        <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(2.1rem,5vw,3.2rem)] leading-[0.98] text-[#F5F5F5] uppercase tracking-[0.5px] max-w-[780px] mx-auto mb-4">
          ESTÁ EN SABER CÓMO CONECTARLAS.
        </h2>

        {/* Subtitle */}
        <p className="text-[#C7C7C7] text-base sm:text-lg max-w-[720px] mx-auto leading-relaxed mb-12 font-medium">
          La inteligencia artificial puede ayudarte a ejecutar más rápido. Instagram puede darte distribución. Pero ninguna herramienta por sí sola construye un negocio.
        </p>

        {/* Secuencia Principal de 5 Pasos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 max-w-[840px] mx-auto mb-12 text-left">
          {sequenceSteps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="relative flex flex-col">
                <div className="h-full bg-[#0E0E0E] border border-white/10 hover:border-[#22C55E]/50 rounded-xl p-4 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)] group hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#22C55E]/10 blur-lg rounded-full pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-extrabold tracking-wider text-[#22C55E] bg-[#22C55E]/15 px-2 py-0.5 rounded border border-[#22C55E]/30">
                        {step.id}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#22C55E]/40 transition-colors">
                        <IconComponent className="w-3.5 h-3.5 text-[#22C55E]" />
                      </div>
                    </div>

                    <h3 className="font-['Bebas_Neue',sans-serif] text-xl text-white tracking-[0.5px] uppercase mb-1">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#A3A3A3] leading-relaxed">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow indicator between steps for desktop/laptop */}
                {idx < sequenceSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-[#22C55E]">
                    <ArrowRight className="w-3.5 h-3.5 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mensaje Central */}
        <div className="max-w-[720px] mx-auto bg-[#0E0E0E] border border-white/10 rounded-xl p-5 sm:p-6 mb-12 shadow-lg text-center">
          <p className="font-['Bebas_Neue',sans-serif] text-2xl sm:text-3xl text-white tracking-[0.5px] uppercase mb-1">
            LA IA NO ES EL NEGOCIO.
          </p>
          <p className="font-['Bebas_Neue',sans-serif] text-2xl sm:text-3xl text-[#22C55E] tracking-[0.5px] uppercase mb-3">
            ES EL APALANCAMIENTO.
          </p>
          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#D4D4D4]">
            <span className="text-[#22C55E]">INSTAGRAM TE DA DISTRIBUCIÓN.</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="text-white">EL SISTEMA TE DA DIRECCIÓN.</span>
          </div>
        </div>

        {/* Cierre */}
        <div className="max-w-[780px] mx-auto bg-gradient-to-r from-transparent via-[#141414] to-transparent border-y border-white/10 py-6 px-4 text-center">
          <p className="font-['Bebas_Neue',sans-serif] text-xl sm:text-2xl tracking-[0.5px] text-[#F5F5F5] leading-tight uppercase mb-1">
            NO NECESITAS APRENDERLO TODO.
          </p>
          <p className="font-['Bebas_Neue',sans-serif] text-2xl sm:text-3xl tracking-[0.5px] text-[#22C55E] leading-tight uppercase mb-3">
            NECESITAS SABER QUÉ CONSTRUIR Y EN QUÉ ORDEN.
          </p>
          <p className="text-sm sm:text-base text-[#C7C7C7] font-medium max-w-[580px] mx-auto">
            <strong className="text-white">MONETIZA INSTAGRAM</strong> te muestra cómo empezar a conectar estas piezas dentro de un sistema faceless.
          </p>
        </div>
      </div>
    </section>
  );
};
