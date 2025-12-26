'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '../ui/chart';
import { ChartProps } from './chart-area-legend';

export const description = 'A multiple bar chart';


export function ChartBarMultiple({legend,
    cardDescription,
    chartConfig,
    chartData,
    areaDataKey1,
    areaDataKey2,
    xDataKey,}: ChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{legend}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xDataKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='dashed' />} />
            <Bar dataKey={areaDataKey1} fill='var(--color-female)' radius={4} />
            <Bar dataKey={areaDataKey2} fill='var(--color-male)' radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
