import React from 'react';
import { ShieldCheck, Zap, Lock, Download, CheckCircle2 } from 'lucide-react';

interface OfferSectionProps {
  onOpenCheckout?: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = () => {
  return (
    <section className="py-16 md:py-24 border-b border-white/5 bg-[#080808]" id="oferta">
      <div className="w-full max-w-[860px] mx-auto px-5">
        <div className="bg-gradient-to-b from-[#06180c] via-[#0d0d0d] to-[#080808] border-2 border-[#22C55E] rounded-2xl p-6 sm:p-10 max-w-[600px] mx-auto text-center shadow-[0_10px_50px_rgba(34,197,94,0.3)] relative overflow-hidden">
          {/* Subtle top banner */}
          <div className="inline-flex items-center gap-1.5 bg-[#22C55E]/20 border border-[#22C55E]/50 text-[#22C55E] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full mb-4 tracking-wider">
            <Zap className="w-3 h-3 fill-[#22C55E]" /> OFERTA POR TIEMPO LIMITADO
          </div>

          <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(2rem,5vw,3rem)] leading-[0.95] text-white uppercase mb-3">
            EMPIEZA A CONSTRUIR HOY.
          </h2>
          <div className="max-w-[520px] mx-auto space-y-1.5">
            <p className="font-['Bebas_Neue',sans-serif] text-lg sm:text-xl text-white tracking-[0.5px] uppercase leading-tight">
              NO NECESITAS MILES DE SEGUIDORES. NECESITAS CONSTRUIR UN ACTIVO DIGITAL.
            </p>
            <p className="text-xs sm:text-sm text-[#C7C7C7] leading-relaxed">
              Una cuenta con dirección, contenido estratégico y una oferta digital capaz de convertir atención en oportunidades de ingresos.
            </p>
          </div>

          <ul className="list-none flex flex-col gap-2.5 my-6 sm:my-8 text-left text-[0.95rem] font-semibold text-[#F5F5F5]">
            <li className="bg-black/60 border border-white/10 p-3.5 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[#22C55E] font-bold text-lg">✓</span>
                <span>MONETIZA INSTAGRAM (Sistema 7 Días)</span>
              </div>
              <span className="text-xs text-[#8F8F8F] font-normal">Valor US$42</span>
            </li>
            <li className="bg-black/60 border border-white/10 p-3.5 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[#22C55E] font-bold text-lg">+</span>
                <span>100 Hooks Faceless</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="line-through text-xs text-[#8F8F8F]">US$9,99</span>
                <span className="text-xs font-black text-[#22C55E] bg-[#22C55E]/15 border border-[#22C55E]/40 px-2 py-0.5 rounded tracking-wider shadow-[0_0_8px_rgba(34,197,94,0.25)]">
                  GRATIS
                </span>
              </div>
            </li>
            <li className="bg-black/60 border border-white/10 p-3.5 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[#22C55E] font-bold text-lg">+</span>
                <span>50 Ideas de Contenido Faceless</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="line-through text-xs text-[#8F8F8F]">US$9,99</span>
                <span className="text-xs font-black text-[#22C55E] bg-[#22C55E]/15 border border-[#22C55E]/40 px-2 py-0.5 rounded tracking-wider shadow-[0_0_8px_rgba(34,197,94,0.25)]">
                  GRATIS
                </span>
              </div>
            </li>
            <li className="bg-black/60 border border-white/10 p-3.5 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[#22C55E] font-bold text-lg">+</span>
                <span>50 CTA Que Convierten</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="line-through text-xs text-[#8F8F8F]">US$9,99</span>
                <span className="text-xs font-black text-[#22C55E] bg-[#22C55E]/15 border border-[#22C55E]/40 px-2 py-0.5 rounded tracking-wider shadow-[0_0_8px_rgba(34,197,94,0.25)]">
                  GRATIS
                </span>
              </div>
            </li>
          </ul>

          {/* Price Tag */}
          <div className="flex flex-col items-center mb-6">
            <div className="text-xs uppercase text-[#8F8F8F] line-through font-bold">
              PRECIO REGULAR: US$42,00
            </div>
            <div className="font-['Bebas_Neue',sans-serif] text-6xl sm:text-7xl leading-none text-white tracking-wide my-1">
              US$14,99
            </div>
            <div className="text-xs text-[#C7C7C7]">Pago único · Sin suscripciones recurrentes</div>
          </div>

          <a
            href="https://pay.hotmart.com/P107224938O"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-b from-[#22C55E] to-[#16A34A] text-black font-['Plus_Jakarta_Sans',sans-serif] font-black text-base sm:text-lg uppercase tracking-[0.5px] py-4 px-6 rounded-md border border-white/30 shadow-[0_4px_25px_rgba(34,197,94,0.4)] hover:shadow-[0_6px_35px_rgba(34,197,94,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer text-center"
          >
            <Download className="w-5 h-5 text-black" />
            <span>QUIERO EL SISTEMA COMPLETO</span>
          </a>

          {/* Trust / Payment methods image right below the button */}
          <div className="w-full max-w-[420px] mx-auto mt-4 px-2">
            <img
              src="https://i.imgur.com/ThbziAr.png"
              alt="Garantía y Métodos de Pago Seguros"
              className="w-full h-auto block mx-auto drop-shadow-sm"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <span className="block text-xs text-[#8F8F8F] mt-3 font-medium text-center">
            Acceso inmediato · 3 bonus incluidos · Producto digital
          </span>

          <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] text-[#8F8F8F] text-left">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>Pago 100% Seguro SSL</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>Entrega inmediata por correo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
