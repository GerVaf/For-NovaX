import React from "react";
import { TbInputSearch } from "../../node_modules/react-icons/tb";
import { MdOutlineCancel } from '../../node_modules/react-icons/md'
import { useSelector } from "react-redux";

const Nav = () => {
  const pathTitle = useSelector(state => state?.dashboar?.title)

  // Check if pathTitle is not an object or undefined before rendering
  const titleToRender = typeof pathTitle === "string" ? pathTitle : "";

  return (
    <div className="h-[80px] bg-white ml-5 text-gray-500 rounded-md">
      <div className="flex items-center h-[100%] px-10 justify-between">
        <p className="font-bold text-2xl">{titleToRender}</p>
        <div className="flex gap-5 items-center h-[50px] px-5 rounded-lg bg-slate-200">
          <TbInputSearch className="text-2xl" />
          <input className="bg-slate-200 outline-none border-none text-md" type="text" placeholder="Search..." />
          <MdOutlineCancel className="text-xl hover:text-red-500 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
