import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="py-5 flex justify-center items-center gap-3 border-b border-white/5 bg-[#020202]">
      <div className="flex items-center gap-3">
        <img
          src="https://i.imgur.com/0Md3eqi.jpg"
          alt="FOCUS MINDSET BLESSED"
          width="40"
          height="40"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-10 h-10 rounded-full object-cover border border-white/20 shadow-[0_0_12px_rgba(34,197,94,0.35)] transition-transform duration-300 hover:scale-105"
        />
        <div className="flex flex-col text-left">
          <span className="font-['Bebas_Neue',sans-serif] text-xl tracking-[1.5px] text-[#F5F5F5] leading-none">
            FOCUS MINDSET
          </span>
          <span className="text-[9px] tracking-[3px] text-[#C7C7C7] font-bold mt-0.5">
            BLESSED
          </span>
        </div>
      </div>
    </header>
  );
};
