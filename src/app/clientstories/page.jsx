
import React from "react";


export default function Stories() {

  
  return (
    // <div className="flex w-full items-center h-96">

    // //   <div className="flex m-24">
    //     <div className=" w-1/2 flex flex-col align-middle text-lg text-gray-900 text-center mb-3">
    //       <div className="w-24 place-self-center mb-3 ">
    //         <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    //       </div>
    //       <p>
    //         {` "Solo trip to Machu Picchu with WonderGo was a dream
    //           come true! They took care of everything from the personalized
    //           itinerary to group activities. I made friends and had unforgettable
    //           experiences."`}
    //       </p>
    //       <p className="font-bold mt-3">Tom Cavalcante</p>
    //     </div>
    // //     <div className=" w-1/2 flex flex-col align-middle text-lg text-gray-900 text-center mb-3">
    // //       <div className="w-24 rounded-full place-self-center mb-3">
    // //         <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    // //       </div>
    // //       <p>
    // //         {`  "Always wanted to visit Tokyo, but was unsure about solo travel.
    // //            WonderGo gave me the confidence I needed. They
    // //             provided a customized itinerary with experienced local guides. I
    // //             felt immersed in Japanese culture from the start."`}
    // //       </p>
    // //       <p className="font-bold mt-3">Isabella Saito</p>
    // //     </div>
    // //   </div>
    // // </div>

    <div className="flex flex-col w-full lg:flex-row h-96">
      <div className="grid flex-grow h-32 card  rounded-box place-items-center mt-10">
        <div className=" w-1/2 flex flex-col align-middle text-lg text-gray-900 text-center mb-3">
          <div className="w-24 place-self-center mb-3 ">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <p>
            {` "Solo trip to Machu Picchu with WonderGo was a dream
              come true! They took care of everything from the personalized
              itinerary to group activities. I made friends and had unforgettable
              experiences."`}
          </p>
          <p className="font-bold mt-3">Tom Cavalcante</p>
        </div>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="grid flex-grow h-32 card  rounded-box place-items-center mt-10">
        <div className=" w-1/2 flex flex-col align-middle text-lg text-gray-900 text-center mb-3">
          <div className="w-24 place-self-center mb-3 ">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <p>
            {`  "Always wanted to visit Tokyo, but was unsure about solo travel.
               WonderGo gave me the confidence I needed. They
                provided a customized itinerary with experienced local guides. I
                felt immersed in Japanese culture from the start."`}
          </p>
          <p className="font-bold mt-3">Isabella Saito</p>
        </div>
      </div>
    </div>
  );
}
