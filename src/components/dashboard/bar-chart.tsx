import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
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

interface BarChartComponentProps {
  data: {
    appliance: string;
    sales: number;
  }[];
  xAxisKey: string;
  yAxisKey: string;
  className?: string;
  title: string;
  description: string;
  labelColor?: string;
  labelFontSize?: number;
}
const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function BarChartComponent({
  data,
  xAxisKey,
  yAxisKey,
  className,
  title,
  description,
  labelColor = "var(--background)",
  labelFontSize = 12,
}: BarChartComponentProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey={yAxisKey}
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey={xAxisKey} type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey={xAxisKey}
              layout="vertical"
              fill={
                chartConfig[xAxisKey as keyof typeof chartConfig]?.color ||
                "#6d28d9"
              }
              radius={4}
            >
              <LabelList
                dataKey={yAxisKey}
                position="insideLeft"
                offset={8}
                className={`fill-[${labelColor}]`}
                fontSize={labelFontSize}
              />
              <LabelList
                dataKey={xAxisKey}
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={labelFontSize}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing the sales data for appliances
        </div>
      </CardFooter>
    </Card>
  );
}
