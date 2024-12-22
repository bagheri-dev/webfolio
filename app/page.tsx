import HeroSection from "@/containers/heroSection";
import ServicesSection from "@/containers/servicesSection";

export default function Home() {
  return (
    <div className="ml-7 mr-32 w-full">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
