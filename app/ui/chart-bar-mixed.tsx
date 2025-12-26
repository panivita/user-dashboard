"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"
import { ChartPieProps } from './chart-pie'

export const description = "A mixed bar chart"


export function ChartBarMixed({ legend, cardDescription, chartConfig, chartData, nameKey, dataKey }: ChartPieProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{legend}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey={nameKey}
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey={dataKey} type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={dataKey} layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
