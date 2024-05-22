import Image from "next/image";
import React from "react";

export default function Card(props) {
  return (
    <div
      key={props.tour._id}
      className="card card-compact   w-96 bg-gray-200 shadow-xl"
    >
      <h1>{props.tour.name}</h1>
      <p>{props.tour.price}</p>
      <p>{props.tour.price}</p>
      <Image
        src={`/public/img/tours/0  ${props.tour.imgUrl}`}
        alt="image"
        width={200}
        height={200}
      />
    </div>
  );
}
