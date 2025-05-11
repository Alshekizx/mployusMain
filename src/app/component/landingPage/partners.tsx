import Image from "next/image";

const partners = [
  { name: "Airbnb", src: "/partners/airbnb.png" },
  { name: "Amazon", src: "/partners/amazon.png" },
  { name: "Google", src: "/partners/google.png" },
  { name: "FedEx", src: "/partners/fedex.png" },
];

const Partners = () => {
  return (
    <section className="containerDiv flex flex-col gap-10">
      <div className=" flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-blue-800">Our Partners</h2>
        </div>
        <div className="w-full md:w-1/2 text-sm text-right mt-2 md:mt-0" style={{ color: "var(--text-muted)" }}>
          We are trusted to deliver our promises
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center">
        {partners.map((partner, index) => (
          <div key={index}>
            <Image
              src={partner.src}
              alt={partner.name}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
