import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { SocialProof } from "@/components/SocialProof";
import { Portfolio } from "@/components/Portfolio";
import { PainPoints } from "@/components/PainPoints";
// import { MarketComparison } from "@/components/MarketComparison";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PricingCards } from "@/components/PricingCards";
import { PartnerOffer } from "@/components/PartnerOffer";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEO
        title="Web Para Autónomos – Conversión Directa | Más Clientes, No Solo Web Bonita"
        description="Landing page española ultra-performante para autónomos. Transforma visitantes en leads vía WhatsApp, Calendly y formulario. Portfolio + Reviews + CRM. Desde 697€ HT."
        image="/og-image.png"
      />
      <main className="min-h-screen">
        <Hero />
        <BeforeAfter />
        <SocialProof />
        <Portfolio />
        <PainPoints />
        {/* <MarketComparison /> */}
        <ComparisonTable />
        <PricingCards />
        <PartnerOffer />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}