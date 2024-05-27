import Image from "next/image";
import React from "react";
import { BiSolidNavigation } from "react-icons/bi";

export default function Card(props) {
  return (
    <div
      key={props.tour._id}
      className=" card w-[400px] h-[430px] ml-8 bg-white shadow-xl carousel mb-10 "
    >
      <Image
        className="w-full"
        src={`data:image;base64,${props.tour.imageCover}`}
        alt="image"
        width={200}
        height={200}
      />
      <div className="flex justify-between pl-3 font-bold mt-3 mr-3 text-xl">
        <h1>{props.tour.name}</h1>
        <br />
        <p className="font-bold text-orange-600 text-xl	">
          {" "}
          €{props.tour.price}
        </p>
      </div>
      <div>
        <h1 className="pl-3 mt-1 mb-3 text-gray-500">
          {props.tour.startLocation.description}
        </h1>
      </div>
      <div className="flex justify-between pl-3">
        <p className="text-sm">
          <span className="flex align-middle">
            <BiSolidNavigation className="mr-1 w-5 h-5" /> {props.tour.duration}{" "}
            Days Trip
          </span>
        </p>
        <div className="content-center mb-3 flex mr-3">
          <div className="rating">
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-yellow-500 mr-1"
            />
          </div>
          <div className=" text-gray-500 text-lg">
            {props.tour.ratingsAverage}
          </div>
        </div>
      </div>
    </div>
  );
}
