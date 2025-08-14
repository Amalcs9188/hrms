"use client";
import { FaWpforms } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";

import React from "react";
import { HeroHeader } from "./../../components/heroHeader";
import TimeLIne from './../../components/TimeLIne';
import Hero from "@/components/Hero";
import Chart from "@/components/Chart";
import Employees from "@/components/Employees";
import { WorkFormat } from "@/components/WorkFormat";


const data = [
  {
    label: "Total Employees",
    value: "15,2445",
    icon: HiUserGroup,
  },
  {
    label: "Projects",
    value: "12,5445",
    icon: AiOutlineFundProjectionScreen,
  },
  {
    label: "Job Applicants",
    value: "7545",
    icon: FaWpforms,
  },
];

const page = () => {
  return (
    <div className="grid py-4  grid-cols-10">
      <div className="col-span-7 flex gap-4 flex-col">
        <HeroHeader data={data} />
        <Hero />
        <Employees />
      </div>
      <div className="col-span-3 space-y-2 overflow-hidden ps-5">
        <TimeLIne />
        <WorkFormat />
      </div>
    </div>
  );
};

export default page;
