"use client";
import dynamic from "next/dynamic";

import Header from "../components/Header";

import Card, { CardContent, CardProps, SignupProps } from "../components/Card";
import BarChart from "@/components/BarChart";
import AnalyticsPieChart from "@/components/AnalyticsPieChart";
import { Button } from "../components/ui/button";
import SignupCards from "../components/SignupCards";
import TimeTablePieChart from "@/components/TimeTablePieChart";
import FinancePieChart from "@/components/FinancePieChart";
import UpcomingInvoicesTable from "@/components/UpcomingInvoicesTable";
import TopCard from "@/components/TopCard";
// import { useState } from "react";
import ManageCollection from "@/components/ManageCollection";

export type SalesProps = {
  name: string;
  dueDate: string;
  amountDue: string;
  quickActions: string;
};

const signUpsData: SignupProps[] = [
  { label: "Total SignUps", amount: "328" },
  { label: "Zeraki Analytics", amount: "328" },
  { label: "Zeraki Finance", amount: "328" },
  { label: "Zeraki Timetable", amount: "328" },
];

export default function Home() {
  // const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-5  w-full">
      <Header title="Dashboard" />
      <TopCard />
      <Header title="Overview" />
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <CardContent>
            <p className="px-4 font-semibold text-sm">Zeraki Analytics</p>
            <p className="text-xs text-gray-500 px-4">
              Distribution of Sign Ups
            </p>
            <hr />
            <BarChart />
          </CardContent>
          <CardContent>
            <p className="px-4 font-semibold text-sm">Zeraki Finance</p>
            <p className="text-xs text-gray-500 px-4">
              Distribution of Sign Ups
            </p>
            <hr />
            <BarChart />
          </CardContent>
          <CardContent>
            <p className="px-4 font-semibold text-sm">Zeraki TimeTable</p>
            <p className="text-xs text-gray-500 px-4">
              Distribution of Sign Ups
            </p>
            <hr />
            <BarChart />
          </CardContent>
        </div>

        <CardContent className="flex justify-between gap-4">
          <section>
            <div className="flex justify-between flex-wrap gap-3">
              <div className="">
                <p>Upcoming Invoices</p>
                <p className="text-sm text-gray-400">
                  You have 50 Upcoming this month.
                </p>
              </div>
              <div className="">
                <Button onClick={() => {}}>Make Collection</Button>
              </div>
            </div>
          </section>

          <UpcomingInvoicesTable />
        </CardContent>
      </section>
      <hr />
      <Header title="Distribution of Sign Ups" />

      <section className="grid grid-cols-1  gap-4 transition-all md:grid-cols-2 xl:grid-cols-4">
        <CardContent>
          <p className="p-4 font-semibold">Sign Ups Details per Product</p>
          <div className="grid grid-cols-2 gap-2">
            {signUpsData.map((d, i) => (
              <SignupCards key={i} amount={d.amount} label={d.label} />
            ))}
          </div>
        </CardContent>
        <CardContent>
          <p className="p-4 font-semibold">Zeraki Analytics Progress Map</p>

          <AnalyticsPieChart />
        </CardContent>
        <CardContent>
          <p className="p-4 font-semibold">Zeraki Finance Progress Map</p>

          <FinancePieChart />
        </CardContent>
        <CardContent>
          <p className="p-4 font-semibold">Zeraki Timetable Progress Map</p>

          <TimeTablePieChart />
        </CardContent>
      </section>

      {/* {open && <ManageCollection />} */}
    </div>
  );
}
