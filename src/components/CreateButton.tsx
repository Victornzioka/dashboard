"use client";

import React, { useState } from "react";
import ManageCollection from "./ManageCollection";

const CreateButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-black text-white p-4 rounded-md"
      >
        Create an Invoice
      </button>
      {open && <ManageCollection />}
    </div>
  );
};

export default CreateButton;
