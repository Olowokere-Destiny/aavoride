import FAQSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import NavBar from "@/components/NavBar";
import PrioritySection from "@/components/PrioritySection";
import ReviewsSection from "@/components/ReviewsSection";
import RidesSection from "@/components/RidesSection";
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
      <RidesSection />
      <ReviewsSection />
      <PrioritySection />
      <FAQSection />
    </main>
    <Footer />
    </>
  );
}
