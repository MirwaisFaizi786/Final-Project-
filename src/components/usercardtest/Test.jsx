import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { MdHome } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";
import { getNormalUser } from "../../actions/userAction/userAction";
import styles from "../../styles/Test.module.css";

export default async function UserCardTest({ user, key }) {
  return (
    <div key={key}>
      <div className="rounded-lg flex flex-col items-center mt-6 w-full bg-white shadow-xl p-3">
        <div className="p-8 flex flex-col justify-center items-center">
          <Image
            src={`http://localhost:8084/img/users/${user.photo}`}
            alt="user-pic"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full mb-3 shadow-xl"
          />
          <p className="font-bold mt-2">{user.name}</p>
        </div>
        <div>
          <p className="text-sm text-center px-5">{user.description}</p>
        </div>
        <div className="flex items-center gap-3 mb-5">
          <span className="flex gap-3 hover:cursor-pointer align-middle items-center mt-4">
            <FaInstagram className="hover:cursor-pointer w-6 h-6 hover:text-orange-500" />
            <FaWhatsapp className="hover:cursor-pointer w-6 h-6 hover:text-orange-500" />
          </span>
        </div>
      </div>
    </div>
  );
}
