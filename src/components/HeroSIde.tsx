import Badge from '@mui/material/Badge'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface HeroSIdeProps {
    avtImg: string;
    name: string;
    score: number;
  }

const HeroSIde: React.FC<{Data:HeroSIdeProps[]}> = ({Data}) => {
  return (
    <div className="col-span-3 p-5 bg-amber-50/90 rounded-2xl">
            <h1 className="text-gray-950 font-bold text-start">
              Top Perfomance
            </h1>
            <div className="flex gap-5 items-start py-6 flex-col">
              {Data.map((item, index) => (
                <div key={index} className=" flex gap-3 items-center">
                  <Badge
                    badgeContent={4}
                    slotProps={{
                      badge: {
                        className:
                          "bg-black text-white border-2 border-white m-1 scale-75",
                      },
                    }}>
                    <Avatar className="scale-125">
                      <AvatarImage src={item.avtImg} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </Badge>
                  <div>
                    <h1 className="text-gray-900 text-sm font-bold">
                      {item.name}
                    </h1>
                    <h1 className="text-gray-950 text-xs">
                      {item.score} Task Completed
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
}

export default HeroSIde