import React from 'react';
import { Target, Layers, Sparkles, DollarSign, TrendingUp, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const TransformationSection: React.FC = () => {
  const stages = [
    {
      number: '01',
      title: 'DEFINE',
      sub: 'Nicho + audiencia + problema.',
      microcopy: 'Dejas de hablarle a todo el mundo y eliges una dirección clara.',
      icon: Target
    },
    {
      number: '02',
      title: 'CONSTRUYE',
      sub: 'Perfil + posicionamiento + bio.',
      microcopy: 'Transformas una cuenta vacía en un perfil que explica qué ofrece y para quién.',
      icon: Layers
    },
    {
      number: '03',
      title: 'PUBLICA',
      sub: 'Pilares + ideas + hooks + formatos faceless.',
      microcopy: 'Dejas de preguntarte qué publicar y empiezas a crear con propósito.',
      icon: Sparkles
    },
    {
      number: '04',
      title: 'MONETIZA',
      sub: 'Audiencia + problema + solución + oferta.',
      microcopy: 'Dejas de perseguir seguidores y conectas atención con una oportunidad real de monetización.',
      icon: DollarSign
    },
    {
      number: '05',
      title: 'MEJORA',
      sub: 'Publica + mide + optimiza.',
      microcopy: 'Dejas de adivinar y utilizas datos para decidir qué repetir, cambiar o eliminar.',
      icon: TrendingUp
    }
  ];

  const beforeItems = [
    'No sé qué publicar.',
    'No sé qué vender.',
    'Cambio de estrategia.',
    'Publico sin dirección.',
    'Miro métricas sin saber qué hacer.'
  ];

  const afterItems = [
    'Sé a quién hablo.',
    'Sé qué contenido crear.',
    'Tengo una monetización elegida.',
    'Tengo una oferta y CTA.',
    'Sé qué medir y mejorar.'
  ];

  const roadmapSteps = [
    'NICHO',
    'PERFIL',
    'CONTENIDO',
    'AUDIENCIA',
    'MONETIZACIÓN',
    'OFERTA',
    'CTA',
    'MEDIR',
    'OPTIMIZAR'
  ];

  return (
    <section className="py-16 md:py-24 border-b border-white/5 bg-[#080808] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#D71912]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[860px] mx-auto px-5 relative z-10 text-center">
        
        {/* EYEBROW */}
        <div className="inline-block bg-[#D71912]/10 border border-[#D71912]/40 text-[#F1261D] px-3.5 py-1 rounded text-[11px] font-extrabold tracking-[1.5px] uppercase mb-4">
          NO ES MÁS INFORMACIÓN. ES UN RECORRIDO.
        </div>

        {/* HEADLINE */}
        <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(2.1rem,5vw,3.2rem)] leading-[0.98] text-[#F5F5F5] uppercase tracking-[0.5px] max-w-[760px] mx-auto mb-4">
          PASAS DE IMPROVISAR A CONSTRUIR CON UN SISTEMA
        </h2>

        {/* SUBHEADLINE */}
        <p className="text-[#C7C7C7] text-base md:text-lg max-w-[680px] mx-auto leading-relaxed mb-12">
          MONETIZA INSTAGRAM organiza las decisiones clave en el orden correcto para que sepas qué construir, qué publicar, cómo monetizar y qué mejorar después.
        </p>

        {/* ==========================================================================
            5 ETAPAS (HORIZONTAL EN DESKTOP / VERTICAL EN MOBILE)
           ========================================================================== */}
        <div className="mb-14">
          {/* Mobile View: Vertical connected timeline */}
          <div className="md:hidden relative text-left pl-6 border-l-2 border-[#D71912]/40 space-y-7 my-6 ml-4">
            {stages.map((stage, idx) => {
              const IconComponent = stage.icon;
              return (
                <div key={stage.number} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#080808] border-2 border-[#F1261D] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F1261D]" />
                  </div>

                  <div className="bg-[#0E0E0E] border border-white/10 rounded-lg p-4 shadow-md transition-all group-hover:border-[#D71912]/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-[#F1261D]" />
                        <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-white tracking-[0.5px]">
                          {stage.number}. {stage.title}
                        </h3>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-[#F1261D] mb-1.5">
                      {stage.sub}
                    </div>
                    <p className="text-xs text-[#C7C7C7] leading-relaxed">
                      {stage.microcopy}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop View: 5 Cards Grid */}
          <div className="hidden md:grid md:grid-cols-5 gap-3 text-left">
            {stages.map((stage, idx) => {
              const IconComponent = stage.icon;
              return (
                <div
                  key={stage.number}
                  className="bg-[#0E0E0E] border border-white/10 hover:border-[#D71912]/60 rounded-lg p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg relative group"
                >
                  <div>
                    <div className="flex items-center justify-between text-[#8F8F8F] mb-3">
                      <span className="text-[10px] font-extrabold tracking-wider text-[#F1261D] bg-[#D71912]/15 px-1.5 py-0.5 rounded">
                        {stage.number}
                      </span>
                      <IconComponent className="w-4 h-4 text-[#F1261D] group-hover:scale-110 transition-transform" />
                    </div>

                    <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-white tracking-[0.5px] mb-1 leading-none">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] font-bold text-[#F1261D] leading-tight mb-2.5">
                      {stage.sub}
                    </p>
                  </div>

                  <p className="text-[11px] text-[#C7C7C7] leading-snug pt-2 border-t border-white/5">
                    {stage.microcopy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================================================
            DIAGRAMA RESUMEN
           ========================================================================== */}
        <div className="mb-14 p-5 sm:p-6 bg-gradient-to-b from-[#120404] to-[#0a0a0a] border border-[#D71912]/40 rounded-xl shadow-[0_10px_35px_rgba(215,25,18,0.15)] text-center">
          <span className="text-[11px] font-extrabold tracking-[2px] text-[#F1261D] uppercase block mb-3">
            DIAGRAMA DE LA RUTA COMPLETA
          </span>

          <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2">
            {roadmapSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="bg-[#020202] border border-white/15 px-3 py-1.5 rounded text-xs sm:text-sm font-bold text-white tracking-wider shadow-sm">
                  {step}
                </div>
                {idx < roadmapSteps.length - 1 && (
                  <span className="text-[#F1261D] font-black text-xs sm:text-sm select-none">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ==========================================================================
            BLOQUE ANTES / DESPUÉS
           ========================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left max-w-[760px] mx-auto mb-12">
          {/* ANTES */}
          <div className="bg-[#0E0E0E] border border-white/10 rounded-xl p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8F8F8F]" />
              <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#8F8F8F] tracking-[1px]">
                ANTES
              </h3>
            </div>
            <div className="space-y-3">
              {beforeItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#8F8F8F]">
                  <XCircle className="w-4 h-4 text-[#8F8F8F] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DESPUÉS */}
          <div className="bg-gradient-to-b from-[#140606] to-[#0E0E0E] border border-[#D71912]/50 rounded-xl p-5 sm:p-6 shadow-[0_4px_25px_rgba(215,25,18,0.12)]">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F1261D] animate-pulse" />
              <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-white tracking-[1px]">
                DESPUÉS
              </h3>
            </div>
            <div className="space-y-3">
              {afterItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==========================================================================
            MENSAJE CENTRAL
           ========================================================================== */}
        <div className="max-w-[760px] mx-auto bg-[#0E0E0E] border border-white/10 py-6 px-5 rounded-lg text-center">
          <p className="font-['Bebas_Neue',sans-serif] text-xl sm:text-2xl md:text-3xl tracking-[0.5px] text-[#F5F5F5] uppercase leading-snug">
            NO CAMBIAS POR SABER MÁS.{' '}
            <span className="block mt-1">
              CAMBIAS POR EJECUTAR LAS{' '}
              <span className="text-[#F1261D]">DECISIONES CORRECTAS</span> EN EL{' '}
              <span className="text-[#F1261D]">ORDEN CORRECTO</span>.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
