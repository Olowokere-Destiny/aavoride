import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import NavBar from "@/components/NavBar";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <>
    <NavBar />
    <main>
      <Hero />
      <HowItWorks />
      <ServicesSection />
      <WhySection />
    </main>
    </>
  );
}
