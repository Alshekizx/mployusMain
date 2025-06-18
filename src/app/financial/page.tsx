import FinanceConnect from "./connext";
import FinanceFeaturesOverview from "./hrFeaturesOverview";
import FinanceHeroSection from "./hrHero";
import FinanceShiftRotasScheduling from "./hrShiftRotasScheduling";
import FinanceWhyChooseUs from "./hrWhyUs";
import FinanceLeave from "./leave";



export default function FinanceSoftware() {
  return (
    <main className="flex flex-col gap-6" >
        <div className="bg-[var(--primary-color)] flex flex-col items-center ">
        <FinanceHeroSection/>
        </div>
        <FinanceWhyChooseUs/>
        <div className="pt-10 flex flex-col items-center w-full">
            <div className="w-full flex flex-col items-center containerDiv" style={{minHeight:'10px'}}>
            <h2 className="font-bold text-[var(--primary-color)]">Features Overview</h2>
            <p className="text-[var(--text-muted)] text-center max-w-6xl" style={{ fontSize: "28px" }}>
                Gain full control over your business finances with powerful tools for budgeting, cash flow tracking, income and expense management, and seamless integrations all designed to help you make smarter financial decisions.
            </p>
            </div>
        </div>
        <FinanceFeaturesOverview/>
        <FinanceShiftRotasScheduling/>
        <FinanceLeave/>
      
        <FinanceConnect/>
     
    </main>
  );
}
