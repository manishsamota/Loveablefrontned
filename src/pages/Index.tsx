import EthicsNotice from "@/components/EthicsNotice";
import AcademicProgressCard from "@/components/AcademicProgressCard";
import SportsProgressCard from "@/components/SportsProgressCard";
import ArtsProgressCard from "@/components/ArtsProgressCard";
import AnalyticsCard from "@/components/AnalyticsCard";
import StreakCalendar from "@/components/StreakCalendar";

const Index = () => {
  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-5">
      <EthicsNotice />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
        <AcademicProgressCard />
        <AnalyticsCard />
        <SportsProgressCard />
        <ArtsProgressCard />
      </div>
      
      <StreakCalendar />
    </div>
  );
};

export default Index;
