import { CallToAction } from "@/components/CallToAction";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Headre";
import { Hero } from "@/components/Hero";
import { Steps } from "@/components/Steps";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Steps />
        <CallToAction />
      </main>
      <Footer />
    </div>

  );
}
