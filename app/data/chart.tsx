import { ChartConfig } from '../ui/chart';

export const chartData = [
  { month: 'January', female: 186, male: 80 },
  { month: 'February', female: 305, male: 200 },
  { month: 'March', female: 237, male: 120 },
  { month: 'April', female: 73, male: 190 },
  { month: 'May', female: 209, male: 130 },
  { month: 'June', female: 214, male: 140 },
];

export const chartConfig = {
  female: {
    label: 'Female',
    color: 'var(--chart-1)',
  },
  male: {
    label: 'Male',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export const chartConfigWithTotal = {
  total: {
    label: 'Total',
    color: 'var(--chart-2)',
  },
  female: {
    label: 'Female',
    color: 'var(--chart-1)',
  },
  male: {
    label: 'Male',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig;
