import {useState} from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useTranslation } from 'react-i18next'

//React Example

export default function StoreRadarChart({data}) {
  const { t } = useTranslation()
  const [visible, setVisible] = useState("all");

  const axisKeys = {
    Coffee: "coffee",
    Tea: "tea",
    "Drinking Chocolate": "drinkingChocolate"
  };

  const handleLegendClick = (entry) => {
    setVisible(entry.value);
  };

  return (
    <div>
      <button className='btn' onClick={()=>setVisible("all")}>{t("radarBtn")}</button>
    <RadarChart
      style={{ width: '100%', maxWidth: '70vw', maxHeight: '70vh', aspectRatio: 1}}
      responsive
      outerRadius="80%"
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="name" tickFormatter={(value) => t(axisKeys[value] || value)}/>
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      {(visible === "all"||visible === "Astoria")&&
        <Radar name="Astoria" dataKey="Astoria" stroke="#ca8298" fill="#ca8298" fillOpacity={0.5} />
      }
      {(visible === "all"||visible === "Hell's Kitchen")&&
        <Radar name="Hell's Kitchen" dataKey="Hell's Kitchen" stroke="#8884d8" fill="#8884d8" fillOpacity={0.5} />
      }
      {(visible === "all"||visible === "Lower Manhattan")&&
        <Radar name="Lower Manhattan" dataKey="Lower Manhattan" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.5}/> 
      }
      <Legend onClick={handleLegendClick} verticalAlign="top"/>
      <Tooltip labelFormatter = {(label) => t(axisKeys[label] || label)}/>
      <RechartsDevtools />
    </RadarChart>
    </div>
  );
}
