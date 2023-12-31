import React from "react";
import { NavLink } from "react-router-dom";
import withUser from "../hocs/withUser";
import { LuLayoutDashboard } from "../../node_modules/react-icons/lu";
import {
  BsFillBarChartFill,
  BsFillPeopleFill,
  BsCardText,
} from "../../node_modules/react-icons/bs";
import { IoBagHandleSharp } from "../../node_modules/react-icons/io5";
import logo from "../../src/assets/logo.jpg";
import { sidebarStyle } from "./constants/defaultStyle";
import { paths } from "../routes/paths";
import { useDispatch } from "react-redux";
import { changeTitle } from "../services/feature/dashboardSlice";
const Sidebar = () => {
  const dispatch = useDispatch();

  const titleHandler = (string) => {
    dispatch(changeTitle(string));
  };

  return (
    <div>
      <div className="flex items-center justify-between p-2 text-[rgb(243,195,0)] font-bold text-xl">
        <img className=" w-20" src={logo} alt="" />
        {/* <p>NovaX</p> */}
      </div>

      <div className="flex flex-col gap-2  font-black text-gray-500">
        <NavLink
          onClick={()=>titleHandler('Dashboard')}
          to={paths.home}
          className={sidebarStyle}
        >
          <LuLayoutDashboard />
          Dashboard
        </NavLink>
        <NavLink
          onClick={()=>titleHandler('Statistics')}
          to={paths.create_category}
          className={sidebarStyle}
        >
          <BsFillBarChartFill />
          Statiistics
        </NavLink>
        <NavLink
          onClick={()=>titleHandler('Products List')}
          to={paths.product}
          className={sidebarStyle}
        >
          <IoBagHandleSharp />
          Products
        </NavLink>
        <NavLink
          onClick={()=>titleHandler('Customers List')}
          to={paths.customers}
          className={sidebarStyle}
        >
          <BsFillPeopleFill />
          Customer
        </NavLink>
        <NavLink
          onClick={()=>titleHandler('Messages')}
          to={paths.category_list}
          className={sidebarStyle}
        >
          <BsCardText />
          Messages
        </NavLink>
      </div>
    </div>
  );
};

export default withUser(Sidebar);
