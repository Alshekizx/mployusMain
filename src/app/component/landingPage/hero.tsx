import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center " style={{ backgroundImage: "url('images/heroBg.jpg')", paddingTop: '5rem' }}>
      <div className="absolute inset-0 " style={{ backgroundColor: '#00000066' }}></div>
      <div className="relative z-10 max-w-3xl px-4">
        <p className="text-sm tracking-widest mb-2" style={{ color: '#ffffff'}}>WELCOME TO MployUs</p>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ffffff'}}>
          EFFORTLESS HIRING & WORKFORCE MANAGEMENT
        </h1>
        <p className="text-white text-base sm:text-lg mb-6" style={{ color: '#ffffff'}}>
          Empower your team with our all-in-one HR software, seamless recruitment, and locum staffing services.
          Find the right talent, manage shifts effortlessly, and scale with ease.
        </p>
        <button className="button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;