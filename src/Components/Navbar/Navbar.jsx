import React, { useState } from "react";
import logo from "../Assets/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="flex shadow justify-around">
      <div className="flex items-center gap-3">
        <img className="h-14" src={logo} alt="logo" />
        <p className="text-slate-950 text-2xl uppercase font-semibold">Oningoi</p>
      </div>
      <ul className="flex nav-menu items-center gap-5 text-neutral-600 font-medium text-xl">
        <li onClick={() => {setMenu('shop')}} className="flex flex-col items-center content-center gap-2 cursor-pointer">
          Shop
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu('phone')}} className="flex flex-col items-center content-center gap-2 cursor-pointer">
          Phone
          {menu === 'phone' ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu('laptop')}} className="flex flex-col items-center content-center gap-2 cursor-pointer">
          Laptop
          {menu === 'laptop' ? <hr /> : <></>}
        </li>
        <li onClick={() => {setMenu('tablet')}} className="flex flex-col items-center content-center gap-2 cursor-pointer">
          Tablet
          {menu === 'tablet' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <button className="border border-solid w-[100px] h-[30px] font-semibold text-xl text-center rounded-full bg-white border-slate-500 active:bg-slate-200">
          Login
        </button>
        <FontAwesomeIcon icon={faCartShopping} />
        <div className="w-[20px] h-[20px] flex justify-center bg-red-500 text-white rounded-xl text-sm mt-[-15px] ml-[-20px]">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
