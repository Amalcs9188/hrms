import { BiChevronDown } from "react-icons/bi"; 


import avatar from '../../public/[CITYPNG.COM]HD Man User Illustration Icon Transparent PNG - 1000x1000.png';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";


const Header = () => {
  return (
    <div className=" flex justify-between ">
      <div className="text-4xl py-3 protest-guerrilla-regular font-semibold">Dashboard</div>
      <div>
        <Card>
          <CardContent className="flex gap-2 items-center">
            {/* <RxAvatar className=" text-2xl" /> */}
            <span className=' rounded-full border-2 border-white p-1'><Image className='rounded-full  border-white ' src={avatar} width={30} height={30} alt="avatar"/></span>
            <span className="font-semibold text-blue-950">Sanford Richard</span>
            <BiChevronDown className=" text-blue-950"/>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Header;
