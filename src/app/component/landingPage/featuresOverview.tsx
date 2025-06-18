'use client';

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

type FeatureKey =
  | "HR Software"
  | "Finance Software"
  | "Recruitment Software"
  | "Business Management Software";

type Feature = {
  heading: string;
  description: string;
  cards: { title: string; iconImage: string }[];
};

const featureData: Record<FeatureKey, Feature> = {
  "HR Software": {
    heading: "Human Resources Software",
    description:
      "Streamline how you manage staff records, track attendance, oversee shifts, and handle day-to-day HR tasks—all from one easy-to-use platform.",
    cards: [
      { title: "Smart Attendance Management", iconImage:"/images/Vector1.png"  },
      { title: "Shift & Rotas Scheduling", iconImage:"/images/Vector2.png"  },
      { title: "Expense Tracker", iconImage:"/images/Vector3.png"  },
    ],
  },
  "Finance Software": {
    heading: "Finance Software",
    description:
      "Take control of your finances with our easy-to-use Finance Software. Track expenses, manage budgets, and generate real-time reports to stay organized and make smarter business decisions.",
    cards: [
      { title: "Budget Management", iconImage:"/images/Vector4.png"  },
      { title: "Cash Flow Tracking", iconImage:"/images/Vector5.png"  },
      { title: "Expense Management", iconImage:"/images/Vector6.png"  },
    ],
  },
  "Recruitment Software": {
    heading: "Recruitment Software",
    description:
      "Simplify your hiring process from job posting to onboarding. Our intuitive recruitment software helps you attract top talent, collaborate with your team, and make faster, smarter hiring decision.",
    cards: [
      { title: "Job Posting Management", iconImage:"/images/Vector7.png"  },
      { title: "Applicant Tracking System", iconImage:"/images/Vector8.png"  },
      { title: "Collaborative Hiring Tools", iconImage:"/images/Vector9.png"  },
    ],
  },
  "Business Management Software": {
    heading: "Business Management Software",
    description:
      "Manage transactions, assets, subscriptions, and sales reports effortlessly in one intuitive platform. Designed to streamline operations and deliver real-time insights, our software scales with your business.",
    cards: [
      { title: "Sales Reports Dashboard", iconImage:"/images/Vector10.png"  },
      { title: "Document Management", iconImage:"/images/Vector11.png"  },
      { title: "Invoice Generation", iconImage:"/images/Vector12.png"  },
    ],
  },
};

const menuOptions = Object.keys(featureData) as FeatureKey[];

const FeatureOverview = () => {
  const [selected, setSelected] = useState<FeatureKey>(menuOptions[0]);
  const current = featureData[selected];

  return (
    <section className="w-full min-h-[120vh] flex flex-col items-center py-20">
      <div className="containerDiv">
        <div className="w-full mb-20 gap-6 text-center flex flex-col items-center">
            <h2 className="text-[var(--primary-color)]">Features Overview</h2>
            <p className="text-[var(--text-muted)] max-w-6xl" style={{fontSize:'28px'}}>
             Streamline HR processes with powerful tools designed for efficient workforce management, from attendance tracking to payroll integration and performance analytics.
            </p>
          </div>


        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 relative">
          {/* Left - Cards */}
          <div className="bg-[var(--primary-color)] p-10 min-h-[702px] w-full lg:w-7/10 transition-all duration-300">
          <div className="w-full lg:max-w-[90%] flex flex-col h-full justify-between items-start gap-6">
  <h1 className="text-white font-semibold text-[var(--text-dark)] mb-4">
    {current.heading}
  </h1>

  <p className="text-white mb-8">{current.description}</p>

  {/* Feature Cards */}
  <div className="flex flex-wrap gap-4">
    {current.cards.map(({ title, iconImage }, idx) => (
      <div key={idx} className="flex flex-col items-center w-[45%] sm:w-48 text-center">
        <div className="mb-4">
          <Image
            src={iconImage}
            alt="icon"
            height={100}
            width={100}
            className="w-14 h-14 object-contain"
          />
        </div>
        <p className="font-medium text-white">{title}</p>
      </div>
    ))}
  </div>

  {/* Button + Pagination */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 mt-6">
    <button className="bg-[var(--primary-500)] text-white px-6 py-2 rounded-full shadow hover:bg-[var(--primary-800)]">
      <p>Learn More</p>
    </button>

    {/* Pagination Controls */}
    <div className="flex items-center gap-4 flex-wrap">
      {/* Dots */}
      <div className="flex gap-2">
        {menuOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={`w-3 h-3 rounded-full transition ${
              selected === option
                ? "bg-[var(--primary-700)]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="flex gap-2">
        <button
          onClick={() => {
            const currentIndex = menuOptions.indexOf(selected);
            const newIndex =
              (currentIndex - 1 + menuOptions.length) % menuOptions.length;
            setSelected(menuOptions[newIndex]);
          }}
          className="w-[40px] h-[40px] sm:w-[54px] sm:h-[54px] rounded-full border border-white flex items-center justify-center hover:bg-[var(--primary-800)] hover:border-transparent"
        >
          <ArrowLeftIcon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
        </button>

        <button
          onClick={() => {
            const currentIndex = menuOptions.indexOf(selected);
            const newIndex = (currentIndex + 1) % menuOptions.length;
            setSelected(menuOptions[newIndex]);
          }}
          className="w-[40px] h-[40px] sm:w-[54px] sm:h-[54px] rounded-full bg-[var(--primary-500)] flex items-center justify-center hover:bg-[var(--primary-800)]"
        >
          <ArrowRightIcon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
        </button>
      </div>
    </div>
  </div>
</div>

            
            <div className="absolute w-[40%] top-1/5 right-0 lg:flex flex-col gap-4 hidden ">
            <p className=" font-semibold text-center mb-10 text-[var(--text-dark)]">Get Started</p>
                {menuOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelected(option)}
                className={`rounded-full px-6 py-3 w-full text-left font-medium transition flex items-center gap-3 ${
                    selected === option
                    ? "bg-[var(--primary-700)] text-white"
                    : "bg-gray-100 text-[var(--text-dark)] hover:bg-gray-200"
                }`}
                >
                {/* Round checkbox */}
                {selected === option && (
                    <span className="w-5 h-5 rounded-full border-2 border-white bg-white flex items-center justify-center">
                    <span className="w-4 h-4 rounded-full bg-[var(--primary-color)]"></span>
                    </span>
                )}
                <p style={{fontSize:'20px'}}>{option}</p>
                </button>
            ))}
            </div>
          </div>

          {/* Right - Menu */}
          <div className="w-full hidden lg:w-3/10 text-center  relative flex flex-col gap-4">
            
          </div>
            
        </div>
      </div>
    </section>
  );
};

export default FeatureOverview;
