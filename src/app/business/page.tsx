import BusinessConnect from "./connext";
import BusinessExpense from "./expence";
import BusinessFeaturesOverview from "./hrFeaturesOverview";
import BusinessHeroSection from "./hrHero";
import BusinessShiftRotasScheduling from "./hrShiftRotasScheduling";
import BusinessWhyChooseUs from "./hrWhyUs";
import BusinessLeave from "./leave";


export default function HrSoftware() {
  return (
    <main className="flex flex-col gap-6" >
        <div className="bg-[var(--primary-color)] flex flex-col items-center ">
        <BusinessHeroSection/>
        </div>
        <BusinessWhyChooseUs/>
        <div className="pt-10 flex flex-col items-center w-full">
            <div className="w-full flex flex-col items-center containerDiv" style={{minHeight:'10px'}}>
            <h2 className="font-bold text-[var(--primary-color)]">Features Overview</h2>
            <p className="text-[var(--text-muted)] text-center max-w-6xl" style={{ fontSize: "28px" }}>
                Our Business Management Software helps you track sales, manage assets, and monitor performance with ease. Built to reduce errors and support smart decisions, it grows with your business.
            </p>
            </div>
        </div>
        <BusinessFeaturesOverview/>
        <BusinessShiftRotasScheduling/>
        <BusinessLeave/>
        <BusinessExpense/>
        <BusinessConnect/>
     
    </main>
  );
}
