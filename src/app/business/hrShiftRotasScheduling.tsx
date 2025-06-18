import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "Store all your documents in one secure location, reducing clutter and the risk of lost files.",
  "Quickly upload new files and find what you need with powerful search and filtering options.",
  "Manage user permissions to ensure sensitive information is only accessible to authorized personnel.",
  "Keep track of document changes with version control, so you always have access to previous editions.",
];

const BusinessShiftRotasScheduling = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-[#62ABE005]">
      <div className="containerDiv">
       
        <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Text and Grid */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[var(--primary-color)]">Document Management</h3>
            <p className="text-[var(--text-muted)]" style={{ fontSize: "28px" }}>
            Easily organize and access all your important business documents in a single, secure platform. Quickly upload, store, and manage contracts, invoices, and reports with ease.
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
              src="/images/business2.png"
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

export default BusinessShiftRotasScheduling;
