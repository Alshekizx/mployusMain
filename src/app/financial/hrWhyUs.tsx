
import Image from "next/image";

const featureCards = [
  {
    title: "All-in-One Financial Control",
    description:
      "Manage budgets, income, expenses, and payroll from a single, intuitive platform eliminating the need for multiple disconnected tools.",
    image: "/images/path-to-image1.jpg", // Replace with your actual image paths
  },
  {
    title: "Real-Time Financial Visibility",
    description:
      "Get instant access to up-to-date financial data, helping you make informed business decisions quickly and confidently.",
    image: "/images/path-to-image2.jpg",
  },
  {
    title: "Seamless Integration",
    description:
      "Connect effortlessly with your existing accounting systems and export data for audits, reports, or compliance with just a few clicks.",
    image: "/images/path-to-image3.jpg",
  },
  {
    title: "Built for Growing Teams",
    description:
      "Whether you're a small business or scaling enterprise, our software adapts to your needs keeping your finances organized at every stage.",
    image: "/images/path-to-image4.jpg",
  },
];

const FinanceWhyChooseUs = () => {
  return (
    <section className="w-full min-h-[120vh] bg-[var(--primary-100)] flex flex-col items-center py-20">
      <div className="containerDiv">
        <div className="flex flex-col md:flex-row  items-start justify-between gap-6 mb-10">
          <div className="w-full md:w-6/10">
            <h3 className="text-[var(--text-dark)]">
             Why Choose MployUs Finance Software?
            </h3>
            <p className="text-[var(--text-muted)] mt-2">
              Our Finance Software offers full control and clear insights, simplifying complex tasks with seamless integration and scalability to help grow your business.
            </p>
          </div>
          <button className="button" style={{fontSize:"22px"}}>
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

export default FinanceWhyChooseUs;