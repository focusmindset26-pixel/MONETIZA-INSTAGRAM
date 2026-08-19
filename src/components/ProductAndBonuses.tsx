import React from 'react';
import { BONUSES } from '../data';
import { Gift } from 'lucide-react';

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
        <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(1.9rem,4.5vw,2.75rem)] leading-[0.95] text-[#F5F5F5] uppercase mb-4">
          TODO LO QUE NECESITAS PARA DEJAR DE IMPROVISAR.
        </h2>

        {/* Marco Visual del Producto Principal */}
        <div className="bg-gradient-to-b from-[#141414] to-[#080808] border border-[#D71912]/40 rounded-xl p-4 sm:p-5 max-w-[500px] mx-auto my-8 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(215,25,18,0.15)] text-center relative group">
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10 text-xs font-bold text-[#8F8F8F] tracking-[1px]">
            <span className="text-[#F1261D]">ENTREGABLE PRINCIPAL</span>
            <div className="text-white">SISTEMA FACELESS DE 7 DÍAS</div>
          </div>
          <div
            onClick={onImageClick}
            className="w-full rounded-lg overflow-hidden border border-white/10 bg-black cursor-pointer"
          >
            <img
              src="https://i.imgur.com/PrG2pdM.png"
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
              className="bg-gradient-to-b from-[#141414] to-[#080808] border border-[#D71912]/40 rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:-translate-y-1 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(215,25,18,0.15)] group"
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

                <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-[#F5F5F5] mt-3 mb-1 leading-tight">
                  {bonus.title}
                </h3>
                <p className="text-[0.9rem] text-[#C7C7C7] leading-relaxed">
                  {bonus.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
