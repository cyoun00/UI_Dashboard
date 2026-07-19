import {useState} from 'react';
import { ResponsiveContainer, SunburstChart, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useTranslation } from 'react-i18next'

//React Example

export default function VarietySunburstChart( {data}) {
  const { t } = useTranslation()
  const [currentNode, setCurrentNode] = useState(data);
  const [history, setHistory] = useState([]);

  function handleClick(node) {
    if (!node.children) return;

    setHistory(prev => [...prev, currentNode]);
    setCurrentNode(node);
  }

  return (
    <ResponsiveContainer width="100%" height={500}>
       <button className='btn'
          disabled={history.length === 0}
          onClick={() => {
            const previous = history[history.length - 1];
            setCurrentNode(previous);
            setHistory(history.slice(0, -1));
          }}
        >
          {t("sunBtn")}
        </button>
      <SunburstChart startAngle={90} endAngle={360} data={currentNode} onClick={handleClick}>
        <Tooltip />
        <RechartsDevtools />
      </SunburstChart>
    </ResponsiveContainer>
  );
}