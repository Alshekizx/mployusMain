import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "Visualise candidate progress in real time through every stage of the hiring pipeline.",
  "Easily search and filter applicants based on skills, experience, or application date.",
  "Save time by approving or rejecting multiple candidates at once using bulk actions.",
  "Collaborate seamlessly with your team through internal notes, tags, and comments.",
];

const RecruitmentShiftRotasScheduling = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-[var(--primary-100)]">
      <div className="containerDiv">
       
        <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Text and Grid */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[var(--primary-color)]">Applicant Tracking System (ATS)</h3>
            <p className="text-[var(--text-muted)]" style={{ fontSize: "28px" }}>
             Our ATS streamlines recruitment by centralising every applicant’s journey from application to onboarding. Ditch spreadsheets and scattered updates track, filter, and collaborate with ease and control.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[var(--primary-color)] flex-shrink-0" />
                  <p className="text-[var(--text-muted)]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-2/5 ">
            <Image
              src="/images/Frame427320617.png"
              alt="phone"
              width={509}
              height={587}
              className="h-auto w-full"
            />
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default RecruitmentShiftRotasScheduling;
