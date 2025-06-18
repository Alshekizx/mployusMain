import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "Tailor each job application with custom forms that include role-specific fields.",
  "Easily organize your job listings by department, experience level, and employment type.",
  "Set automated job expiration dates and receive timely reminders to renew or update postings.",
  "Easily share job posts on your career page and our platform to reach more candidates from one central dashboard.",
];

const RecruitmentFeaturesOverview = () => {
  return (
    <section className="w-full bg-[#62ABE005] flex flex-col items-center py-16">
      <div className="containerDiv">
        {/* Feature Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Image */}
          <div className="relative w-full lg:w-2/5 ">
            <Image
              src="/images/woman2.png"
              alt="phone"
              width={509}
              height={587}
              className="h-auto w-full"
            />
          </div>

          {/* Text and Grid */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[var(--primary-color)]">Job Posting & Listing Management</h3>
            <p className="text-[var(--text-muted)]" style={{ fontSize: "28px" }}>
              Create and manage job openings across departments and locations with ease, using a single dashboard to streamline your hiring efforts.
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
        </div>
      </div>
    </section>
  );
};

export default RecruitmentFeaturesOverview;
