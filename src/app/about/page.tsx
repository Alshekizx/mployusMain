import ServicesSection from "../component/landingPage/serviceSection";
import HrServicesGrid from "../component/landingPage/tailoredHiringSolutions";
import AboutHeroSection from "./aboutHero";
import OurCultureEthics from "./ourCultureEthics";
import OurPlan from "./ourPlan";
import OurTeam from "./ourTeam";
import WhatWeDo from "./whatWeDo";
import WorkAtMployUs from "./workAtMployUs";


const serviceData = {
fontSizeTitle:"30px",
  fontSizeDescription:"18px",
    
  headline: 'Our Software Products',
  subtext:
    'Built for performance and ease of use, our software products give you full control over essential business functions:',
  services: [
    {
      title: 'HR Software',
      description:
        'Centralize HR tasks like leave, attendance, and records with tools for communication, performance tracking, and self-service.',
      link: '/hrSoftware',
    },
    {
      title: 'Finance Software',
      description:
        'Manage payroll, expenses, and reports in one secure dashboard with automation and accuracy.',
      link: '/financial',
    },
    {
      title: 'Business Management Software',
      description:
        'Streamline daily operations with tools for tasks, approvals, communication, and client tracking perfect for growing teams.',
      link: '/business',
    },
    {
      title: 'Recruitment Software',
      description:
        'Manage hiring from start to finish post jobs, screen, schedule, and onboard with automation and insights.',
      link: '/recruitmentSoftware',
    },
  ],
};



export default function Home() {
  return (
    <main >
      <AboutHeroSection/>
      <WhatWeDo/>
      <div className="bg-[var(--primary-100)]">
      <HrServicesGrid {...serviceData} />
      </div>
      <ServicesSection/>
      <OurPlan/>
      <OurCultureEthics/>
      <OurTeam/>
      <WorkAtMployUs/>
    </main>
  );
}
