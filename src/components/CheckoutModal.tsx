import React, { useState } from 'react';
import { X, Lock, CheckCircle2, Download, CreditCard, ShieldCheck, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setEmail('');
    setName('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#0E0E0E] border-2 border-[#22C55E]/70 rounded-xl max-w-[540px] w-full p-6 relative shadow-[0_25px_60px_rgba(34,197,94,0.35)] max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md text-[#8F8F8F] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-black text-[#22C55E] uppercase tracking-wider bg-[#22C55E]/15 px-2.5 py-0.5 rounded border border-[#22C55E]/40">
                PAGO SEGURO 256-BIT SSL
              </span>
            </div>
            
            <h3 className="font-['Bebas_Neue',sans-serif] text-3xl text-white mt-1">
              FINALIZAR TU ORDEN
            </h3>
            <p className="text-xs text-[#8F8F8F] mb-5">
              Ingresa tus datos para recibir el acceso instantáneo al sistema y los 3 bonus por correo.
            </p>

            {/* Order Summary Box */}
            <div className="bg-black/70 border border-white/10 rounded-lg p-4 mb-5">
              <div className="flex justify-between items-center pb-3 border-b border-white/10 text-sm font-bold text-white">
                <span>Monetiza Instagram (Sistema 7 Días)</span>
                <span>US$14,99</span>
              </div>
              <div className="pt-2.5 flex flex-col gap-1.5 text-xs text-[#C7C7C7]">
                <div className="flex justify-between items-center">
                  <span>+ Bonus 1: 100 Hooks Faceless</span>
                  <div className="flex items-center gap-1.5">
                    <span className="line-through text-[#8F8F8F] text-[11px]">US$9,99</span>
                    <span className="text-[#22C55E] font-black bg-[#22C55E]/15 border border-[#22C55E]/40 px-1.5 py-0.2 rounded text-[10px]">GRATIS</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>+ Bonus 2: 50 Ideas de Contenido</span>
                  <div className="flex items-center gap-1.5">
                    <span className="line-through text-[#8F8F8F] text-[11px]">US$9,99</span>
                    <span className="text-[#22C55E] font-black bg-[#22C55E]/15 border border-[#22C55E]/40 px-1.5 py-0.2 rounded text-[10px]">GRATIS</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>+ Bonus 3: 50 CTA Que Convierten</span>
                  <div className="flex items-center gap-1.5">
                    <span className="line-through text-[#8F8F8F] text-[11px]">US$9,99</span>
                    <span className="text-[#22C55E] font-black bg-[#22C55E]/15 border border-[#22C55E]/40 px-1.5 py-0.2 rounded text-[10px]">GRATIS</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center text-base font-extrabold text-white">
                <span>Total a pagar:</span>
                <span className="text-[#22C55E] font-['Bebas_Neue',sans-serif] text-2xl">US$14,99</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#C7C7C7] mb-1 uppercase tracking-wider">
                  Tu Correo Electrónico *
                </label>
                <input
                  type="email"
                  required
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 rounded-md px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#22C55E] transition-colors"
                />
                <span className="text-[10px] text-[#8F8F8F] mt-1 block">
                  Aquí te enviaremos los enlaces de descarga y credenciales.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#C7C7C7] mb-1 uppercase tracking-wider">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#141414] border border-white/15 rounded-md px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#22C55E] transition-colors"
                />
              </div>

              {/* Payment Selector */}
              <div>
                <label className="block text-xs font-bold text-[#C7C7C7] mb-1.5 uppercase tracking-wider">
                  Método de Pago
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-3 rounded-md border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#22C55E] bg-[#22C55E]/20 text-white'
                        : 'border-white/10 bg-[#141414] text-[#8F8F8F] hover:text-white'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" /> Tarjeta Crédito/Débito
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`py-2.5 px-3 rounded-md border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      paymentMethod === 'paypal'
                        ? 'border-[#22C55E] bg-[#22C55E]/20 text-white'
                        : 'border-white/10 bg-[#141414] text-[#8F8F8F] hover:text-white'
                    }`}
                  >
                    <span>PayPal</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-b from-[#22C55E] to-[#16A34A] text-black font-['Plus_Jakarta_Sans',sans-serif] font-black text-sm uppercase tracking-wide py-4 px-6 rounded-md shadow-[0_4px_25px_rgba(34,197,94,0.4)] hover:shadow-[0_6px_35px_rgba(34,197,94,0.6)] transition-all cursor-pointer disabled:opacity-50 mt-2"
              >
                {isProcessing ? (
                  <span>Procesando pago seguro...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-black" />
                    <span>DESCARGAR SISTEMA COMPLETO · US$14,99</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center gap-4 text-[11px] text-[#8F8F8F]">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" /> Garantía 7 días</span>
              <span>·</span>
              <span>Soporte prioritario</span>
            </div>
          </div>
        ) : (
          /* Order Confirmation View */
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-[#22C55E]/20 border border-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-4 text-[#22C55E]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold text-[#22C55E] uppercase tracking-wider">
              ¡ACCESO CONCEDIDO!
            </span>
            <h3 className="font-['Bebas_Neue',sans-serif] text-3xl text-white my-1">
              BIENVENIDO A MONETIZA INSTAGRAM
            </h3>
            <p className="text-xs text-[#C7C7C7] max-w-[400px] mx-auto mb-6">
              Hemos enviado las instrucciones y tus enlaces de descarga directa a{' '}
              <strong className="text-white">{email || 'tu correo'}</strong>.
            </p>

            <div className="bg-black/60 border border-white/10 rounded-lg p-4 mb-6 text-left space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                Tus Entregables Listos:
              </div>
              <div className="flex items-center justify-between p-2.5 rounded bg-[#141414] border border-white/5 text-xs">
                <span className="text-white font-semibold">1. Guía Paso a Paso 7 Días (PDF)</span>
                <span className="text-[#22C55E] font-bold flex items-center gap-1"><Download className="w-3 h-3" /> Descargar</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded bg-[#141414] border border-white/5 text-xs">
                <span className="text-white font-semibold">2. 100 Hooks Faceless (Cheatsheet)</span>
                <span className="text-[#22C55E] font-bold flex items-center gap-1"><Download className="w-3 h-3" /> Descargar</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded bg-[#141414] border border-white/5 text-xs">
                <span className="text-white font-semibold">3. 50 Ideas de Contenido & 50 CTAs</span>
                <span className="text-[#22C55E] font-bold flex items-center gap-1"><Download className="w-3 h-3" /> Descargar</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase py-3 rounded border border-white/20 transition-colors cursor-pointer"
            >
              Cerrar y Volver a la Página
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
