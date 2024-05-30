import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { getNormalUser } from "../../actions/userAction/userAction";
import Image from "next/image";

export default async function UserCard({ user, key }) {
  return (
    <div key={key} className=" rounded-md flex mt-6 w-full bg-white p-3 ">
      <div className="flex items-center gap-3 ">
        <div className="mask mask-squircle rounded-full w-1/3">
          <Image
            src={`http://localhost:8084/img/users/${user.photo}`}
            alt="user-pic"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full mb-3 shadow-lg"
          />
        </div>
        <div>
          <p className="font-bold mt-3">{user.name}</p>
          <p className="rounded-lg text-sm mt-2 ">{user.description}</p>
          <span className="flex gap-3 hover:cursor-pointer align-middle items-center mt-4">
            <FaInstagram className="hover:cursor-pointer w-6 h-6 hover:text-orange-500" />
            <FaWhatsapp className="hover:cursor-pointer w-6 h-6 hover:text-orange-500" />
          </span>
        </div>
      </div>
    </div>
  );
}
