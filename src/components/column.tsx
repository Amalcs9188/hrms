"use client";

import Stack from "@mui/material/Stack";
import { ColumnDef } from "@tanstack/react-table";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { FaEllipsisH } from "react-icons/fa";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width:'50%',
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {

    borderRadius: 5,
    backgroundColor: 'rgba(99, 10, 56, 0.8)',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number;
  name: string;
  role: string;
  performance: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "performance",
    header: "Performance",
    cell: ({ row }) => {
      const performance = row.getValue("performance");
      return (
        <div>
          <Stack  spacing={2} sx={{ flexGrow: 3 }} >
            <BorderLinearProgress variant="determinate" value={Number(performance)} />
          </Stack>
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: "",
    cell: ({ row }) => {
      const id = row.getValue("id");
      return (
        <div>
         <FaEllipsisH onClick={() => console.log(id)}/>
        </div>
      );
    }
  }
];
