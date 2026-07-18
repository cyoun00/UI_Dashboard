import {useState} from 'react';
import { ResponsiveContainer, SunburstChart, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

//React Example

export default function VarietySunburstChart( {data}) {
  const [currentNode, setCurrentNode] = useState(data);
  const [history, setHistory] = useState([]);

  function handleClick(node) {
    if (!node.children) return;

    setHistory(prev => [...prev, currentNode]);
    setCurrentNode(node);
  }

  return (
    <ResponsiveContainer width="100%" height={600}>
       <button
          disabled={history.length === 0}
          onClick={() => {
            const previous = history[history.length - 1];
            setCurrentNode(previous);
            setHistory(history.slice(0, -1));
          }}
        >
          Back
        </button>
      <SunburstChart startAngle={90} endAngle={360} data={currentNode} onClick={handleClick}>
        <Tooltip />
        <RechartsDevtools />
      </SunburstChart>
    </ResponsiveContainer>
  );
}