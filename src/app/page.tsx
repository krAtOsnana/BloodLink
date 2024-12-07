import { CallToAction } from "@/components/CallToAction";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Headre";
import { Hero } from "@/components/Hero";
import { Steps } from "@/components/Steps";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <Header />
      <main>
        <Hero />
        <Features />
        <Steps />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
