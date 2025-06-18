import React from "react";
import Image from "next/image";

const OurPlan = () => {
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

     <h1 className="text-[var(--primary-500)] font-bold">Our Plan & Work Style</h1>
    
     <div>
        <h3>Flexible & Remote Operations</h3>
     <p style={{fontSize:'28px'}} className="mt-3 text-[var(--text-muted)]" >
        Our remote work model ensures flexible and responsive service, enhancing efficiency and client satisfaction.
    </p>
     </div>

   <div>
     <h3>End-to-End Client Support and Excellence</h3>
     <p style={{fontSize:'28px'}} className="mt-3 text-[var(--text-muted)]" >
        We are committed to continually upgrading our platforms and software to stay ahead of evolving client needs and industry demands.
    </p>
   </div>

    <div>
        <h3>On-site Support When Needed</h3>
     <p style={{fontSize:'28px'}} className="mt-3 text-[var(--text-muted)]" >
        As a business consulting company, we deliver flexible and effective solutions through a hybrid model—combining remote and on-site support across HR, recruitment services, and tailored software solutions that simplify and strengthen business operations.
    </p>
    </div>
    
      </div>
    </section>
  );
};

export default OurPlan;