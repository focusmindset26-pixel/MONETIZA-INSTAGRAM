import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[#020202] border-t border-white/5 text-center text-xs text-[#555555]">
      <div className="w-full max-w-[860px] mx-auto px-5">
        <p className="font-medium">
          FOCUS MINDSET / BLESSED · Todos los derechos reservados.
        </p>
        <p className="mt-2 text-[10px] text-[#444444] max-w-[600px] mx-auto">
          Este sitio no forma parte ni está respaldado por Instagram™ o Meta Platforms, Inc. Instagram™ es una marca registrada de Meta Platforms, Inc.
        </p>
      </div>
    </footer>
  );
};
