import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BannerShowcase } from "./components/BannerShowcase";
import { Solutions } from "./components/Solutions";
import { CredibilityShowcase } from "./components/CredibilityShowcase";
import { About } from "./components/About";
import { Differentials } from "./components/Differentials";
import { Location } from "./components/Location";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <TopBar />
      <Header />
      <main id="conteudo">
        <Hero />
        <BannerShowcase />
        <Solutions />
        <CredibilityShowcase />
        <About />
        <Differentials />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
