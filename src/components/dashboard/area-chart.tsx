"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
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

interface AreaChartComponentProps {
  className?: string;
  data: { [key: string]: any }[];
  dataKey: string;
  nameKey: string;
  title: string;
  description: string;
  labelColor?: string;
}
const chartConfig = {
  sales: {
    label: "Sales",
    color: "#7c3aed",
  },
} satisfies ChartConfig;

export function AreaChartComponent({
  className,
  data,
  dataKey,
  nameKey,
  title,
  description,
  labelColor = "var(--foreground)",
}: AreaChartComponentProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={nameKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey={dataKey}
              type="natural"
              fill={
                chartConfig[dataKey as keyof typeof chartConfig]?.color ||
                "gray"
              }
              fillOpacity={0.4}
              stroke={
                chartConfig[dataKey as keyof typeof chartConfig]?.color ||
                "gray"
              }
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing sales data for the last 12 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
