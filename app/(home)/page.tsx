import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Footer } from "@/components/shared/Footer";
import { CallToAction } from "@/components/home/CallToAction";
import { Categories } from "@/components/home/Categories";

export default function HomePage() {
  return (
    <main id="top" className="min-h-svh text-black dark:text-white w-full overflow-hidden home-bg-pattern">
      <Hero />
      <Marquee />
      <Categories />
      <CallToAction />
      <Footer />
    </main>
  );
}
