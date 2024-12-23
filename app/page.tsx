import Courses from "@/containers/courses";
import HeroSection from "@/containers/heroSection";
import Portfolio from "@/containers/portfolio";
import ServicesSection from "@/containers/servicesSection";
import WorkHistory from "@/containers/workHistory";

export default function Home() {
  return (
    <div className="ml-7 mr-32 w-full">
      <HeroSection />
      <ServicesSection />
      <Courses />
      <WorkHistory />
      <Portfolio />
    </div>
  );
}
