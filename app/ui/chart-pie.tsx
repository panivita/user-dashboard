'use client';

import { Pie, PieChart } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '../ui/chart';

export const description = 'A simple pie chart';

export type ChartPieProps = {
  legend: string;
  cardDescription: string;
  chartConfig: ChartConfig;
  chartData: any[];
  nameKey: string;
  dataKey: string;
};

export function ChartPie({ legend, cardDescription, chartConfig, chartData, nameKey, dataKey }: ChartPieProps) {
  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>{legend}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer config={chartConfig} className='mx-auto aspect-square max-h-[200px]'>
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey={dataKey} nameKey={nameKey} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
