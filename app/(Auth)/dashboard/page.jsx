import { Calender } from "./_components/Calender";
import DashBoardProvider from "./_components/DashBoardProvider";
import DashboardHeader from "./_components/DashboardHeader";

export default function DashboardPage() {
  return (
    <DashBoardProvider>
        <DashboardHeader />
        <Calender />
    </DashBoardProvider>
  );
}
