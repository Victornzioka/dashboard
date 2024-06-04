/** @format */

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const getFinanceData = async () => {
  const res = await fetch("http://localhost:8000/finance");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

type Props = { name: ""; value: ""; color: "" };

export default async function FinancePieChart() {
  const pieFinanceData: Props[] = await getFinanceData();

  return (
    <div className="">
      <ResponsiveContainer width={"100%"} height={200}>
        <PieChart width={400} height={200}>
          <Tooltip
            contentStyle={{ background: "white", borderRadius: "5px" }}
          />
          <Pie
            data={pieFinanceData}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {pieFinanceData.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="">
        {pieFinanceData.map((item) => (
          <div className="flex " key={item.name}>
            <span>{item.name}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
