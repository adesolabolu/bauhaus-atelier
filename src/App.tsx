import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { StatsSection } from './components/StatsSection.tsx';
import { FeaturesSection } from './components/FeaturesSection.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { ProductDetailSection } from './components/ProductDetailSection.tsx';
import { BauhausPosterStudio } from './components/BauhausPosterStudio.tsx';
import { BenefitsSection } from './components/BenefitsSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { BlogSection } from './components/BlogSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { Footer } from './components/Footer.tsx';
import { TicketModal } from './components/TicketModal.tsx';
import { ProductModal } from './components/ProductModal.tsx';
import { WorkshopModal } from './components/WorkshopModal.tsx';
import { ArticleModal } from './components/ArticleModal.tsx';
import { CatalogItem, WorkshopItem, ArticleItem } from './types/bauhaus.ts';

export default function App() {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<CatalogItem | null>(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const handleOpenTickets = () => {
    setIsTicketModalOpen(true);
  };

  const handleExploreCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAtelier = () => {
    const el = document.getElementById('atelier');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-[#121212] font-sans antialiased selection:bg-[#F0C020] selection:text-black">
      {/* 1. Constructivist Top Navigation */}
      <Navbar
        onOpenTickets={handleOpenTickets}
        onOpenAtelier={handleOpenAtelier}
      />

      {/* Main Content Sections */}
      <main>
        {/* 2. Asymmetric Hero Section */}
        <Hero
          onOpenTickets={handleOpenTickets}
          onExploreCatalog={handleExploreCatalog}
        />

        {/* 3. Solid Yellow Stats Section (#F0C020) */}
        <StatsSection />

        {/* 4. Atelier Workshops Grid */}
        <FeaturesSection
          onSelectWorkshop={(w) => setSelectedWorkshop(w)}
        />

        {/* 5. Vorkurs Foundation Course (45° Rotated Step Progression) */}
        <HowItWorks />

        {/* 6. Iconic Masterworks & Abstract Geometric Face */}
        <ProductDetailSection
          onOpenProductModal={(p) => setSelectedProduct(p)}
          onOpenTickets={handleOpenTickets}
        />

        {/* 7. Interactive Bauhaus Poster Studio & Atelier */}
        <BauhausPosterStudio />

        {/* 8. Solid Red Manifesto Section (#D02020) with Yellow Circular Badges */}
        <BenefitsSection />

        {/* 9. Avant-Garde Testimonials with Grayscale-to-Color Avatars */}
        <TestimonialsSection />

        {/* 10. Solid Blue Chronik & Essays (#1040C0) with Alternating Shapes */}
        <BlogSection
          onReadArticle={(a) => setSelectedArticle(a)}
        />

        {/* 11. Curatorial Query Accordion (White Closed / Red Active / Pale Yellow Open) */}
        <FaqSection />

        {/* 12. Solid Yellow Final CTA (#F0C020) with 50% Opacity Corner Shapes */}
        <FinalCtaSection
          onOpenTickets={handleOpenTickets}
          onOpenAtelier={handleOpenAtelier}
        />
      </main>

      {/* 13. Constructivist Modernist Footer */}
      <Footer
        onOpenTickets={handleOpenTickets}
        onExploreCatalog={handleExploreCatalog}
      />

      {/* Interactive Modals */}
      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
      />

      <ProductModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onReservePass={handleOpenTickets}
      />

      <WorkshopModal
        workshop={selectedWorkshop}
        onClose={() => setSelectedWorkshop(null)}
        onOpenTickets={handleOpenTickets}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
