import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import BeatsSection from "@/components/BeatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <AboutSection />
      <BeatsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
