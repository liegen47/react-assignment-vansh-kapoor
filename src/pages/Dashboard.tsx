import PageContainer from "@/components/layouts/page-container";
import { useEffect, useState } from "react";
import axios from "axios";
import { StatCard } from "@/components/dashboard/stats-card";
import { UserStats } from "@/types/statistics";
import { Banknote, User2 } from "lucide-react";
import { BarChartComponent } from "@/components/dashboard/bar-chart";
import { AreaChartComponent } from "@/components/dashboard/area-chart";
import { PieChartComponent } from "@/components/dashboard/pie-chart";
import RadialChart from "@/components/dashboard/radial-chart";
const Dashboard = () => {
  const [statistics, setStatistics] = useState<UserStats>();

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/c/582b-09a0-49ba-9cd2"
        );
        setStatistics(response.data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <PageContainer>
      <div className="flex flex-1 flex-col space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
        </div>
        <div className="sm:grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 md:col-span-1">
            <StatCard
              title="Total Users"
              value={statistics?.totalUsers}
              icon={<User2 />}
              description="Total number of users"
            />
            <StatCard
              title="Total Users with Subscription"
              value={statistics?.usersWithSubscription}
              icon={<Banknote />}
              description="Total number of users with subscription"
            />
            <PieChartComponent
              data={statistics?.chartData?.pieChart || []}
              dataKey="value"
              nameKey="name"
              title="Plan Distribution"
              description="Distribution of user subscriptions across different plans"
            />
          </div>
          <div className="my-4 sm:my-0 flex flex-col gap-4 md:col-span-1">
            <BarChartComponent
              data={statistics?.chartData?.barChart || []}
              xAxisKey="sales"
              yAxisKey="appliance"
              title="Appliance Sales"
              description="Sales data for various appliances in 2024"
            />
            <RadialChart data={statistics?.chartData?.radialChart || []} />
          </div>
          <div className="col-span-2 w-full">
            <AreaChartComponent
              data={statistics?.chartData?.areaChart || []}
              dataKey="sales"
              nameKey="month"
              title="Monthly Sales"
              description="Sales data from January to December 2024"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Dashboard;
