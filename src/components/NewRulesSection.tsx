import React from 'react';
import { Bot, Share2, DollarSign } from 'lucide-react';

export const NewRulesSection: React.FC = () => {
  const elements = [
    {
      number: '01',
      title: 'INTELIGENCIA ARTIFICIAL',
      description: 'Acelera investigación, ideas, hooks, contenido y tareas que antes consumían mucho más tiempo.',
      icon: Bot,
    },
    {
      number: '02',
      title: 'DISTRIBUCIÓN',
      description: 'Instagram te permite convertir contenido en atención y comenzar a construir una audiencia.',
      icon: Share2,
    },
    {
      number: '03',
      title: 'MONETIZACIÓN',
      description: 'Una oferta le da una dirección económica a la atención que consigues.',
      icon: DollarSign,
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-white/5 bg-[#080808] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#22C55E]/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[860px] mx-auto px-5 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/40 text-[#22C55E] px-3.5 py-1.5 rounded text-xs font-extrabold tracking-[1.5px] uppercase mb-4">
          UNA NUEVA FORMA DE CONSTRUIR YA ESTÁ AQUÍ
        </div>

        {/* Headline */}
        <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(2.1rem,5vw,3.2rem)] leading-[0.98] text-[#F5F5F5] uppercase tracking-[0.5px] max-w-[780px] mx-auto mb-4">
          LAS REGLAS DEL NEGOCIO DIGITAL ESTÁN CAMBIANDO.
        </h2>

        {/* Subheadline */}
        <p className="text-[#C7C7C7] text-base sm:text-lg max-w-[720px] mx-auto leading-relaxed mb-6 font-medium">
          Hoy una sola persona puede utilizar inteligencia artificial, contenido y plataformas digitales para investigar, crear y ejecutar mucho más rápido que antes.
        </p>

        {/* Texto de apoyo */}
        <div className="max-w-[640px] mx-auto bg-[#0E0E0E] border border-white/10 rounded-xl p-4 sm:p-5 mb-12 text-sm sm:text-base text-[#A3A3A3] leading-relaxed text-center shadow-lg">
          <p className="text-white font-semibold mb-1">
            Pero tener herramientas no significa tener un negocio.
          </p>
          <p>
            El verdadero valor aparece cuando sabes qué construir, para quién y en qué orden.
          </p>
        </div>

        {/* 3 Elementos Principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left max-w-[820px] mx-auto mb-12">
          {elements.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.number}
                className="bg-[#0E0E0E] border border-white/10 hover:border-[#22C55E]/50 rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden group hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#22C55E]/10 blur-xl rounded-full pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-extrabold tracking-wider text-[#22C55E] bg-[#22C55E]/15 px-2 py-0.5 rounded border border-[#22C55E]/30">
                      {item.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#22C55E]/40 transition-colors">
                      <IconComp className="w-4 h-4 text-[#22C55E]" />
                    </div>
                  </div>

                  <h3 className="font-['Bebas_Neue',sans-serif] text-xl sm:text-2xl text-white tracking-[0.5px] uppercase mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#C7C7C7] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cierre del bloque */}
        <div className="max-w-[780px] mx-auto bg-gradient-to-r from-transparent via-[#141414] to-transparent border-y border-white/10 py-6 px-4 text-center">
          <p className="font-['Bebas_Neue',sans-serif] text-xl sm:text-2xl md:text-3xl tracking-[0.5px] text-[#F5F5F5] leading-tight uppercase mb-1">
            EL PROBLEMA YA NO ES LA FALTA DE HERRAMIENTAS.
          </p>
          <p className="font-['Bebas_Neue',sans-serif] text-2xl sm:text-3xl md:text-4xl tracking-[0.5px] text-[#22C55E] leading-tight uppercase mb-3">
            ES NO SABER CÓMO CONECTARLAS.
          </p>
          <p className="text-sm sm:text-base text-[#C7C7C7] font-medium max-w-[520px] mx-auto">
            <strong className="text-white">MONETIZA INSTAGRAM</strong> te da una ruta para comenzar a hacerlo.
          </p>
        </div>
      </div>
    </section>
  );
};
