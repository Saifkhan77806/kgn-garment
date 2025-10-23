import HomeHero from "@/components/blocks/HomeHero";
import About from "@/components/home/About";
import BulkOrderSection from "@/components/home/BulkOrderSection";
import ContactBanner from "@/components/home/ContactBanner";
import ProductGrid from "@/components/home/ProductGrid";
import Testimonails from "@/components/home/Testimonails";

export default function Home() {
  return (
    <section className="min-h-[200vh] ">
      <HomeHero />
      <About />
      <ProductGrid />
      <BulkOrderSection />
      <Testimonails />
      <ContactBanner />
    </section>
  );
}
