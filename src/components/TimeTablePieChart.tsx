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

const getTimetableData = async () => {
  const res = await fetch("http://localhost:8000/timetable");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

type Props = { name: ""; value: ""; color: "" };

export default async function TimeTablePieChart() {
  const pieTimeTableData: Props[] = await getTimetableData();

  return (
    <div className="">
      <ResponsiveContainer width={"100%"} height={200}>
        <PieChart width={400} height={200}>
          <Tooltip
            contentStyle={{ background: "white", borderRadius: "5px" }}
          />
          <Pie
            data={pieTimeTableData}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {pieTimeTableData.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="">
        {pieTimeTableData.map((item) => (
          <div className="flex " key={item.name}>
            <span>{item.name}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
