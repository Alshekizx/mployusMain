'use client';
// components/WorkforceSection.tsx
import { PlayIcon } from "@heroicons/react/24/solid";

const WorkforceSection = () => {
  return (
    <section className="containerDiv ">
      <div className="text-center inner_Padding">

        {/* ---------- Promotional Video ---------- */}
        <div className="bg-[var(--primaryTrans-color)] rounded-xl  aspect-video flex items-center justify-center mb-10">
          {/* Play Button (currently inactive) */}
          <button
            className="w-14 h-14 bg-[var(--primary-color)] rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
            onClick={() => {
              // TODO: Add modal open logic or embed video playback
              alert("Video playback coming soon!");
            }}
          >
            <PlayIcon className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-[var(--primary-color)] text-2xl text-start sm:text-3xl font-bold mb-4">
          How Can We Transform Your Workforce Management
        </h2>

        {/* Paragraph */}
        <p className="text-[var(--text-muted)] text-start ">
          Discover how Mployrus streamlines recruitment, HR tasks, and locum staffing in one powerful platform. Watch our quick video to see how our all-in-one solution can simplify your hiring process, enhance efficiency, and support your business growth.
        </p>
      </div>
    </section>
  );
};

export default WorkforceSection;