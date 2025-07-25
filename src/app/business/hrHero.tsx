import React from "react";
import Image from "next/image";


const BusinessHeroSection = () => {
  return (
    <section className="relative max-w-[1400px] w-full flex flex-col lg:flex-row bg-[var(--primary-color)]">
      <Image
                src="/images/bgPattern2.png"
                alt="bg pattern"
                height={400}
                width={500}
                className="absolute hidden lg:block w-150 right-0 top-0 z-0"
              />
        
      {/* Left Side - Text Content with Diagonal Right Edge */}
      
      <div className="bg-[var(--primary-100)] py-30 mt-10 w-full lg:w-6/10 px-12 py-16 flex flex-col justify-center gap-6  clip-diagonal-right">
        <div className="flex flex-col items-start gap-2 w-full lg:w-[85%]">
          <p className="font-semibold text-base sm:text-lg md:text-xl">
            Simplify Busines Daily Operations Using Our 
          </p>
          <h1 className="text-[var(--primary-color)] font-bold text-2xl sm:text-3xl md:text-5xl leading-tight">
            Business Management
          </h1>
          <p className="px-6 py-2 bg-[#00449F0A] font-semibold text-[var(--primary-700)] rounded-full text-sm sm:text-base">
            Software
          </p>
        </div>

        <p className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg max-w-2xl lg:w-[90%]">
          Manage transactions, assets, subscriptions, and sales reports effortlessly in one intuitive platform. Designed to streamline operations and deliver real-time insights, our software scales with your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <button className="button text-sm sm:text-base px-6 py-2 rounded-full">
            <p>Make an Enquiry</p>
          </button>
          <button className="inverseButton text-sm sm:text-base px-6 py-2 rounded-full border border-[var(--primary-500)] text-[var(--primary-500)]">
            <p>Request a Demo</p>
          </button>
        </div>
      </div>

      {/* Right Side - Image Layering */}
      <div className="relative hidden lg:block w-full lg:w-4/10 min-h-[600px] ">
        
        <Image
          src="/images/conect.png"
          alt="hr doc"
          width={640}
          height={640}
          className="absolute right-0 top-20  w-fill z-10"
        />
      </div>
    </section>
  );
};

export default BusinessHeroSection;
