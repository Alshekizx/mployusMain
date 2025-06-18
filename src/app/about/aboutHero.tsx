import React from "react";
import Image from "next/image";

const AboutHeroSection = () => {
  return (
    <section
      className="relative py-20 w-full bg-[var(--primary-color)] text-white flex flex-col justify-center items-center text-start bg-cover bg-center "
    >
        <Image
            src='/images/bgPattern.png'
            alt='bg'
            width={400}
            height={400}
            className="absolute w-1/2  left-0 top-0"
        />
      <div className="containerDiv flex flex-col lg:flex-row  items-center justify-between gap-20  z-10  ">

       <div className="w-full lg:w-6/10 flex flex-col gap-6">
        <h1 className="font-bold">About Us</h1>
        <p>At Mployus, our mission is to empower organisations with innovative workforce solutions that are legally compliant and people-centered while providing individuals with meaningful, career-defining opportunities.</p>
        <p>Mployus was established with a clear mission: to provide small businesses with cost-effective HR software and expert advisory services. As our impact grew, we expanded into the UK, extending our reach to support a broader range of businesses with tailored and scalable HR solutions.</p>
       </div>
       <div className="hidden lg:block w-full lg:w-4/10"> 
        <Image
            src='/images/aboutUs.png'
            alt='about'
            height={460}
            width={460}
            className="w-full "
            />
        </div>

      </div>
    </section>
  );
};

export default AboutHeroSection;