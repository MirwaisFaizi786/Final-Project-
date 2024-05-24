import React from "react";

export default function Partner() {
  return (
    <div className="flex gap-5 bg-slate-500 w-1/4 rounded-sm">
      <div>
        <div>
          <div>
            <img src="/guidebg.png" alt="guide-detail" />
          </div>
          <p>Hi, I'm "Partner Name"</p>
          <p>Spoken languages</p>
          <div className="flex gap-3 mt-2">
            <img src="/brflag.png" alt="guide-detail" />
            <img src="/esflag.png" alt="guide-detail" />
            <img src="/ukflag.png" alt="guide-detail" />
          </div>
        </div>
        <div>
          <p>
            {` Hey there! I’m Ana, a fellow solo traveler on the this trip
            adventure. I'm a 27-year-old brazilian with a passion for adventure,
            stunning landscapes, and wildlife encounters. I'd love to connect
            over that and explore the trip together. Feel free to reach me out
            on social media. See ya!`}
          </p>
          <span className="flex gap-3 mt-2">
            <img src="/inst.ico" width={20} height={20} />
            <img src="/whats.ico" width={20} height={20} />
          </span>
        </div>
      </div>
    </div>
  );
}
