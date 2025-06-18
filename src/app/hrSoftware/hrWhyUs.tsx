
import Image from "next/image";

const featureCards = [
  {
    title: "Centralized Staff Management",
    description:
      "Securely store and manage employee records, documents, roles, and profiles in one centralized, easy-to-access platform.",
    image: "/images/path-to-image1.jpg", // Replace with your actual image paths
  },
  {
    title: "Smart Attendance & Leave Tracking",
    description:
      "Track employee attendance, monitor trends, and manage leave requests and approvals with smart automation.",
    image: "/images/path-to-image2.jpg",
  },
  {
    title: "Custom Shift Scheduling",
    description:
      "Easily assign employee shifts, create and automate rosters, and adjust work schedules based on staff roles, availability and department needs.",
    image: "/images/path-to-image3.jpg",
  },
  {
    title: "HR Reports & Insights",
    description:
      "Access real-time analytics and customizable reports to track attendance, performance, and workforce activities.",
    image: "/images/path-to-image4.jpg",
  },
];

const HrWhyChooseUs = () => {
  return (
    <section className="w-full min-h-[120vh] bg-[var(--primary-100)] flex flex-col items-center py-20">
      <div className="containerDiv">
        <div className="flex flex-col md:flex-row  items-start justify-between gap-6 mb-10">
          <div className="w-full md:w-6/10">
            <h3 className="text-[var(--text-dark)]">
              Why Choose MployUs HR Software?
            </h3>
            <p className="text-[var(--text-muted)] mt-2" style={{fontSize:"22px"}}>
              Mployyus HR Software streamlines attendance, shifts, and approvals cutting manual work, improving accuracy, and supporting business growth.
            </p>
          </div>
          <button className="button">
            <p>Explore More About Us</p>
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white  overflow-hidden flex flex-col modalCard"
            >
              <div className="h-[180px] w-full relative bg-black">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute left-5 bottom-[-20px]"> 
                    <Image src='/images/whyUsIcon.png' alt='icon' height={100} width={100} className=" w-14 h-full" />
                </div>
               
              </div>
              <div className="p-3 mt-4">
                
                  
                  <p className="text-lg font-semibold text-[var(--text-dark)]" style={{fontSize:'18px'}}>{card.title}</p>
                
                <span className="text-[var(--text-muted)]" style={{fontSize:'16px'}}>{card.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HrWhyChooseUs;