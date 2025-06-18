import React from "react";
import Image from "next/image";

const OurTeam = () => {
  return (
    <section className="relative py-20 w-full flex flex-col justify-center items-center text-start bg-cover bg-center">
      <div className="containerDiv flex flex-col lg:flex-row items-start justify-between gap-10 z-10">
        {/* Text Block */}
        <div className="lg:w-4/10">
          <h1 className="text-[var(--primary-color)] font-bold mb-6">
            Our Team
          </h1>
          <p className="text-[var(--text-muted)]">
            At the heart of our company is a dedicated team committed to solving real business challenges with innovative technology and hands-on service. Each team member brings deep expertise, a collaborative mindset, and a shared mission to simplify work for modern businesses. From strategy to delivery, we work together to ensure our clients receive intuitive, effective, and scalable solutions.
          </p>
        </div>

        {/* Team Members */}
        <div className="flex flex-col sm:flex-row gap-5 lg:w-6/10">
  {/* Team Member 1 */}
  <div className="flex flex-col items-start text-start w-full sm:w-1/2">
    <div className="w-full h-full overflow-hidden">
      <Image
        src="/images/dan.png"
        alt="Dan J. Chapman"
        width={400}
        height={400}
        className="object-cover w-full h-full "
      />
    </div>
    <p className="font-semibold mt-4" style={{ fontSize: "21px" }}>
      Dan J. Chapman
    </p>
    <p className="mt-1" style={{ fontSize: "21px" }}>
      Director of Strategy
    </p>
    <span className="mt-2">
      Leads product strategy and ensures seamless user experiences.
    </span>
  </div>

  {/* Team Member 2 */}
  <div className="flex flex-col items-start text-start w-full sm:w-1/2">
    <div className="w-full h-full overflow-hidden">
      <Image
        src="/images/kalu.png"
        alt="Louis Kalu"
        width={400}
        height={400}
        className="object-cover w-full h-full "
      />
    </div>
    <p className="font-semibold mt-4" style={{ fontSize: "21px" }}>
      Louis Kalu
    </p>
    <p className="mt-1" style={{ fontSize: "21px" }}>
      Director of Operations
    </p>
    <span className="mt-2">
      Oversees operational strategy and execution for business growth.
    </span>
  </div>
</div>

      </div>
    </section>
  );
};

export default OurTeam;
