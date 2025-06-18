
import Image from "next/image";

const featureCards = [
  {
    title: "All-in-One Solution",
    description:
      "Manage transactions, assets, subscriptions, and sales reports within a single, unified platform—eliminating the need for multiple tools.",
    image: "/images/path-to-image1.jpg", // Replace with your actual image paths
  },
  {
    title: "User-Friendly Interface",
    description:
      "Designed for ease of use, our software allows teams of all sizes to quickly adapt and efficiently manage business operations without technical hurdles.",
    image: "/images/path-to-image2.jpg",
  },
  {
    title: "Accurate Financial Tracking",
    description:
      "Maintain accurate and detailed records of income and expenses to enhance budgeting, strengthen forecasting, and support overall growth.",
    image: "/images/path-to-image3.jpg",
  },
  {
    title: "Scalable for Growth",
    description:
      "Built to grow with your business, our software supports expanding product lines and increased transaction volumes seamlessly.",
    image: "/images/path-to-image4.jpg",
  },
];

const BusinessWhyChooseUs = () => {
  return (
    <section className="w-full min-h-[120vh] bg-[var(--primary-100)] flex flex-col items-center py-20">
      <div className="containerDiv">
        <div className="flex flex-col md:flex-row  items-start justify-between gap-6 mb-10">
          <div className="w-full md:w-6/10">
            <h3 className="text-[var(--text-dark)]">
              Why Choose MployUs Business Management Software?
            </h3>
            <p className="text-[var(--text-muted)] mt-2" style={{fontSize:"22px"}}>
              Our software streamlines your business with powerful, easy-to-use features trusted by businesses for efficient management.
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

export default BusinessWhyChooseUs;