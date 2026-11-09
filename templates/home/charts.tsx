"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartConfig = {
  monthValue: {
    label: "Value:",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

interface iChartBarDefault {
  month: string;
  monthValue: number;
}

interface iChartBarDefaultProps {
  chartData: iChartBarDefault[];
}

export const ChartBarDefault = ({ chartData }: iChartBarDefaultProps) => {
  const firstMonth = chartData[chartData.length - 1].month;
  const lastMonth = chartData[0].month;

  return (
    <Card className="w-full min-w-0">
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>
          {firstMonth} - {lastMonth} 2026
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="monthValue" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};
