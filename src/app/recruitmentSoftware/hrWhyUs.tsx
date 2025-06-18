
import Image from "next/image";

const featureCards = [
  {
    title: "Centralized Job Management",
    description:
      "Manage job postings across departments and channels from one dashboard, ensuring faster publishing and better organization.",
    image: "/images/path-to-image1.jpg", // Replace with your actual image paths
  },
  {
    title: "Comprehensive Applicant Tracking",
    description:
      "Track candidate progress visually with advanced filtering and bulk actions, eliminating the need for spreadsheets.",
    image: "/images/path-to-image2.jpg",
  },
  {
    title: "Collaborative Hiring",
    description:
      "Empower your team with role-based access, feedback tools, and customizable workflows that streamline decision-making.",
    image: "/images/path-to-image3.jpg",
  },
  {
    title: "Effortless Interview Scheduling",
    description:
      "Coordinate interviews easily with self-booking slots, automated reminders, and structured feedback collection.",
    image: "/images/path-to-image4.jpg",
  },
];

const RecruitmentWhyChooseUs = () => {
  return (
    <section className="w-full min-h-[120vh] bg-[var(--primary-100)] flex flex-col items-center py-20">
      <div className="containerDiv">
        <div className="flex flex-col md:flex-row  items-start justify-between gap-6 mb-10">
          <div className="w-full md:w-6/10">
            <h3 className="text-[var(--text-dark)]">
              Why Choose MployUs Recruitment Software?
            </h3>
            <p className="text-[var(--text-muted)] mt-2" style={{fontSize:"22px"}}>
              Our recruitment software simplifies hiring by centralizing job postings, applicant tracking, and interview scheduling boosting team collaboration and helping you find the right talent faster.
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

export default RecruitmentWhyChooseUs;