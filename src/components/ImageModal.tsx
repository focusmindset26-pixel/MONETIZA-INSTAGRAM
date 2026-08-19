import React from 'react';
import { X, Download, ShieldCheck } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout?: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleScrollToOffer = () => {
    onClose();
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#0E0E0E] border border-white/20 rounded-xl max-w-[620px] w-full p-5 relative shadow-[0_20px_60px_rgba(0,0,0,0.9)] max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md text-[#8F8F8F] hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-3">
          <span className="text-xs font-extrabold text-[#F1261D] tracking-[1.5px] uppercase">
            VISTA PREVIA DEL PRODUCTO
          </span>
          <h3 className="font-['Bebas_Neue',sans-serif] text-2xl sm:text-3xl text-white mt-1">
            SISTEMA FACELESS DE 7 DÍAS - MONETIZA INSTAGRAM
          </h3>
        </div>

        <div className="rounded-lg overflow-hidden border border-white/10 bg-black my-3">
          <img
            src="https://i.imgur.com/PrG2pdM.png"
            alt="Monetiza Instagram"
            className="w-full h-auto block"
          />
        </div>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10">
          <div className="text-xs text-[#8F8F8F] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#F1261D]" />
            <span>Guía Digital PDF + Plantillas + 3 Bonus</span>
          </div>
          <button
            onClick={handleScrollToOffer}
            className="w-full sm:w-auto bg-gradient-to-b from-[#F1261D] to-[#D71912] text-white font-extrabold text-xs uppercase tracking-wider py-3 px-6 rounded-md shadow hover:shadow-[0_4px_20px_rgba(241,38,29,0.5)] transition-all cursor-pointer"
          >
            Ver Oferta Completa · US$14,99
          </button>
        </div>
      </div>
    </div>
  );
};
