import React from "react";
import styles from "../../styles/Community.module.css";
import Partner from "../../components/partner/Partner";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function page() {
  return (
    <div>
      <div className={styles.background}>
        <p className={styles.slogan}>
          Meet new friends wherever you go and discover the world with us and
          our community...
        </p>
      </div>
      <div className={styles.page}>
        <p class="font-bold text-2xl mt-5 text-gray-900">
          Have a more authentic travel experience!
        </p>
        <p class="font-bold text-2xl mt-5 text-gray-900">
          You are sharing the same trip. Connect your fellow travelers!
        </p>
      </div>
      <div className=" ml-60 w-auto">
        <div className="flex items-center gap-3 ">
          <div className="mask mask-squircle rounded-full">
            <img
              src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
              alt="Avatar Tailwind CSS Component"
            />
          </div>
          <div>
            <p className="font-bold mt-3">Titi Muller</p>
            <button className="rounded-lg bg-orange-100 hover:bg-orange-300 mt-2 p-2 hover:cursor-pointer">
              biography
            </button>
            <span className="flex gap-3 mt-2 hover:cursor-pointer">
              <FaInstagram className="hover:cursor-pointer w-6 h-6" />
              <FaWhatsapp className="hover:cursor-pointer w-6 h-6" />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="mask mask-squircle rounded-full">
            <img
              src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
              alt="Avatar Tailwind CSS Component"
            />
          </div>
          <div>
            <p className="font-bold mt-3">Hart Hagerty</p>

            <button className="rounded-lg bg-orange-100 hover:bg-orange-300 mt-2 p-2 hover:cursor-pointer">
              biography
            </button>
            <span className="flex gap-3 mt-2 hover:cursor-pointer">
              <FaInstagram className="hover:cursor-pointer w-6 h-6" />
              <FaWhatsapp className="hover:cursor-pointer w-6 h-6" />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="mask mask-squircle rounded-full">
            <img
              src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
              alt="Avatar Tailwind CSS Component"
            />
          </div>
          <div>
            <p className="font-bold mt-3">Marimoon</p>
            <button className="rounded-lg bg-orange-100 hover:bg-orange-300 mt-2 p-2 hover:cursor-pointer">
              biography
            </button>
            <span className="flex gap-3 mt-2 hover:cursor-pointer">
              <FaInstagram className="hover:cursor-pointer w-6 h-6" />
              <FaWhatsapp className="hover:cursor-pointer w-6 h-6" />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="mask mask-squircle rounded-full">
            <img
              src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
              alt="Avatar Tailwind CSS Component"
            />
          </div>
          <div>
            <p className="font-bold mt-3">Ana Moura</p>
            <button className="rounded-lg bg-orange-100 hover:bg-orange-300 mt-2 p-2 hover:cursor-pointer">
              biography
            </button>
            <span className="flex gap-3 mt-2 hover:cursor-pointer">
              <FaInstagram className="hover:cursor-pointer w-6 h-6" />
              <FaWhatsapp className="hover:cursor-pointer w-6 h-6" />
            </span>
          </div>
        </div>
      </div>
      <Partner />
    </div>
  );
}
