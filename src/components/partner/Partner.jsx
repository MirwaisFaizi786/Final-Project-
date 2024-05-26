import React from "react";

export default function Partner() {
  return (
    <div className="flex gap-5 bg-cyan-50 w-1/4 rounded-xl ">
      <div>
        <div className="">
          <img src="/guidebg.png" className="rounded-t-xl" alt="guide-detail" />

          <div className="flex justify-between ">
            <div className="p-3">
              <p className="text-xl pt-6">
                Hi, I'm <br />
              Partner Name
              </p>
            </div>
            <div className="pr-6 pt-6">
              <img
                src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                alt="Avatar Tailwind CSS Component"
                className="rounded-full w-16 h-16"
              />
            </div>
          </div>
          <p className="text-gray-600 pl-3">Spoken languages</p>
          <div className="flex gap-1 pl-3">
            <img src="/brflag.png" className="w-8 h-5 " alt="guide-detail" />
            <img src="/esflag.png" className="w-8 h-5 " alt="guide-detail" />
            <img src="/ukflag.png" className="w-8 h-5 " alt="guide-detail" />
          </div>
        </div>
        <div>
          <p className="p-3">
            {` Hey there! I’m Ana, a fellow solo traveler on the this trip
            adventure. I'm a 27-year-old brazilian with a passion for adventure,
            stunning landscapes, and wildlife encounters. I'd love to connect
            over that and explore the trip together. Feel free to reach me out
            on social media. See ya!`}
          </p>
          <span className="flex gap-3 m-4 place-content-center hover:cursor-pointer">
            <img src="/inst.ico" width={20} height={20} />
            <img src="/whats.ico" width={20} height={20} />
          </span>
        </div>
      </div>
    </div>
  );
}
