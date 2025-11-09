import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  return (
    <main className="bg-white">
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <ProjectsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
