import React from "react";
import Image from "next/image";

const services = [
  {
    title: "HR Software",
    icon: "/icons/MployusHRIconandText.png",
    color: "text-blue-800",
    label: "HR",
    details:"Optimize workflows and boost efficiency with tailored automationsolutions that save time and reduce costs.",
  },
  {
    title: "Locum Software",
    icon: "/icons/MployusLocumsIconandText.png",
    color: "text-green-600",
    label: "Locums",
    details:"Optimize workflows and boost efficiency with tailored automationsolutions that save time and reduce costs.",
  },
  {
    title: "Recruitment Software",
    icon: "/icons/MployusJobsIconandText.png",
    color: "text-pink-600",
    label: "Jobs",
    details:"Optimize workflows and boost efficiency with tailored automationsolutions that save time and reduce costs.",
  },
];

const ServicesSection = () => {
  return (
    <section className="containerDiv " style={{ padding: "0" }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
        {services.map((service, index) => (
          <div key={index} className="card2">
            <div className="flex flex-col items-center justify-center mb-4">
              <Image
                src={service.icon}
                alt={service.label}
                width={60}
                height={60}
                className="object-contain"
              />
              <span className={`mt-2 text-sm font-medium ${service.color}`}>{service.label}</span>
            </div>
            <h3>{service.title}</h3>
            <p>
              {service.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;