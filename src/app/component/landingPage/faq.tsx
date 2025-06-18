"use client";
import { useState } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "Do I need to install MployUs software products on my computer?",
    answer:
      "No downloads or installations needed! MployUs is a fully cloud-based platform, so you can access your complete HR and workforce management system anytime, anywhere — straight from your web browser on any device.",
  },
  {
    question: "How do I log in?",
    answer:
      "To log in, simply visit the MployUs website and click the 'Login' button at the top-right corner. Enter your registered email address and password to securely access your dashboard.",
  },
  {
    question: "Can my employees log into the system?",
    answer:
      "Yes, employees can be granted secure login access with personalized roles and permissions. This allows them to clock in, view schedules, manage leave requests, and more—depending on the access you assign.",
  },
  {
    question: "Does MployUs HR have a mobile app?",
    answer:
      "Yes! MployUs offers a mobile app for both Android and iOS, allowing you and your employees to manage HR tasks on the go—from clocking in to checking schedules or submitting leave requests.",
  },
];


const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default open

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="flex flex-col pb-20 items-center">
      <div className="containerDiv">
        <h2 className="text-start text-[var(--primary-color)] text-3xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-start text-[var(--text-muted)] mb-10 text-sm">
          Got questions? Our FAQ section provides answers to common inquiries on hiring, workforce management, locum staffing, and HR software, helping you navigate our solutions with ease.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
  key={index}
  className={`rounded-lg p-6  transition-colors duration-300 ${
    openIndex === index
      ? "bg-[var(--primary-color)] text-white"
      : "bg-[var(--primary-100)] text-[var(--text-dark)]"
  }`}
>
  <div
    className="flex justify-between items-center cursor-pointer"
    onClick={() => toggle(index)}
  >
    <p
      style={{ fontSize:'28px'}} className={`font-semibold  ${
        openIndex === index ? "text-white" : "text-[var(--text-dark)]"
      }`}
    >
      {faq.question}
    </p>
    <div
      className="modalCard"
      style={{
        backgroundColor:
          openIndex === index
            ? "rgba(255, 255, 255, 0.2)"
            : "#62ABE01A",
        padding: "0.5rem",
      }}
    >
      {openIndex === index ? (
        <XMarkIcon className="w-5 h-5 text-white" />
      ) : (
        <PlusIcon className="w-5 h-5 text-[var(--primary-color)]" />
      )}
    </div>
  </div>

  {openIndex === index && (
    <div
      className={`mt-4 border-t pt-4 text-sm ${
        openIndex === index
          ? "text-white border-white"
          : "text-[var(--text-muted)]"
      }`}
    >
      <p>{faq.answer}</p>
    </div>
  )}
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;