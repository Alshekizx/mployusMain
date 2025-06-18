import React from "react";
import Image from "next/image";

const Connect = () => {
  return (
    <section
      className="relative py-4 w-full text-white flex flex-col justify-center items-center text-start bg-cover bg-center "
    >
        <Image
            src='/images/bgPattern3.png'
            alt='bg'
            width={400}
            height={400}
            className="absolute w-1/2  left-0 top-0"
        />
      <div className="containerDiv  text-[var(--primary-color)] text-center flex flex-col items-center justify-center gap-10 z-10  ">

            <div className="flex flex-col items-center justify-center gap-4 ">
                <h3 className="font-bold">
                Ready to Get Started?
            </h3>
            <p className="max-w-3xl">
                Select the plan that best fits your team’s needs and take the next step by requesting a free demo to experience how it works in real time.
            </p>
            </div>
            
  
       <button className="button" style={{borderRadius:'5px' }}> <p>View Plans & Request Demo</p></button>


      </div>
    </section>
  );
};

export default Connect;