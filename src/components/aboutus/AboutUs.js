import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-orange-200 flex rounded-xl m-20 p-10">
      <div>
        <img src="/about.png" alt="Drink" />
      </div>
      <div className="w-2/5">
        <p className=" ">ABOUT US</p>
        <h3 className="text-gray-900 font-bold text-2xl pl-10">
          We're not your ordinary travel agency. We're a community of
          travellers.
        </h3>
        <p className="text-gray-900 pl-10">
          This page is not about how we work, it's more about giving you a sense
          of what NaTours is - or who we are. NaTours was born to connect
          people, cultures and stories through that magical activity that we
          call 'travelling'. So we group people together and send them to live
          incredible adventures around the globe. What are you waiting for? Come
          travel with us! :)
        </p>
      </div>
    </div>
  );
}
