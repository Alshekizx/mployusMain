import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "Easily set, manage, and adjust budgets in real time to stay aligned with financial goals.",
  "Monitor spending trends by tracking historical budget performance for smarter planning.",
  "Receive automated alerts when approaching or exceeding budget limits to avoid overspending.",
  "Gain helpful insights and suggestions for budget optimization based on your financial activity.",
];

const FinanceFeaturesOverview = () => {
  return (
    <section className="w-full bg-[#62ABE005] flex flex-col items-center py-16">
      <div className="containerDiv">
        {/* Feature Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Image */}
          <div className="relative w-full lg:w-2/5 ">
            <Image
              src="/images/fanancePic1.png"
              alt="phone"
              width={509}
              height={587}
              className="h-auto w-full"
            />
          </div>

          {/* Text and Grid */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[var(--primary-color)]">Budget Management & History</h3>
            <p className="text-[var(--text-muted)]" style={{ fontSize: "28px" }}>
              Effortlessly create, monitor, and adjust budgets in real time. Keep track of past budgets to analyze spending patterns and receive automated alerts to stay within limits.
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

export default FinanceFeaturesOverview;
