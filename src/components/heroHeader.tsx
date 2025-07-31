import { Card, CardContent } from "./ui/card"
import { IconType } from "react-icons"

interface DataItem {
  label: string
  value: string
  icon: IconType
}

interface HeroHeaderProps {
  data: DataItem[]
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({ data }) => {
  return (
    
        <Card >
          <CardContent className="flex justify-between">
            {data.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">
                <span className="rounded-full p-2 bg-amber-50 border-2 border-amber-100">
                  <item.icon className="text-2xl text-orange-700" />
                </span>
                <span className=" font-normal">
                  <h4 className="text-gray-950">{item.label}</h4>
                  <h1 className="text-lg font-bold">{item.value}</h1>
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
   
  )
}
