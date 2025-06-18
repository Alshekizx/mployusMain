import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "Assign specific permissions to recruiters, hiring managers, and admins for controlled access.",
  "Allow team members to provide ratings and comments on candidates for better feedback.",
  "Create custom approval and review workflows that fit your unique hiring process.",
  "Monitor team activities and decisions with detailed activity logs.",
];

const RecruitmentExpense = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-[var(--primary-100)]">
      <div className="containerDiv">
       
        <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Text and Grid */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[var(--primary-color)]">Collaborative Hiring Tools</h3>
            <p className="text-[var(--text-muted)]" style={{ fontSize: "28px" }}>
             Empower teams to contribute to the hiring process with structured tools and access.
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
              src="/images/Frame4273206173.png"
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

export default RecruitmentExpense;
