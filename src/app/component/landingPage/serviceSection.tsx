import React from "react";
import Image from "next/image";

const services = [
  {
    title: "HR & Employment Law Support",
    icon: "/icons/MployusHRIconandText.png",
    color: "text-blue-800",
    label: "HR",
    details:"Manage workplace compliance, and essential documentation with our HR & Employment Law Services, designed to support businesses on their legal obligations.",
  },
  {
    title: "Locum Provision",
    icon: "/icons/MployusLocumsIconandText.png",
    color: "text-green-600",
    label: "Locums",
    details:"Easily find and manage locum shifts, track availability, handle approvals, and receive payments built for healthcare providers and temp staffing needs.",
  },
  {
    title: "Talent Sourcing & Recruitment",
    icon: "/icons/MployusJobsIconandText.png",
    color: "text-pink-600",
    label: "Jobs",
    details:"From job posting to onboarding, our recruitment solution helps you manage the entire hiring lifecycle with ease and collaboration.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative bg-[var(--primary-color)] flex flex-col items-center py-20" >
      <Image
                src='/images/bgPattern.png'
                alt='bg'
                width={400}
                height={400}
                className="absolute w-1/2  left-0 top-0"
              />
      
     <div className="containerDiv flex flex-col items-center gap-20 ">
      <div className="text-center text-white max-w-6xl ">
        <h2>Our Services</h2>
        <p className="mt-4">Explore dedicated software platforms for HR, recruitment, and locum staffing each designed to simplify workflows, cut manual tasks, and deliver better results.</p>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
        {services.map((service, index) => (
          <div key={index} className="card flex flex-col gap-4">
            <div className="flex flex-col items-center justify-center ">
              <Image
                src={service.icon}
                alt={service.label}
                width={60}
                height={60}
                className="object-contain"
              />
              
            </div>
            <span className="font-bold">{service.title}</span>
            <span style={{fontSize:'16px'}}>
              {service.details}
            </span>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
};

export default ServicesSection;