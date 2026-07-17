import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

//React Example

export default function RevenueBarChart({data}) {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="type" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
        <Bar
          dataKey="revenue"
          fill="#8884d8"
        />
      <RechartsDevtools />
    </BarChart>
  );
}