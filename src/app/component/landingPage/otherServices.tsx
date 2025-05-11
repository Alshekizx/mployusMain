import {
    UserGroupIcon,
    CalendarDaysIcon,
    BriefcaseIcon,
    BanknotesIcon,
    ChartBarIcon,
    ClipboardDocumentCheckIcon,
  } from "@heroicons/react/24/solid";
  
  const services = [
  {
    title: "HR Software",
    icon: UserGroupIcon,
    description:
      "Manage staff documents, shifts, attendance in our all-in-one HR software solution.",
  },
  {
    title: "Locum Scheduling",
    icon: CalendarDaysIcon,
    description:
      "Easily assign and manage locum staff shifts, availability, and replacements with real-time updates.",
  },
  {
    title: "Recruitment Tools",
    icon: BriefcaseIcon,
    description:
      "Streamline hiring with automated job postings, candidate tracking, and onboarding workflows.",
  },
  {
    title: "Payroll Automation",
    icon: BanknotesIcon,
    description:
      "Generate accurate payrolls, tax documents, and direct deposits with full compliance support.",
  },
  {
    title: "Performance Reviews",
    icon: ClipboardDocumentCheckIcon,
    description:
      "Track employee performance with 360° feedback, KPI monitoring, and review scheduling.",
  },
  {
    title: "Analytics Dashboard",
    icon: ChartBarIcon,
    description:
      "Gain insights with real-time HR metrics, reports, and visualizations to inform decisions.",
  },
];
  
  const OtherServicesSection = () => {
    return (
      <section className="containerDiv bg_themed_color">
  <div className="inner_Padding  flex flex-col lg:flex-row gap-6">
    <h2 className="text-3xl font-bold text-[var(--primary-color)] lg:w-1/2">
      Our Services
    </h2>
    <div className="lg:w-1/2">
      <div className="inline-block px-4 py-1 bg-[var(--primaryTrans-color)] rounded-lg font-semibold text-sm text-[var(--primary-color)]">
        Featured Products
      </div>
      <p className="mt-4 text-[var(--text-color)] text-base">
        Powering your business with intuitive software solutions and expert services to streamline operations and enhance efficiency.
      </p>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
    {services.map((service, index) => (
      <div key={index} className="flex">
        <div className="card p-6 bg-white shadow-md rounded-lg h-full flex flex-col justify-between w-full">
          <div>
            <div className="flex items-center mb-3">
              <service.icon className="w-6 h-6 text-[var(--primary-color)] mr-2" />
              <h3 className="text-md font-bold">{service.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
    );
  };
  
  export default OtherServicesSection;
  