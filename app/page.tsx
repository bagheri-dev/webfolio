import Information from "@/components/personal-information/information";
import Courses from "@/containers/courses";
import Footer from "@/containers/footer";
import HeroSection from "@/containers/heroSection";
import Portfolio from "@/containers/portfolio";
import ServicesSection from "@/containers/servicesSection";
import Header from "@/containers/sideNavigation";
import Skils from "@/containers/skils";
import WorkHistory from "@/containers/workHistory";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-x-3">
          <HeroSection />
          <Information />
        </div>
        <Skils />
        <Portfolio />
        <ServicesSection />
        <Courses />
        <WorkHistory />
        <Footer />
      </div>
    </>
  );
}
