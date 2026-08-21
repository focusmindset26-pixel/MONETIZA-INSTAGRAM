import React from 'react';
import { BONUSES } from '../data';
import { Gift, ArrowRight } from 'lucide-react';

interface ProductAndBonusesProps {
  onSelectBonus?: () => void;
  onImageClick?: () => void;
}

export const ProductAndBonuses: React.FC<ProductAndBonusesProps> = ({
  onImageClick
}) => {
  return (
    <section className="py-16 md:py-20 border-b border-white/5 bg-[#080808] text-center">
      <div className="w-full max-w-[860px] mx-auto px-5">
        {/* Eyebrow */}
        <div className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/40 text-[#22C55E] px-3.5 py-1.5 rounded text-xs font-extrabold tracking-[1.5px] uppercase mb-4">
          ATAJOS DE EJECUCIÓN INCLUIDOS
        </div>

        {/* Título del Bloque */}
        <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(2.1rem,5vw,3.2rem)] leading-[0.98] text-[#F5F5F5] uppercase tracking-[0.5px] mb-3">
          NO EMPIECES TODO DESDE CERO.
        </h2>
        <p className="text-[#C7C7C7] text-base sm:text-lg max-w-[680px] mx-auto leading-relaxed mb-8 font-medium">
          Utiliza recursos ya estructurados para reducir la improvisación y avanzar más rápido.
        </p>

        {/* Marco Visual del Producto Principal */}
        <div className="bg-gradient-to-b from-[#141414] to-[#080808] border border-[#22C55E]/40 rounded-xl p-4 sm:p-5 max-w-[500px] mx-auto my-8 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(34,197,94,0.15)] text-center relative group">
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10 text-xs font-bold text-[#8F8F8F] tracking-[1px]">
            <span className="text-[#22C55E] font-extrabold">ENTREGABLE PRINCIPAL</span>
            <div className="text-white">SISTEMA FACELESS DE 7 DÍAS</div>
          </div>
          <div
            onClick={onImageClick}
            className="w-full rounded-lg overflow-hidden border border-white/10 bg-black cursor-pointer"
          >
            <img
              src="https://i.imgur.com/jWxV4A5.png"
              alt="Monetiza Instagram - Sistema Faceless (Entregable Principal)"
              className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.015]"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Bonus Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-left">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-gradient-to-b from-[#141414] to-[#080808] border border-[#22C55E]/40 rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:-translate-y-1 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(34,197,94,0.15)] group"
            >
              <div>
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10 text-xs font-bold text-[#8F8F8F] tracking-[1px]">
                  <span className="text-[#22C55E] font-extrabold flex items-center gap-1.5">
                    <Gift className="w-3.5 h-3.5 text-[#22C55E]" />
                    {bonus.tag}
                  </span>
                  <span className="text-[#22C55E] bg-[#22C55E]/15 border border-[#22C55E]/40 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider shadow-[0_0_8px_rgba(34,197,94,0.25)]">
                    INCLUIDO GRATIS
                  </span>
                </div>

                {/* Marco Visual Idéntico al Producto Principal */}
                {bonus.image && (
                  <div className="w-full rounded-lg overflow-hidden border border-white/10 bg-black my-2">
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.015]"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                {/* Beneficio Principal (Jerárquicamente Destacado) */}
                {bonus.mainBenefit && (
                  <div className="mt-3 text-xs sm:text-[13px] font-extrabold text-[#22C55E] tracking-wide uppercase">
                    {bonus.mainBenefit}
                  </div>
                )}

                {/* Nombre / Cantidad */}
                <h3 className="font-['Bebas_Neue',sans-serif] text-2xl sm:text-[1.65rem] text-[#F5F5F5] mt-1 mb-2 leading-tight tracking-[0.5px]">
                  {bonus.title}
                </h3>

                {/* Texto de Apoyo */}
                <p className="text-[0.88rem] text-[#C7C7C7] leading-relaxed mb-4">
                  {bonus.desc}
                </p>

                {/* Micro-transformación De -> A */}
                {bonus.transformation && (
                  <div className="pt-3 border-t border-white/10 text-[11px] text-[#A3A3A3] space-y-1.5 bg-black/30 p-2.5 rounded-lg">
                    <div className="flex items-center gap-1.5 text-[#888]">
                      <span className="font-bold text-[#E5E5E5]/60 uppercase text-[10px]">DE:</span>
                      <span>{bonus.transformation.from}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#22C55E]">
                      <span className="font-bold uppercase text-[10px]">A:</span>
                      <span className="font-medium text-[#E5E5E5]">{bonus.transformation.to}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje de Cierre del Stack */}
        <div className="max-w-[760px] mx-auto bg-gradient-to-r from-transparent via-[#141414] to-transparent border-y border-white/10 py-5 px-4 text-center mt-8">
          <p className="font-['Bebas_Neue',sans-serif] text-xl sm:text-2xl md:text-3xl tracking-[0.5px] text-[#F5F5F5] uppercase mb-1">
            MENOS TIEMPO IMPROVISANDO.{' '}
            <span className="text-[#22C55E] block sm:inline">MÁS TIEMPO EJECUTANDO.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
