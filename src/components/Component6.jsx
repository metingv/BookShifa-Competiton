
import '../styles/Component6.scss';
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function Component6() {
    const data = [
        {
          name: "mon",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "tue",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "wed",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "thu",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "fri",
          uv: 1890,
          pv: 4800,
          amt: 2181
        },
        {
          name: "sat",
          uv: 2390,
          pv: 3800,
          amt: 2500
        },
        {
          name: "sun",
          uv: 3490,
          pv: 4300,
          amt: 2100
        }
      ];
  return (
    <>
      <div className="Component6">
      <div className='title'>Your Statics</div>
      <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 00" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#000"
        activeDot={{ r: 8 }}
      />
   
    </LineChart>

      </div>
    </>
  );
}

export default Component6;
