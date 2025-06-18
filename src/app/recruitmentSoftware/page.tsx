import RecruitmentConnect from "./connext";
import RecruitmentExpense from "./expence";
import RecruitmentFeaturesOverview from "./hrFeaturesOverview";
import RecruitmentHeroSection from "./hrHero";
import RecruitmentShiftRotasScheduling from "./hrShiftRotasScheduling";
import RecruitmentWhyChooseUs from "./hrWhyUs";
import RecruitmentLeave from "./leave";


export default function RecruitmentSoftware() {
  return (
    <main className="flex flex-col gap-6" >
        <div className="bg-[var(--primary-color)] flex flex-col items-center ">
        <RecruitmentHeroSection/>
        </div>
        <RecruitmentWhyChooseUs/>
        <div className="pt-10 flex flex-col items-center w-full">
            <div className="w-full flex flex-col items-center containerDiv" style={{minHeight:'10px'}}>
            <h2 className="font-bold text-[var(--primary-color)]">Features Overview</h2>
            <p className="text-[var(--text-muted)] text-center max-w-6xl" style={{ fontSize: "28px" }}>
                Our Recruitment Software streamlines the entire hiring process  from job posting to interviewing and onboarding supporting both full-time and temporary roles for a seamless experience.
            </p>
            </div>
        </div>
        <RecruitmentFeaturesOverview/>
        <RecruitmentShiftRotasScheduling/>
        <RecruitmentLeave/>
        <RecruitmentExpense/>
        <RecruitmentConnect/>
     
    </main>
  );
}
