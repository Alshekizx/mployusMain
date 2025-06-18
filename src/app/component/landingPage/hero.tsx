import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center text-start bg-cover bg-center "
      style={{ backgroundImage: "url('images/heroBg1.jpg')" }}
    >
      <div className="containerDiv flex flex-col gap-6 items-start z-10 max-w-screen-xl mx-auto py-12 sm:py-20">

        <div className="flex flex-col items-start gap-2">
          <p className="font-semibold text-base sm:text-lg md:text-xl">
            Transform Your Team Operations with Our
          </p>
          <h1 className="text-[var(--primary-color)] font-bold text-2xl sm:text-3xl md:text-5xl leading-tight">
            Human Resources|
          </h1>
          <p className="px-6 py-2 bg-[var(--primary-100)] font-semibold text-[var(--primary-700)] rounded-full text-sm sm:text-base">
            Software
          </p>
        </div>

        <p className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg max-w-2xl">
          Streamline how you manage staff records, track attendance, oversee shifts, and handle day-to-day HR tasks—all from one easy-to-use platform designed to boost productivity and simplify your team’s workflow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <button className="button text-sm sm:text-base">
            <p>Make an Enquiry</p>
          </button>
          <button className="inverseButton text-sm sm:text-base">
            <p>Request a Demo</p>
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;