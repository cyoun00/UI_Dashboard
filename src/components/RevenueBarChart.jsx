import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

//React Example

function removeTrailingDec(number){
  const decimal = number.split(".");
  let answer = number;
  if (decimal[1].length > 2){
    answer = decimal[0] + decimal[1].substring(0,1);
  }
  else{
    return answer;
  }
}

export default function RevenueBarChart({data}) {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '100%', height: '100%', maxHeight: '50%', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 70,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="type" angle={-30} textAnchor="end" interval={0} />
      <YAxis width="auto" />
      <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, "Revenue"]}/>
      <Legend verticalAlign="top" align="right"/>
        <Bar
          dataKey="revenue"
          name = "Revenue ($USD)"
          fill="#8884d8"
        />
      <RechartsDevtools />
    </BarChart>
  );
}