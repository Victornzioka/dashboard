import { CardContent } from "@/components/Card";
import CreateButton from "@/components/CreateButton";
import React from "react";

const getData = async () => {
  const res = await fetch(
    "https://json-server-data-wy7t.onrender.com/schools?_embed=invoices"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const getInvoiceData = async () => {
  const res = await fetch(
    "https://json-server-data-wy7t.onrender.com/invoices"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

// type Props = {
//   searchParams: { [key: string]: string | string[] | undefined };
// };

const School = async ({ searchParams }) => {
  const id = searchParams.id;

  const items = await getData();
  const school = await items.find((item) => item.id === id);
  const school_invoices = school.invoices;

  const keys = Object.keys(school_invoices);
  // console.log(typeof keys);
  console.log(keys.map((i) => keys[i]));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <CardContent>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-bold">School Name:</td>
            <td className="px-6 py-4 ">{school.name}</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-bold"> Type:</td>
            <td className="px-6 py-4">{school.type}</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-bold">Product:</td>
            <td className="px-6 py-4">{school.product}</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-bold">County:</td>
            <td className="px-6 py-4">{school.county}</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-bold">Registration Date:</td>
            <td className="px-6 py-4">{school.registrationDate}</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-bold">Contact Info:</td>
            <td className="px-6 py-4">{school.contactInfo}</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-bold">School Balance:</td>
            <td className="px-6 py-4">{school.schoolBalance}</td>
          </tr>
        </table>
      </CardContent>
      <CardContent>
        <p>Current Invoices</p>

        {keys.map((i, index) => (
          <div key={index}>
            <h1>{keys[i].name}</h1>
            <hr />

            <div className="flex flex-wrap gap-5 border-2 border-black rounded-md p-2">
              <div className="">
                <p className="text-gray-500 ">Invoice No.</p>
                <hr />
                <p className="text-gray-500 ">
                  {school_invoices[0].invoiceNumber}
                </p>
              </div>
              <div className="">
                <p className="text-gray-500 ">Product</p>
                <hr />
                <p className="text-gray-500 ">{school_invoices[0].product}</p>
              </div>
              <div className="">
                <p className="text-gray-500 ">Amount Due</p>
                <hr />
                <p className="text-gray-500 ">{school_invoices[0].amountDue}</p>
              </div>
              <div className="">
                <p className="text-gray-500 ">Balance</p>
                <hr />
                <p className="text-gray-500 ">{school_invoices[0].balance}</p>
              </div>
              <div className="">
                <p className="text-gray-500 ">Due Date</p>
                <hr />
                <p className="text-gray-500 ">{school_invoices[0].dueDate}</p>
              </div>
              <div className="">
                <p className="text-gray-500 ">Status</p>
                <hr />
                <p className="text-gray-500 ">{school_invoices[0].status}</p>
              </div>
            </div>
          </div>
        ))}

        {keys.length == 0 && <div className="">No Invoices to show</div>}

        <CreateButton />
      </CardContent>
    </div>
  );
};

export default School;
