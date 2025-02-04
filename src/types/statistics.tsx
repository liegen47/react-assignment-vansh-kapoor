export type DefaultData = {
  name: string;
  value: number;
}[];

export type ChartData = {
  radialChart: DefaultData;
  pieChart: DefaultData;
  areaChart: {
    month: string;
    sales: number;
  }[];
  barChart: {
    appliance: string;
    sales: number;
  }[];
};

export type UserStats = {
  totalUsers: number;
  usersWithSubscription: number;
  chartData: ChartData;
};
