import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "Create available time slots for candidates to self-book interviews.",
  "Collect structured interviewer feedback post-interview.",
  "Supports both virtual and physical interviews.",
  "Candidates and interviewers receive automatic reminders.",
];

const RecruitmentLeave = () => {
  return (
    <section className="w-full bg-[#62ABE005] flex flex-col items-center py-16">
      <div className="containerDiv">
        {/* Feature Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Image */}
          <div className="relative w-full lg:w-2/5 ">
            <Image
              src="/images/Frame4273206172.png"
              alt="phone"
              width={509}
              height={587}
              className="h-auto w-full"
            />
          </div>

          {/* Text and Grid */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[var(--primary-color)]">Interview Scheduling & Management</h3>
            <p className="text-[var(--text-muted)]" style={{ fontSize: "28px" }}>
              Streamline hiring by scheduling and managing interviews with our calendar tools. Coordinate easily, avoid conflicts, and keep your recruitment process on track.
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

export default RecruitmentLeave;
