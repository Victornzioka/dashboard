import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { DataTable } from "./DataTable";

export type SalesProps = {
  name: string;
  dueDate: string;
  amountDue: string;
  quickActions: string;
};

export const columns: ColumnDef<SalesProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "amountDue",
    header: "AmountDue",
  },
  {
    accessorKey: "dueDate",
    header: "DueDate",
  },
  {
    accessorKey: "quickActions",
    header: "QuickActions",
  },
];

const getUpcomingInvoicesData = async () => {
  const res = await fetch("http://localhost:8000/invoices");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const UpcomingInvoicesTable = async () => {
  const invoicesData: SalesProps[] = await getUpcomingInvoicesData();

  const latestData = invoicesData.sort(
    (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  );
  return (
    <div>
      <DataTable columns={columns} data={latestData} />
    </div>
  );
};

export default UpcomingInvoicesTable;
