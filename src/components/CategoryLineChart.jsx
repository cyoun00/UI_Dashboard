import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

//React Example

export default function CategoryLineChart({data}) {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#000000" />
      <XAxis dataKey="date" stroke="#000000" />
      <YAxis width="auto" stroke="#000000" />
      <Tooltip
        cursor={{
          stroke: '#000000',
        }}
        contentStyle={{
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
        }}
      />
      <Legend />
      <Line
        type="monotone"
        dataKey="Tea"
        stroke="#8884d8"
        dot={{
          fill: '#FFFFFF',
        }}
        activeDot={{ r: 8, stroke: '#8884d8' }}
      />
      <Line
        type="monotone"
        dataKey="Coffee"
        stroke="#82ca9d"
        dot={{
          fill: '#FFFFFF',
        }}
        activeDot={{ stroke: '#82ca9d' }}
      />
      <Line
        type="monotone"
        dataKey="Drinking Chocolate"
        stroke="#ca8298"
        dot={{
          fill: '#FFFFFF',
        }}
        activeDot={{ stroke: '#ca8298' }}
      />
      <RechartsDevtools />
    </LineChart>
  );
}