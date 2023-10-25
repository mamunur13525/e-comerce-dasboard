import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Jan",
    pv: 5000,
  },
  {
    name: "Feb",
    pv: 15098,
  },
  {
    name: "Mar",
    pv: 5000,
  },
  {
    name: "Apr",
    pv: 25000,
  },
  {
    name: "May",
    pv: 15000,
  },
  {
    name: "Jun",
    pv: 8000,
  },
  {
    name: "July",
    pv: 23000,
  },
  {
    name: "Aug",
    pv: 4300,
  },
  {
    name: "Sep",
    pv: 6577,
  },
  {
    name: "Oct",
    pv: 20000,
  },
  {
    name: "Nov",
    pv: 20549,
  },
  {
    name: "Dec",
    pv: 18699,
  }
];

export default function BarCharts() {

  return (
    <div className="text-[12px]">
      <ResponsiveContainer width='100%' height={300}>
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }}
        >
          <XAxis dataKey="name" />
          <YAxis
            domain={[1000, 25000]}
            tickCount={7}
            type="number"
            stroke="#919191"
          />
          <Tooltip  cursor={false}/>
          <Bar
         
            barSize={20}
            dataKey="pv"
            fill="#00AA00"
            width={13}
            radius={[15, 15, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>

  );
}
