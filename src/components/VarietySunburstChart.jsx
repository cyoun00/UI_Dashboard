import { ResponsiveContainer, SunburstChart, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

//React Example

export default function VarietySunburstChart( {data}) {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <SunburstChart startAngle={90} endAngle={360} data={data}>
        <Tooltip />
        <RechartsDevtools />
      </SunburstChart>
    </ResponsiveContainer>
  );
}