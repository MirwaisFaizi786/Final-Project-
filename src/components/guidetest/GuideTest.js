import React from "react";
import { MdHome } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";
import Link from "next/link";
function GuideTest() {
  return (
    <div>
      <div className="w-full h-52 bg-white border border-gray-200 rounded-lg shadow ">
        <div className="flex  px-3 pt-4 w-full bg-slate-100 h-full shadow-lg">
          <div className="w-1/3  ">
            <img
              className="h-24 w-24  mb-3 rounded-full shadow-lg"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="Bonnie image"
            />
          </div>
          <div className="w-1/3 flex flex-col items-center pl-5">
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              Person's Name
            </h5>
            <span className="text-base items-center gap-2 flex text-gray-500">
              <MdHome /> Lives in Location
            </span>
            <span className="text-base text-gray-500  items-center gap-2 flex">
              <IoLanguageSharp /> Spoken languages
            </span>
            <span className="text-base text-gray-500">Description</span>
          </div>
          <div className="w-1/3 pl-10">
            <div className="rating items-center mb-3 flex mr-3">
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-yellow-500 mr-1"
              />
              <span className="text-sm">1.1</span>
            </div>
          </div>
        </div>
        <div className="flex w-full h-10">
          <Link
            href={"/paymentguide"}
            className="w-1/2 bg-orange-400 text-white text-center p-2 rounded-bl-lg"
          >
            Hire
          </Link>
          <div className="w-1/2 bg-white text-orange-400 text-center p-2 rounded-br-lg cursor-pointer">
            Follow
          </div>
        </div>
      </div>
    </div>
  );
}
export default GuideTest;
