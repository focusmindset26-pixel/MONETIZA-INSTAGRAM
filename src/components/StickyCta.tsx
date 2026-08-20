import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

interface StickyCtaProps {
  onOpenCheckout: () => void;
}

export const StickyCta: React.FC<StickyCtaProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#080808]/95 backdrop-blur-md border-t border-[#22C55E]/40 py-3 px-4 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] animate-fadeIn">
      <div className="max-w-[860px] mx-auto flex flex-row items-center justify-between gap-3">
        <div className="hidden sm:flex flex-col">
          <span className="font-['Bebas_Neue',sans-serif] text-lg text-white tracking-wide leading-none">
            MONETIZA INSTAGRAM · SISTEMA 7 DÍAS
          </span>
          <span className="text-[11px] text-[#8F8F8F]">
            Incluye 3 bonus exclusivos · Acceso inmediato
          </span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-left sm:text-right">
            <span className="block text-[10px] text-[#8F8F8F] line-through uppercase">US$42</span>
            <span className="font-['Bebas_Neue',sans-serif] text-2xl text-white leading-none">US$14,99</span>
          </div>

          <button
            onClick={handleScrollToOffer}
            className="flex items-center justify-center gap-1.5 bg-gradient-to-b from-[#22C55E] to-[#16A34A] text-black font-['Plus_Jakarta_Sans',sans-serif] font-black text-xs uppercase tracking-wide py-2.5 px-4 sm:px-5 rounded border border-white/30 shadow-[0_2px_15px_rgba(34,197,94,0.4)] hover:shadow-[0_4px_25px_rgba(34,197,94,0.6)] cursor-pointer transition-all"
          >
            <Zap className="w-3.5 h-3.5 fill-black text-black" />
            <span>ACCESO INMEDIATO</span>
          </button>
        </div>
      </div>
    </div>
  );
};
