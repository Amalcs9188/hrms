import { BiChevronDown } from "react-icons/bi";
import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

import MyBarChart from "./Chart";
import HeroSIde from "./HeroSIde";

const Data = [
  {
    avtImg: "https://img.freepik.com/premium-photo/ai-human-avatar-characters-male-model_1166271-38.jpg?w=2000",
    name: "Sanford Richard",
    score: 344,
  },
  {
    avtImg:
      "https://img.freepik.com/premium-photo/ultra-realistic-human-avatar-characters-female-model_1166271-61.jpg?w=2000",
    name: "Richard Aniston",
    score: 256,
  },
  {
    avtImg:
      "https://img.freepik.com/premium-photo/human-male-avatar_930095-1312.jpg",
    name: "mikhael",
    score: 158,
  },
  {
    avtImg:
      "https://tse1.explicit.bing.net/th/id/OIP.jAldVHFgDr1i7jJ2wWW6_wHaLH?r=0&w=996&h=1494&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "John Doe",
    score: 485,
  },
];

const Hero = () => {
  return (
    <div className="">
      <Card>
        <CardTitle className="px-4 flex items-center text-xl justify-between">
          Avarege Api Score{" "}
          <span>
            <Button className="flex items-center gap-3 " variant="outline">
              Past 3 Months
              <BiChevronDown />
            </Button>
          </span>
        </CardTitle>
        <CardContent className="px-4 grid grid-cols-10">
          <div className="col-span-7 px-2">
            <h1 className="mb-6 text-xl font-bold">63%</h1>
            <MyBarChart />
          </div>
          < HeroSIde Data={Data}/>
        </CardContent>
      </Card>
    </div>
  );
};

export default Hero;
