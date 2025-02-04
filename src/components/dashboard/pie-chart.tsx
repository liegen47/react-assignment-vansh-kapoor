"use client";

import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface PieChartComponentProps {
  data: { [key: string]: any }[];
  dataKey: string;
  nameKey: string;
  title: string;
  description: string;
  labelColor?: string;
}
const chartConfig = {
  Basic: {
    label: "Basic Plan",
    color: "hsl(var(--chart-1))",
  },
  Standard: {
    label: "Standard Plan",
    color: "hsl(var(--chart-2))",
  },
  Premium: {
    label: "Premium Plan",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function PieChartComponent({
  data,
  dataKey,
  nameKey,
  title,
  description,
  labelColor = "var(--foreground)",
}: PieChartComponentProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={data} dataKey={dataKey} label nameKey={nameKey} />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing the distribution of various plans
        </div>
      </CardFooter>
    </Card>
  );
}
