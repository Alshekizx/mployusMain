import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "Employees get instant notifications for new shifts or schedule changes with real-time rota updates.",
  "Integrated Attendance Sync automatically tracks attendance from scheduled shifts for accurate payroll.",
  "Track overtime and stay compliant with labor regulations effortlessly.",
  "Optimize your workforce by aligning staffing needs with employee availability.",
];

const HRShiftRotasScheduling = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-[var(--primary-100)]">
      <div className="containerDiv">
       
        <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Text and Grid */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[var(--primary-color)]">Shift & Rotas Scheduling</h3>
            <p className="text-[var(--text-muted)]" style={{ fontSize: "28px" }}>
             Effortlessly plan, assign, and manage shifts with smart scheduling. Automate workforce allocation, minimize conflicts, and boost productivity seamlessly.
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
              src="/images/shiftt.png"
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

export default HRShiftRotasScheduling;
