import React from "react";
import { Card } from "./ui/card";
import { DataTable } from "./data-table";
import { columns } from "./column";

const data = [
 { id: 1,
  name: "John Doe",
  role: "no job",
  performance: 40 },
 { id: 1,
  name: "Amal CS",
  role: "no job",
  performance: 60 },
 { id: 2,
  name: "Mikhael Doe",
  role: "It manager",
  performance: 30 },
 { id: 1,
  name: "Alex Doe",
  role: "CEO",
  performance: 80 },
];

const Employees = () => {
  return (
    <Card className="p-4 ">
      <h1 className="font-bold text-xl">Employees</h1>
      <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
    </Card>
  );
};

export default Employees;
