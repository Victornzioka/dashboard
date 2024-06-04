import { CardContent } from "@/components/Card";
import { log } from "console";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:8000/schools");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export type SchoolProps = {
  id: string;
  name: string;
  type: string;
  product: string;
  county: string;
  registrationDate: string;
  contactInfo: string;
  schoolBalance: string;
};

const page = async () => {
  const schools: SchoolProps[] = await getData();
  return (
    <div>
      <CardContent>
        <p className="p-4 font-semibold">Schools Enrolled</p>
        <hr />
        {schools.map((item) => (
          <Link
            href={{ pathname: "/school", query: { id: item.id } }}
            key={item.id}
          >
            {item.name}
          </Link>
        ))}
      </CardContent>
    </div>
  );
};

export default page;
