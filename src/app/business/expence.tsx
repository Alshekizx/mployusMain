import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "Track asset usage by monitoring which employees or departments have assigned items to ensure accountability.",
  "Keep all asset records current and accurate, simplifying audits and improving overall asset lifecycle management.",

];

const BusinessExpense = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-[#62ABE005]">
      <div className="containerDiv">
       
        <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Text and Grid */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[var(--primary-color)]">Assets Management</h3>
            <p className="text-[var(--text-muted)]" style={{ fontSize: "28px" }}>
             Easily track and manage your company’s valuable assets with our intuitive dashboard, keeping records updated and providing clear visibility into asset use to boost efficiency and minimize losses.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-4">
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
              src="/images/business4.png"
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

export default BusinessExpense;
