/** @format */

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardProps } from "./Card";

export type SignupProps = {
  label: string;
  amount: string;
};

export const getCardData = async () => {
  const res = await fetch("http://localhost:8000/cards");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function SignupCards(props: SignupProps) {
  const cardData: CardProps[] = await getCardData();

  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        {/* label */}
        <p className="text-sm">{props.label}</p>
        {/* icon */}
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
    />
  );
}
