import { ChartConfig } from '../ui/chart';
import { ChartAreaLegend } from '../ui/chart-area-legend';
import { ChartBarMixed } from '../ui/chart-bar-mixed';
import { ChartBarMultiple } from '../ui/chart-bar-multiple';
import { ChartPie } from '../ui/chart-pie';

const chartData = [
  { month: 'January', female: 186, male: 80 },
  { month: 'February', female: 305, male: 200 },
  { month: 'March', female: 237, male: 120 },
  { month: 'April', female: 73, male: 190 },
  { month: 'May', female: 209, male: 130 },
  { month: 'June', female: 214, male: 140 },
];

const chartConfig = {
  female: {
    label: 'Female',
    color: 'var(--chart-1)',
  },
  male: {
    label: 'Male',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export const GenderDiagram1 = () => {
  return (
    <ChartAreaLegend
      legend={'Gender'}
      cardDescription={'Showing total patients for the last 6 months'}
      chartConfig={chartConfig}
      chartData={chartData}
      footerText={'January - June 2025'}
      trendingUp={'Trending up by 5.2% this month'}
      areaDataKey1={'female'}
      areaDataKey2={'male'}
      xDataKey={'month'}
    />
  );
};

export const DiagramMultiple = ({
  chartDataMultiple,
  legend,
  cardDescription,
  xDataKey,
}: {
  chartDataMultiple: any;
  legend: string;
  cardDescription: string;
  xDataKey: string;
}) => {
  return (
    <ChartBarMultiple
      legend={legend}
      cardDescription={cardDescription}
      chartConfig={chartConfig}
      chartData={chartDataMultiple}
      areaDataKey1={'female'}
      areaDataKey2={'male'}
      xDataKey={xDataKey}
    />
  );
};

export const DiagramPie = ({ chartDataPie }: { chartDataPie: any }) => {
  return (
    <ChartPie
      legend={''}
      cardDescription={''}
      chartConfig={chartConfig}
      chartData={chartDataPie}
      nameKey={'sex'}
      dataKey={'total'}
    />
  );
};
