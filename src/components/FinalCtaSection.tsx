import React from 'react';
import { Zap } from 'lucide-react';

interface FinalCtaProps {
  onOpenCheckout: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaProps> = () => {
  const handleScrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-24 text-center bg-[#020202] border-b border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#22C55E]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[860px] mx-auto px-5 relative z-10">
        <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(2.2rem,5vw,3.5rem)] leading-[0.95] text-white uppercase">
          PUEDES SEGUIR GUARDANDO CONTENIDO.
        </h2>
        <p className="text-[#22C55E] font-['Bebas_Neue',sans-serif] text-[clamp(1.8rem,4.5vw,2.75rem)] uppercase mt-1 tracking-wide">
          O PUEDES EMPEZAR A CONSTRUIR.
        </p>

        <div className="font-['Bebas_Neue',sans-serif] text-base sm:text-xl tracking-[1.5px] text-[#8F8F8F] my-7 flex flex-wrap justify-center items-center gap-2">
          <span>NICHO</span>
          <span className="text-[#22C55E]">·</span>
          <span>PERFIL</span>
          <span className="text-[#22C55E]">·</span>
          <span>CONTENIDO</span>
          <span className="text-[#22C55E]">·</span>
          <span>MONETIZACIÓN</span>
          <span className="text-[#22C55E]">·</span>
          <span>OFERTA</span>
          <span className="text-[#22C55E]">·</span>
          <span>SISTEMA</span>
        </div>

        <div className="max-w-[460px] mx-auto">
          <button
            onClick={handleScrollToOffer}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-b from-[#22C55E] to-[#16A34A] text-black font-['Plus_Jakarta_Sans',sans-serif] font-black text-base md:text-lg uppercase tracking-[0.5px] py-4 px-6 rounded-md border border-white/30 shadow-[0_4px_25px_rgba(34,197,94,0.4)] hover:shadow-[0_6px_35px_rgba(34,197,94,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-black text-black" />
            <span>QUIERO MONETIZAR MI INSTAGRAM</span>
          </button>
          
          <div className="text-sm text-[#C7C7C7] mt-3 font-semibold">
            US$14,99 <span className="text-xs text-[#8F8F8F] font-normal">(Acceso Inmediato de por vida)</span>
          </div>
        </div>

        <div className="font-['Bebas_Neue',sans-serif] text-2xl sm:text-3xl tracking-[1px] text-[#8F8F8F] mt-16">
          MENOS TEORÍA. <span className="text-[#22C55E]">MÁS EJECUCIÓN.</span>
        </div>
      </div>
    </section>
  );
};
