
import HeroSection from "./component/landingPage/hero";
import ServicesSection from "./component/landingPage/serviceSection";
import WhyChooseUs from "./component/landingPage/whyChooseUs";
import FeatureOverview from "./component/landingPage/featuresOverview";
import HrServicesGrid from "./component/landingPage/tailoredHiringSolutions";
import Testimonials from "./component/landingPage/testimonia";
import FaqAccordion from "./component/landingPage/faq";

const serviceData = {
  headline: 'Benefits of Using Our Software Products',
  subtext:
    'Discover how Mployus workforce tools automates tasks, boosts accuracy, and enhances the experience for HR teams and employees streamlining operations and ensuring compliance in one platform.',
  services: [
    
    {
      title: 'Reduce Manual Tasks',
      description:
        'Streamline scheduling, approvals, and attendance to save time and reduce mistakes.',
      
    },
    {
      title: 'Boost Productivity',
      description:
        'Manage attendance, shifts, and performance in one platform to boost team efficiency.',
    },

    {
      title: 'Ensure Compliance',
      description:
        'Keep accurate employee records to ensure smooth audits and payroll processing.',
    
    },
    {
      title: 'Enhance Staff Satisfaction',
      description:
        'Let employees easily manage profiles, request time off, and stay updated with a simple, user-friendly platform.',
     
    },
  ],
};



export default function Home() {
  return (
    <main >
      <HeroSection />
      <WhyChooseUs/>
      <FeatureOverview/>
      <ServicesSection/>
      <HrServicesGrid {...serviceData} />
      <Testimonials/>
      
      <FaqAccordion />
      
    </main>
  );
}
