import React from "react";
import { CiLocationOn } from "react-icons/ci";

export default function Search() {
  return (
    <div className="bg-white opacity-90 rounded-lg shadow-md p-4 w-[600px]">
      <div className="flex gap-3 w-full">
        <div className="w-full flex-1">
          <input
            type="text"
            placeholder="Where would you like to go?"
            className="input input-bordered w-60 bg-white opacity-70"
          />
        </div>
        <div className="tracking-wide flex-1">
          <select className="select select-bordered w-full bg-white opacity-70 text-gray-400 ">
            <option>When do you want to go?</option>
            <option>January</option>
            <option>February</option>
          </select>
        </div>
        <button className="btn btn-ghost btn-circle bg-orange-400 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
