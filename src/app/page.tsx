import Image from "next/image";
import HeroSection from "./component/landingPage/hero";
import ServicesSection from "./component/landingPage/serviceSection";
import OtherServicesSection from "./component/landingPage/otherServices";
import WorkforceSection from "./component/landingPage/workForceSection";
import Testimonials from "./component/landingPage/testimonials";
import FaqAccordion from "./component/landingPage/FaqAccordion";
import Partners from "./component/landingPage/partners";

export default function Home() {
  return (
    <main >
      <HeroSection />
      <ServicesSection/>
      <OtherServicesSection />
      <WorkforceSection />
      <Testimonials />
      <Partners />
      <FaqAccordion />
      
    </main>
  );
}
