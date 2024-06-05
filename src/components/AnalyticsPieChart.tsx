/** @format */

import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const getAnalyticsData = async () => {
  const res = await fetch(
    "https://json-server-data-wy7t.onrender.com/analytics"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

type Props = { name: ""; value: ""; color: "" };

export default async function AnalyticsPieChart() {
  const pieAnalyticsData: Props[] = await getAnalyticsData();

  return (
    <div className="">
      <ResponsiveContainer width={"100%"} height={200}>
        <PieChart width={400} height={200}>
          <Tooltip
            contentStyle={{ background: "white", borderRadius: "5px" }}
          />
          <Pie
            data={pieAnalyticsData}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {pieAnalyticsData.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="">
        {pieAnalyticsData.map((item) => (
          <div className="flex " key={item.name}>
            <span>{item.name}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
