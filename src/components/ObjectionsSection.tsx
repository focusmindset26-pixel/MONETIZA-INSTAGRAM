import React from 'react';

export const ObjectionsSection: React.FC = () => {
  const objections = [
    {
      title: 'NO NECESITAS MOSTRAR TU CARA',
      desc: 'El sistema está diseñado para cuentas temáticas faceless.'
    },
    {
      title: 'NO NECESITAS MILES DE SEGUIDORES',
      desc: 'Primero necesitas construir correctamente cuenta, contenido y oferta.'
    },
    {
      title: 'NO NECESITAS SABER QUÉ PUBLICAR',
      desc: 'El sistema + los bonus resuelven ese bloqueo.'
    },
    {
      title: 'NO NECESITAS SER EXPERTO',
      desc: 'Empiezas desde los fundamentos.'
    }
  ];

  return (
    <section className="py-16 md:py-20 border-b border-white/5 bg-[#020202] text-center">
      <div className="w-full max-w-[860px] mx-auto px-5">
        <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(1.9rem,4.5vw,2.75rem)] leading-[0.95] text-[#F5F5F5] uppercase mb-8">
          NO NECESITAS...
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {objections.map((obj, idx) => (
            <div
              key={idx}
              className="bg-[#0E0E0E] border border-white/10 p-5 rounded-lg transition-all duration-200 hover:border-[#22C55E]/40"
            >
              <h3 className="font-['Bebas_Neue',sans-serif] text-xl text-[#F5F5F5] mb-2 leading-none">
                {obj.title}
              </h3>
              <p className="text-[0.9rem] text-[#C7C7C7]">
                {obj.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
