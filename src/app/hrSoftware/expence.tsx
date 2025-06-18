import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "Easy Submission, Upload receipts and log expenses in seconds.",
  "Track and record travel mileage effortlessly for precise and timely reimbursements.",
  "Designed to eliminate paper receipts, centralize expense tracking, and simplify ongoing business expense management.",
  "Easily view team expenses by category see exactly what's spent on travel, food, or accommodation.",
];

const HRExpense = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-[var(--primary-100)]">
      <div className="containerDiv">
       
        <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Text and Grid */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[var(--primary-color)]">Expense Tracker</h3>
            <p className="text-[var(--text-muted)]" style={{ fontSize: "28px" }}>
             Take control of employee expenses with an easy-to-use system that simplifies submission, approval, and reimbursement helping you manage budgets and reduce manual paperwork.
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
              src="/images/phone3.png"
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

export default HRExpense;
