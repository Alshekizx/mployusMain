'use client';

import Link from "next/link";

type Service = {
  title: string;
  description: string;
  link?: string;
};

type HrServicesGridProps = {
  headline: string;
  subtext: string;
  services: Service[];
  fontSizeTitle?: string; // Optional override
  fontSizeDescription?: string; // Optional override
};

export default function HrServicesGrid({
  headline,
  subtext,
  services,
  fontSizeTitle = '34px',         // ✅ default
  fontSizeDescription = '22px',   // ✅ default
}: HrServicesGridProps) {
  return (
    <div className="flex flex-col items-center py-20">
      <div className="containerDiv flex flex-col items-center justify-center gap-20">
        <div className="text-center flex flex-col items-center w-full max-w-[800px]">
          <h3 className="text-[var(--primary-color)] font-bold">{headline}</h3>
          <p className="text-[var(--text-muted)] mt-5" style={{fontSize:'28px'}}>{subtext}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 w-full gap-6">
          {services.map((service, index) => {
            const gradientClass =
              index % 2 === 0
                ? 'bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-400)]'
                : 'bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-600)]';

            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-between rounded-lg gap-5 px-5 py-10 ${gradientClass}`}
              >
               <div className="flex flex-col items-center gap-5">
                <p
                  className="text-center w-full max-w-[220px] text-white"
                  style={{ fontSize: fontSizeTitle }}
                >
                  {service.title}
                </p>
                <p
                  className="text-center text-white"
                  style={{ fontSize: fontSizeDescription }}
                >
                  {service.description}
                </p>
               </div>
                

                {service.link && (
                 <Link
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4"
                  >
                    <div className="px-4 py-2 border border-white text-white  text-sm hover:bg-white hover:text-[var(--primary-color)] transition">
                      Learn More
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
