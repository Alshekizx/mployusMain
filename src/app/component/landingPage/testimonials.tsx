"use client";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const testimonials = [
  {
    name: "Renee Wells",
    title: "C.E.O DublinXYZ Company",
    image: "/images/default.jpg",
    rating: 5,
    review:
      "With Agency the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors on my website",
  },
  {
    name: "Michael Lee",
    title: "Founder of GreenCorp",
    image: "/images/default.jpg",
    rating: 5,
    review:
      "They streamlined our HR processes effortlessly. Their tools are intuitive and their support team is amazing.",
  },
  {
    name: "Fatima Musa",
    title: "HR Manager, AgroTech Nigeria",
    image: "/images/default.jpg",
    rating: 4,
    review:
      "A reliable and innovative team. Their HR software changed how we manage payroll and attendance.",
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
    <section className="containerDiv">
      <div className="text-center py-10 flex flex-col gap-20">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center ">
          <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4 md:mb-0">
            What our customers are saying
          </h2>
          <p className="text-sm text-[var(--text-muted)]">
            We are trusted to deliver our promises
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <StarIcon
                key={i}
                className="w-5 h-5 text-yellow-400"
                aria-hidden="true"
              />
            ))}
            <span className="text-[var(--text-muted)] text-sm font-medium ml-2">
              {testimonial.rating.toFixed(1)}
            </span>
          </div>

          <blockquote className="text-lg font-medium text-[var(--text-dark)] italic">
            “{testimonial.review}”
          </blockquote>

          <div className="flex items-center mt-6">
            <div className="overflow-hidden flex items-center justify-center rounded-full w-12 h-12 bg-gray-200">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
            </div>
            <div className="ml-3">
              <p className="text-[var(--text-dark)] font-semibold">{testimonial.name}</p>
              <p className="text-[var(--text-muted)] text-sm">{testimonial.title}</p>
            </div>
          </div>

          <div className="flex justify-end mt-6 gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:bg-gray-100"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-[var(--foreground)] text-white flex items-center justify-center hover:opacity-80"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;