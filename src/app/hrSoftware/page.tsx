import Connect from "./connext";
import HRExpense from "./expence";
import HrFeaturesOverview from "./hrFeaturesOverview";
import HRHeroSection from "./hrHero";
import HRShiftRotasScheduling from "./hrShiftRotasScheduling";
import HrWhyChooseUs from "./hrWhyUs";
import HrLeave from "./leave";


export default function HrSoftware() {
  return (
    <main className="flex flex-col gap-6" >
        <div className="bg-[var(--primary-color)] flex flex-col items-center ">
        <HRHeroSection/>
        </div>
        <HrWhyChooseUs/>
        <div className="pt-10 flex flex-col items-center w-full">
            <div className="w-full flex flex-col items-center containerDiv" style={{minHeight:'10px'}}>
            <h2 className="font-bold text-[var(--primary-color)]">Features Overview</h2>
            <p className="text-[var(--text-muted)] text-center max-w-6xl" style={{ fontSize: "28px" }}>
                Streamline HR processes with powerful tools designed for efficient workforce management, from attendance tracking to payroll integration and performance analytics.
            </p>
            </div>
        </div>
        <HrFeaturesOverview/>
        <HRShiftRotasScheduling/>
        <HrLeave/>
        <HRExpense/>
        <Connect/>
     
    </main>
  );
}
