import React from "react";

const WorkAtMployUs = () => {
  return (
    <section className="relative  w-full flex flex-col justify-center items-center text-start bg-cover bg-center bg-[var(--primary-100)]">
      <div className="containerDiv flex flex-col lg:flex-row items-center justify-between gap-10 z-10">
       
       <div className="w-full text-[var(--primary-color)] lg:w-2/3">
            <h3 className="font-bold">
                Careers
            </h3>
            <p>
                To empower businesses with intelligent tools and expert services that simplify work, enhance efficiency, and support sustainable growth across industries.
            </p>
       </div>
       <button className="button" style={{borderRadius:'5px', padding:'10px 60px' }}> <p>Work at Mployus</p></button>

      </div>
    </section>
  );
};

export default WorkAtMployUs;
