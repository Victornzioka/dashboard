import React from "react";
import Card, { CardContent, CardProps } from "./Card";

const getCardData = async () => {
  const res = await fetch("https://json-server-data-wy7t.onrender.com/cards");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const TopCard = async () => {
  const cardData: CardProps[] = await getCardData();

  return (
    <CardContent>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            label={d.label}
          />
        ))}
      </section>
    </CardContent>
  );
};

export default TopCard;
