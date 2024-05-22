import Image from "next/image";
import React from "react";

export default function Card(props) {
  return (
    <div
      key={props.tour._id}
      className="card card-compact w-96 bg-gray-200 shadow-xl carousel carousel-end rounded-box"
    >
      <Image className="w-full"
        src={`/tours/${props.tour.images[0]}`}
        alt="image"
        width={200}
        height={200}
      />
      <h1>{props.tour.startLocation.description}</h1>
      <p>{props.tour.price}</p>
      <p>{props.tour.duration}</p>
    </div>
  );
}
