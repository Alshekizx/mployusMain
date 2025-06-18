
import Image from "next/image";

const featureCards = [
  {
    title: "All-in-One Platform",
    description:
      "Access a complete suite of HR, recruitment, finance, and locum tools all in one seamless, easy-to-use platform.",
    image: "/images/path-to-image1.jpg", // Replace with your actual image paths
  },
  {
    title: "Customizable & Scalable",
    description:
      "Adapt our tools to your processes and grow with confidence as your needs evolve.",
    image: "/images/path-to-image2.jpg",
  },
  {
    title: "Collaborative & Efficient",
    description:
      "Streamline communication, approvals, and task management across teams and departments.",
    image: "/images/path-to-image3.jpg",
  },
  {
    title: "Secure & Reliable",
    description:
      "Count on enterprise-grade security, regular updates, and dependable support for peace of mind.",
    image: "/images/path-to-image4.jpg",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full min-h-[120vh] bg-[var(--primary-100)] flex flex-col items-center py-20">
      <div className="containerDiv">
        <div className="flex flex-col md:flex-row  items-start md:items-center justify-between gap-6 mb-10">
          <div className="w-full md:w-6/10">
            <h3 className="text-[var(--text-dark)]">
              Why Choose MployUs HR Software?
            </h3>
            <p className="text-[var(--text-muted)] mt-2">
              Our software simplifies operations, boosts efficiency, and supports growth whether you&apos;re managing people, finances, recruitment, or locum staffing.
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
              <div className="p-4 mt-4">
                
                  
                  <p className="text-lg font-semibold text-[var(--text-dark)]" style={{fontSize:'20px'}}>{card.title}</p>
                
                <span className="text-[var(--text-muted)]" style={{fontSize:'16px'}}>{card.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;