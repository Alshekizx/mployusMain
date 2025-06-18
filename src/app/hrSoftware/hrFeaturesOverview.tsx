import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "Employees can clock in and out on the go with our mobile app, featuring real-time tracking for accurate attendance.",
  "GPS and geofencing features restrict clock-ins to approved locations, preventing unauthorized remote check-ins.",
  "Easily manage attendance across multiple shifts and flexible work schedules with shift-based tracking.",
  "Generate detailed insights on employee attendance, including punctuality, overtime, and overall trends.",
];

const HrFeaturesOverview = () => {
  return (
    <section className="w-full bg-[#62ABE005] flex flex-col items-center py-16">
      <div className="containerDiv">
        {/* Feature Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Image */}
          <div className="relative w-full lg:w-2/5 ">
            <Image
              src="/images/phone1.jpg"
              alt="phone"
              width={509}
              height={587}
              className="h-auto w-full"
            />
          </div>

          {/* Text and Grid */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[var(--primary-color)]">Smart Attendance Management</h3>
            <p className="text-[var(--text-muted)]" style={{ fontSize: "28px" }}>
              Easily track attendance with our Smart Attendance Management system ensuring accuracy, preventing time theft, and streamlining workforce monitoring in real time.
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

export default HrFeaturesOverview;
