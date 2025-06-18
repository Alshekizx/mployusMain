"use client";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const testimonials = [
  {
    name: "David M.",
    position: "HR Manager, Medlink Solutions",
    review:
      "As an employer, MployUs transformed our hiring process. We quickly connected with skilled candidates, and the AI-driven matching saved us so much time!",
  },
  {
    name: "Renee Wells",
    position: "Talent Lead, BrightPath",
    review:
      "With MployUs, we found qualified candidates quickly. The platform is intuitive and efficient—made recruitment so much easier.",
  },
  {
    name: "Michael Lee",
    position: "Operations Director, CoreTech",
    review:
      "Their AI-based tools are game-changers. We've saved tons of time on recruitment while improving candidate quality.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[current];

  return (
    <section className="w-full items-center flex flex-col  py-16 bg-white">
      <div className="flex flex-col containerDiv lg:flex-row items-stretch justify-between gap-10">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-6 h-full flex flex-col justify-between">
          <p className="text-[var(--primary-color)] font-semibold">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)]"style={{color: "var(--text-dark)"}} >
            What Our Clients Are Saying About Us
          </h2>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            At Mployus, we build practical solutions that solve real HR challenges. Our Human Resources Software is trusted by teams and businesses to streamline staff management and reduce admin stress.
          </p>
          <p className="text-[var(--text-muted)] text-base leading-relaxed">
            We provide a secure, cloud-based workforce management platform designed to simplify HR and compliance processes for small and medium-sized businesses. From onboarding and scheduling to leave tracking, and employee data management,all in one easy-to-use system.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 bg-[var(--primary-color)] text-white px-8 py-12 relative item-center flex flex-col justify-between ">

        <Image
            src="/images/colon.png"
            alt="Team Hero Pic"
            width={200}
            height={200}
            className="absolute top-0 right-1/3  z-0 w-60 h-auto"
            priority
          />

          <div className="space-y-4">
            <blockquote className="text-lg text-[30px] leading-relaxed italic">
              “{testimonial.review}”
            </blockquote>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="">{testimonial.position}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-4 right-[-20px] flex items-center gap-2">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white transition"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-[var(--primary-100)] text-[var(--primary-color)] flex items-center justify-center hover:bg-white transition"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;