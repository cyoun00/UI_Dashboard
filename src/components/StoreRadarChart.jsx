import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

//React Example

export default function StoreRadarChart({data}) {
  return (
    <RadarChart
      style={{ width: '100%', maxWidth: '80vw', maxHeight: '80vh', aspectRatio: 1 }}
      responsive
      outerRadius="80%"
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Astoria" dataKey="Astoria" stroke="#ca8298" fill="#ca8298" fillOpacity={0.6} />
      <Radar name="Hell's Kitchen" dataKey="Hell's Kitchen" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Lower Manhattan" dataKey="Lower Manhattan" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/> 
      <Legend />
      <RechartsDevtools />
    </RadarChart>
  );
}
