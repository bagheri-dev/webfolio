import Courses from "@/containers/courses";
import Footer from "@/containers/footer";
import HeroSection from "@/containers/heroSection";
import Portfolio from "@/containers/portfolio";
import ServicesSection from "@/containers/servicesSection";
import Skils from "@/containers/skils";
import WorkHistory from "@/containers/workHistory";

export default function Home() {
  return (
    <div className="ml-7 mr-32 w-full">
      <HeroSection />
      <Skils />
      <Portfolio />
      <ServicesSection />
      <Courses />
      <WorkHistory />
      <Footer />
    </div>
  );
}
