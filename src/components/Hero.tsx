import React from 'react';
import { Check, ShieldCheck, Sparkles, Zap } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: () => void;
  onImageClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onImageClick }) => {
  const handleScrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-10 pb-16 text-center border-b border-white/5 relative overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#22C55E]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[860px] mx-auto px-5 relative z-10">
        {/* Badge */}
        <div className="inline-block bg-[#22C55E]/10 border border-[#22C55E]/40 text-[#22C55E] px-3.5 py-1.5 rounded text-xs font-extrabold tracking-[1.5px] uppercase mb-5">
          DEJA DE CONSUMIR MÉTODOS. EMPIEZA A CONSTRUIR.
        </div>

        {/* H1 */}
        <h1 className="font-['Bebas_Neue',sans-serif] text-[clamp(2.5rem,6.5vw,4.3rem)] leading-[0.98] text-white uppercase tracking-[1px] mb-6 hero-title-sharp">
          CONSTRUYE EN 7 DÍAS LAS BASES DE UNA CUENTA FACELESS PREPARADA PARA CRECER Y MONETIZAR
        </h1>

        {/* Subheadline */}
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-base sm:text-lg md:text-xl max-w-[700px] mx-auto mb-8 leading-[1.5] tracking-[0.2px] subhero-sharp uppercase">
          EL MÉTODO PASO A PASO PARA CONVERTIR TU CUENTA TEMÁTICA DE INSTAGRAM EN UN ACTIVO QUE GENERE INGRESOS SIN MOSTRAR TU CARA
        </p>

        {/* Micro-benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-[680px] mx-auto mb-9 text-left">
          <div className="flex items-center gap-2 text-[0.95rem] text-[#F5F5F5] font-semibold">
            <span className="text-[#22C55E] font-bold">✓</span> Sin mostrar tu cara
          </div>
          <div className="flex items-center gap-2 text-[0.95rem] text-[#F5F5F5] font-semibold">
            <span className="text-[#22C55E] font-bold">✓</span> Sin necesitar miles de seguidores
          </div>
          <div className="flex items-center gap-2 text-[0.95rem] text-[#F5F5F5] font-semibold">
            <span className="text-[#22C55E] font-bold">✓</span> Reels + carruseles faceless
          </div>
          <div className="flex items-center gap-2 text-[0.95rem] text-[#F5F5F5] font-semibold">
            <span className="text-[#22C55E] font-bold">✓</span> Puedes empezar desde tu celular
          </div>
        </div>

        {/* Primary CTA */}
        <div className="max-w-[460px] mx-auto">
          <button
            onClick={handleScrollToOffer}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-b from-[#22C55E] to-[#16A34A] text-black font-['Plus_Jakarta_Sans',sans-serif] font-black text-base md:text-lg uppercase tracking-[0.5px] py-4 px-7 rounded-md border border-white/30 shadow-[0_4px_25px_rgba(34,197,94,0.4)] hover:shadow-[0_6px_35px_rgba(34,197,94,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-black text-black" />
            <span>QUIERO CONSTRUIR MI SISTEMA FACELESS</span>
          </button>
          <span className="block text-xs text-[#8F8F8F] mt-2.5 font-medium text-center">
            Acceso inmediato · Producto digital · 3 bonus incluidos
          </span>
        </div>

        {/* Product Digital Mockup Frame */}
        <div className="bg-gradient-to-b from-[#141414] to-[#080808] border border-[#22C55E]/40 rounded-xl p-4 sm:p-5 max-w-[540px] mx-auto mt-10 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(34,197,94,0.15)] text-center relative group">
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10 text-xs font-bold text-[#8F8F8F] tracking-[1px]">
            <span className="text-[#22C55E] flex items-center gap-1.5 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
              SISTEMA DIGITAL DE IMPLEMENTACIÓN
            </span>
            <div className="text-white/80">MONETIZA INSTAGRAM</div>
          </div>
          
          <div 
            onClick={onImageClick}
            className="w-full rounded-lg overflow-hidden border border-white/10 bg-black cursor-pointer relative"
          >
            <img
              src="https://i.imgur.com/43xFtN5.png"
              alt="Monetiza Instagram - Sistema Digital de Implementación"
              className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-black/80 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Click para ampliar vista
              </span>
            </div>
          </div>
          
          <div className="mt-3 flex items-center justify-between text-[11px] text-[#8F8F8F]">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" /> Descarga instantánea</span>
            <span>Edición 2026 · Formato Interactivo</span>
          </div>
        </div>
      </div>
    </section>
  );
};
