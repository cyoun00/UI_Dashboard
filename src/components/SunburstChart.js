import { ResponsiveContainer, SunburstChart, SunburstData, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

//React Example

export default function SunburstChart() {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <SunburstChart startAngle={90} endAngle={270} data={hierarchy}>
        <Tooltip />
        <RechartsDevtools />
      </SunburstChart>
    </ResponsiveContainer>
  );
}