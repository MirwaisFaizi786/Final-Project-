import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Partner from "../partner/Partner";

import getNormalUserDetails from "../../actions/userAction/userAction";



export default async function UserCard() {
  const data = await getNormalUserDetails();
  console.log(data);

  return (
    <div className="flex mt-6">
      <div className="flex items-center gap-3 ">
        <div className="mask mask-squircle rounded-full">
          <img
            src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
            alt="picture-profile"
          />
        </div>
        <div className="  basis-1/3 mx-5 ">
          <p className="font-bold mt-3">Titi Muller</p>
          <button className="rounded-lg bg-orange-100 hover:bg-orange-300 mt-2 p-2 hover:cursor-pointer relative">
            biography
          </button>
          <span className="flex gap-3 mt-2 hover:cursor-pointer">
            <FaInstagram className="hover:cursor-pointer w-6 h-6 hover:text-orange-500" />
            <FaWhatsapp className="hover:cursor-pointer w-6 h-6 hover:text-orange-500" />
          </span>
        </div>
      </div>
    </div>
  );
}
