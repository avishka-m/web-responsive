import React  from "react";
import logo from "./../assets/react.svg";
import avetar from "./../assets/image/avetar.png";
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
 } from "react-icons/hi2";
 import { HiPlus,HiDotsVertical,HiViewBoards} from "react-icons/hi"; 

import HeaderItem from "./HeaderItem";

function Header() {
    const [toggel, setToggel] = React.useState(false);
    const menu = [
        {
            name: "HOME",
            Icon: <HiHome className="w-8 h-8" />,
        },
        {
            name: "SEARCH",
            Icon: <HiMagnifyingGlass className="w-8 h-8" />,
        },
        {
            name: "WATCH LIST",
            Icon: <HiStar className="w-8 h-8" />,
        },
        {
            name: "ORIGINALS",
            Icon: <HiPlayCircle className="w-8 h-8" />,
        },
        {
            name: "MOVIES",
            Icon: <HiPlus className="w-8 h-8" />,
        },
        {
            name: "SERIES",
            Icon: <HiViewBoards className="w-8 h-8" />
        }
    ];
return (
    <div className='flex justify-between p-5 w-full gap-10'> 
        <div className="flex items-center gap-8">
            <img src={logo} alt="" className="w-20 h-20" />

            <div className="hidden md:flex gap-5">
                {menu.map((item, index) => (
                    <HeaderItem key={index} name={item.name} icon={item.Icon} />
                ))}
            </div>

            <div className="flex md:hidden gap-5">
                {menu.map((item, index) => index < 3 && (
                    <HeaderItem key={index} name={""} icon={item.Icon} />
                ))}
                <div className='md:hidden' onClick={()=>setToggel(!toggel)}>
                    <HeaderItem name={''} icon={<HiDotsVertical className="w-8 h-8" />} />
                    {toggel?<div className="absolute mt-3 bg-[#121212] p-3 border-[1px] rounded-lg
                    mb-3 px-5 py-5  ">
                        {menu.map((item, index) => index >=3 && (
                        <HeaderItem key={index} name={item.name} icon={item.Icon} />
                    ))}
                    </div>:null} 
                </div>
            </div>
        </div>
        <div className="justify-end flex items-center gap-5">
            <img src={avetar} alt="" className="w-[40px] h-[40px] rounded-full" />
        </div>
    </div>
);

}

export default Header;