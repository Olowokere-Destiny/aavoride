import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
    <NavBar />
    <main>
      <Hero />
      <HowItWorks />
    </main>
    </>
  );
}
