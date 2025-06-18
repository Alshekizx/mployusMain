import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "Effortlessly record and categorize all income and expenses for accurate financial tracking.",
  "Set up and manage recurring payments and bills to avoid missed deadlines and reduce manual work.",
  "Gain deeper financial insight with dynamic charts that highlight spending patterns and revenue trends.",
  "Generate clear, easy-to-understand reports that support smarter budgeting and business decisions.",
];

const FinanceShiftRotasScheduling = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-[var(--primary-100)]">
      <div className="containerDiv">
       
        <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Text and Grid */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[var(--primary-color)]">Income & Expense Management</h3>
            <p className="text-[var(--text-muted)]" style={{ fontSize: "28px" }}>
             Keep your finances organized with an easy-to-use system for logging transactions, automating recurring payments, and visualizing financial trends with interactive charts.
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
              src="/images/fanancePic2.png"
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

export default FinanceShiftRotasScheduling;
