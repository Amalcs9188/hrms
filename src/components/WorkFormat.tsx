import React from "react";
const Data = [
  {
    name: "On Site",
    value: "13,982",
    percentage: "14.4%",
  },
  {
    name: "hibrid",
    value: "15,568",
    percentage: "78.4%",
  },
  {
    name: "Remote",
    value: "15,568",
    percentage: "88.6%",
  },
];
export const WorkFormat = () => {
  return (
    <div className="p-4">
      <div className="font-bold  text-xl  ">Working Format</div>
     <div className="flex flex-col gap-4">
          {Data.map((item, index) => (
            <div
              key={index}
              className={` flex justify-between bg-gradient-to-l from-pink-400/30  via-pink-300/30 to-transparent py-2 rounded-md  items-center`}>
              <span>
                <p className=" text-sm ">{item.name}</p>
                <p className=" font-bold">{item.value}</p>
              </span>
              <span className=" text-orange-600 px-3">{item.percentage}</span>
            </div>
          ))}
     </div>
    </div>
  );
};

