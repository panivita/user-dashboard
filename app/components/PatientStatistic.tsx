import { chartConfig, chartData, chartConfigWithTotal } from '../data/chart';
import { ChartAreaLegend } from '../ui/chart-area-legend';
import { ChartBarMixed } from '../ui/chart-bar-mixed';
import { ChartBarMultiple } from '../ui/chart-bar-multiple';
import { ChartPie } from '../ui/chart-pie';

export const MainDiagram = () => {
  return (
    <ChartAreaLegend
      legend={'Patients'}
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
      legend={'Gender'}
      cardDescription={'Showing female and male patients in %'}
      chartConfig={chartConfig}
      chartData={chartDataPie}
      nameKey={'sex'}
      dataKey={'total'}
    />
  );
};

export const DiagramHorizontal = ({ chartDataHorizontal }: { chartDataHorizontal: any }) => {
  return (
    <ChartBarMixed
      legend={'Gender'}
      cardDescription={'Showing total female and male patients'}
      chartConfig={chartConfigWithTotal}
      chartData={chartDataHorizontal}
      nameKey={'sex'}
      dataKey={'total'}
    />
  );
};
