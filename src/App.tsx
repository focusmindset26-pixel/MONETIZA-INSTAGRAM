import React, { useState, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OpportunityConnectionSection } from './components/OpportunityConnectionSection';
import { TimeAchievementSection } from './components/TimeAchievementSection';
import { TransformationSection } from './components/TransformationSection';
import { ProductAndBonuses } from './components/ProductAndBonuses';
import { ObjectionsSection } from './components/ObjectionsSection';
import { OfferSection } from './components/OfferSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { StickyCta } from './components/StickyCta';
import { SocialProofToast } from './components/SocialProofToast';

// Lazy-load modal components so they don't block initial page load
const ImageModal = lazy(() => import('./components/ImageModal').then(m => ({ default: m.ImageModal })));
const CheckoutModal = lazy(() => import('./components/CheckoutModal').then(m => ({ default: m.CheckoutModal })));

export default function App() {
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-[#F5F5F5] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#22C55E] selection:text-black pb-14">
      {/* Brand Top Header */}
      <Header />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenCheckout={handleOpenCheckout}
          onImageClick={() => setIsImageModalOpen(true)}
        />

        {/* 1.6. Opportunity Connection Section (CÓMO CONECTARLAS) */}
        <OpportunityConnectionSection />

        {/* 2. Time + Achievement Section (TIEMPO + LOGRO) */}
        <TimeAchievementSection />

        {/* 3. Transformation Section (CÓMO OCURRE EL CAMBIO) */}
        <TransformationSection />

        {/* 4. Product & Bonuses Section */}
        <ProductAndBonuses
          onImageClick={() => setIsImageModalOpen(true)}
        />

        {/* 5. Objections Section */}
        <ObjectionsSection />

        {/* 6. Offer Section */}
        <OfferSection onOpenCheckout={handleOpenCheckout} />

        {/* 7. Final CTA */}
        <FinalCtaSection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Quick Action Bar on scroll */}
      <StickyCta onOpenCheckout={handleOpenCheckout} />

      {/* Product Image Full View Modal */}
      {isImageModalOpen && (
        <Suspense fallback={null}>
          <ImageModal
            isOpen={isImageModalOpen}
            onClose={() => setIsImageModalOpen(false)}
            onOpenCheckout={handleOpenCheckout}
          />
        </Suspense>
      )}

      {/* Instant Access Checkout Modal */}
      {isCheckoutOpen && (
        <Suspense fallback={null}>
          <CheckoutModal
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
          />
        </Suspense>
      )}

      {/* Live Social Proof Purchase Notifications */}
      <SocialProofToast />
    </div>
  );
}
