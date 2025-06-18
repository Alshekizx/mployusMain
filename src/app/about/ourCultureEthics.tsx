import React from "react";
import Image from "next/image";

const OurCultureEthics = () => {
  return (
    <section
      className="relative py-4 w-full bg-[var(--primary-color)] text-white flex flex-col justify-center items-center text-start bg-cover bg-center "
    >
        <Image
            src='/images/bgPattern.png'
            alt='bg'
            width={400}
            height={400}
            className="absolute w-1/2  left-0 top-0"
        />
      <div className="containerDiv flex flex-col items-start justify-between gap-4 z-10  ">

       <h3 className="font-semibold">
        Our Culture & Ethics
       </h3>

       <p style={{fontSize:'28px'}}>
        At Mployus, our motto is simple: to elevate careers and empower businesses. We connect employers with right-fit talent through smart technology, data-driven insights, and a deep understanding of today’s workplace demands. From recruitment and workforce planning to employment law compliance, we build trusted partnerships that prioritise quality, reliability, and long-term success. 
        Beyond supporting small businesses, we’re committed to social impact. Through our CSR initiative, we collaborate with NGOs by offering up to 50% discounts on our services. By simplifying HR processes and ensuring compliance, we help organizations of all sizes thrive through innovative, people-first workforce solutions.
       </p>

      </div>
    </section>
  );
};

export default OurCultureEthics;