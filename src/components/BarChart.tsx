/** @format */

import React from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

type Props = {};

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export default function BarChart({}: Props) {
  return (
    <div className="">
      <ResponsiveContainer width={"70%"} height={150}>
        <BarGraph data={data}>
          <Tooltip />
          <XAxis
            dataKey={"name"}
            tickLine={false}
            axisLine={false}
            stroke="#888888"
            fontSize={12}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            stroke="#888888"
            fontSize={12}
            tickFormatter={(value) => `$${value}`}
          />
          <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
        </BarGraph>
      </ResponsiveContainer>
    </div>
  );
}
