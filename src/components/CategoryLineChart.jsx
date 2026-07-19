import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useTranslation } from 'react-i18next';

//React Example

export default function CategoryLineChart({data}) {
  const {t} = useTranslation();
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '100%', height: '100%', maxHeight: '45vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 5,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#000000" />
      <XAxis dataKey="date" stroke="#000000" tickFormatter={(value) =>
            new Date(value).toLocaleDateString("en-CA", {
              year: "numeric",
              month: "numeric",
              day: "2-digit",
              
            })
          }/>
      <YAxis width="auto" stroke="#000000" />
      <Tooltip
        cursor={{
          stroke: '#000000',
        }}
        contentStyle={{
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
        }}
        labelFormatter={(label) =>
            new Date(label).toLocaleDateString("en-CA", {
              year: "numeric",
              month: "numeric",
              day: "2-digit",
              
            })
          }
      />
      <Line
        type="monotone"
        dataKey="Tea"
        name = {t("tea")}
        stroke="#8884d8"
        dot={{
          fill: '#FFFFFF',
        }}
        activeDot={{ r: 8, stroke: '#8884d8' }}
      />
      <Line
        type="monotone"
        dataKey="Coffee"
        name = {t("coffee")}
        stroke="#82ca9d"
        dot={{
          fill: '#FFFFFF',
        }}
        activeDot={{ stroke: '#82ca9d' }}
      />
      <Line
        type="monotone"
        dataKey="Drinking Chocolate"
        name = {t("drinkingChocolate")}
        stroke="#ca8298"
        dot={{
          fill: '#FFFFFF',
        }}
        activeDot={{ stroke: '#ca8298' }}
      />

      <Brush
          dataKey="date"
          height={30}
          stroke="rgb(46, 139, 87)"
          fill="#eef2ff"
          travellerWidth={12}
          tickFormatter={(value) =>
            new Date(value).toLocaleDateString("en-CA", {
              year: "numeric",
              month: "numeric",
              day: "2-digit",
              
            })
          }
        />
        <Legend verticalAlign='top'/>
      <RechartsDevtools />
    </LineChart>
  );
}