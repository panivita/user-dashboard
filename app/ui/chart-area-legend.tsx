'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '../ui/chart';

export const description = 'An area chart with a legend';

export type ChartProps = {
  legend: string;
  cardDescription: string;
  chartConfig: ChartConfig;
  chartData: any[];
  footerText?: string;
  trendingUp?: string;
  areaDataKey1: string;
  areaDataKey2: string;
  xDataKey: string;
};

export function ChartAreaLegend({
  legend,
  cardDescription,
  chartConfig,
  chartData,
  footerText,
  trendingUp,
  areaDataKey1,
  areaDataKey2,
  xDataKey,
}: ChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{legend}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xDataKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='line' />} />
            <Area
              dataKey={areaDataKey1}
              type='natural'
              fill='var(--color-female)'
              fillOpacity={0.4}
              stroke='var(--color-female)'
              stackId='a'
            />
            <Area
              dataKey={areaDataKey2}
              type='natural'
              fill='var(--color-male)'
              fillOpacity={0.4}
              stroke='var(--color-male)'
              stackId='a'
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className='flex w-full items-start gap-2 text-sm'>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2 leading-none font-medium'>
              {trendingUp} <TrendingUp className='h-4 w-4' />
            </div>
            {footerText && (
              <div className='text-muted-foreground flex items-center gap-2 leading-none'>{footerText}</div>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
