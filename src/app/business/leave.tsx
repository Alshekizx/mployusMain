import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "Create professional, branded invoices with itemized details and client information, tailored to fit your business needs effortlessly.",
  "Keep full visibility of your cash flow by tracking invoice statuses, including paid, pending, and overdue payments, all in one place.",

];

const BusinessLeave = () => {
  return (
    <section className="relative w-full bg-[var(--primary-color)] flex flex-col items-center ">
       <Image
          src="/images/bgPattern2.png"
          alt="bg pattern"
          height={400}
          width={500}
          className="absolute hidden lg:block w-150 right-0 top-0 z-0"
        />
      <div className="containerDiv">
        {/* Feature Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Image */}
          <div className="relative w-full lg:w-2/5 ">
            <Image
              src="/images/business3.png"
              alt="phone"
              width={509}
              height={587}
              className="h-auto w-full"
            />
          </div>

          {/* Text and Grid */}
          <div className="w-full lg:w-3/5 flex flex-col text-white gap-6">
            <h3 className="text-xl font-bold " style={{fontSize:'34px'}}>Invoice Generation</h3>
            <p className="">
              Stay on top of payments with clear tracking of invoice statuses, improving your cash flow and overall financial management.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-white flex-shrink-0" />
                  <p className="">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLeave;
