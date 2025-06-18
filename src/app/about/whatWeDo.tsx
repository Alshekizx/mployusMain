import React from "react";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section
      className="relative py-20 w-full flex flex-col justify-center items-center text-start bg-cover bg-center "
    >
        <Image
            src='/images/bgPattern2.png'
            alt='bg'
            width={400}
            height={400}
            className="absolute w-1/2 right-0 top-0"
        />
      <div className="containerDiv flex flex-col  items-start justify-between gap-6  z-10  ">

     <h1 className="text-[var(--primary-500)] font-bold">What We Do</h1>
     <h3>Empowering your business through smart workforce and employment solutions</h3>
     <p style={{fontSize:'28px'}} className="text-[var(--text-muted)]" >Mployus offers a comprehensive suite of services designed to support businesses. 
        Our Workforce Management Software streamlines HR processes and boosts efficiency. 
        We provide expert HR Consultancy to guide small business owners through complex 
        HR challenges. Our Talent Solutions help businesses of all sizes to find top 
        talents, while our Locum Provisions ensure you have access to skilled professionals 
        when needed. Mployus isn’t just a platform—it’s a partner in your growth
    </p>
    <p className="text-[var(--primary-color)]" style={{fontSize:'28px', fontStyle: 'italic' }}>
        Mployus isn’t just a platform—it’s a partner in your growth
    </p>
      </div>
    </section>
  );
};

export default WhatWeDo;