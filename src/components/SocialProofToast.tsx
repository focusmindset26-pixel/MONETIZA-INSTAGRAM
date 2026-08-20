import React, { useState, useEffect } from 'react';
import { ShoppingBag, CheckCircle, X } from 'lucide-react';

interface PurchaseRecord {
  name: string;
  location: string;
  country: string;
  flag: string;
  timeAgo: string;
}

const PURCHASES: PurchaseRecord[] = [
  { name: 'Mateo R.', location: 'Medellín', country: 'Colombia', flag: '🇨🇴', timeAgo: 'hace 2 min' },
  { name: 'Carlos D.', location: 'Ciudad de México', country: 'México', flag: '🇲🇽', timeAgo: 'hace 4 min' },
  { name: 'Elena N.', location: 'Madrid', country: 'España', flag: '🇪🇸', timeAgo: 'hace 6 min' },
  { name: 'Sofía M.', location: 'Buenos Aires', country: 'Argentina', flag: '🇦🇷', timeAgo: 'hace 8 min' },
  { name: 'Daniel K.', location: 'Miami, FL', country: 'Estados Unidos', flag: '🇺🇸', timeAgo: 'hace 11 min' },
  { name: 'Valentina G.', location: 'Santiago', country: 'Chile', flag: '🇨🇱', timeAgo: 'hace 14 min' },
  { name: 'Javier L.', location: 'Barcelona', country: 'España', flag: '🇪🇸', timeAgo: 'hace 18 min' },
  { name: 'Lucas P.', location: 'Lima', country: 'Perú', flag: '🇵🇪', timeAgo: 'hace 21 min' },
  { name: 'Andrea B.', location: 'Bogotá', country: 'Colombia', flag: '🇨🇴', timeAgo: 'hace 25 min' },
  { name: 'Gabriel M.', location: 'Los Angeles, CA', country: 'Estados Unidos', flag: '🇺🇸', timeAgo: 'hace 29 min' },
  { name: 'Camila V.', location: 'Quito', country: 'Ecuador', flag: '🇪🇨', timeAgo: 'hace 33 min' },
  { name: 'Alejandro F.', location: 'Valencia', country: 'España', flag: '🇪🇸', timeAgo: 'hace 36 min' },
  { name: 'Florencia H.', location: 'Córdoba', country: 'Argentina', flag: '🇦🇷', timeAgo: 'hace 41 min' },
  { name: 'Diego S.', location: 'Guadalajara', country: 'México', flag: '🇲🇽', timeAgo: 'hace 45 min' },
  { name: 'Martín T.', location: 'Montevideo', country: 'Uruguay', flag: '🇺🇾', timeAgo: 'hace 52 min' },
];

export const SocialProofToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial delay before showing first notification
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(initialTimeout);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    let hideTimeout: NodeJS.Timeout;
    let nextTimeout: NodeJS.Timeout;

    if (isVisible) {
      // Keep visible for 5.5 seconds
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 5500);
    } else {
      // Stay hidden for 7-10 seconds before next notification
      nextTimeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % PURCHASES.length);
        setIsVisible(true);
      }, 8500);
    }

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const current = PURCHASES[currentIndex];

  return (
    <div
      className={`fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 max-w-[320px] w-[calc(100%-2rem)] transition-all duration-500 transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
          : 'translate-y-6 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-[#0C0C0C]/95 backdrop-blur-md border border-white/15 rounded-xl p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(34,197,94,0.15)] flex items-start gap-3 relative group">
        {/* Left Icon with pulse ring */}
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#22C55E] to-[#15803D] flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(34,197,94,0.4)]">
          <ShoppingBag className="w-5 h-5 text-black" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center gap-1.5 leading-none mb-1">
            <span className="text-[13px] font-bold text-white truncate">
              {current.name}
            </span>
            <span className="text-xs">{current.flag}</span>
            <CheckCircle className="w-3.5 h-3.5 text-[#22C55E] shrink-0 inline" />
          </div>

          <p className="text-[11px] text-[#C7C7C7] leading-tight">
            Compró <span className="text-white font-semibold">Sistema Faceless (7 Días)</span>
          </p>

          <div className="mt-1 flex items-center justify-between text-[10px] text-[#8F8F8F]">
            <span>{current.location}, {current.country}</span>
            <span className="font-medium text-[#22C55E]">{current.timeAgo}</span>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-[#8F8F8F] hover:text-white p-1 rounded transition-colors cursor-pointer"
          title="Cerrar"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
