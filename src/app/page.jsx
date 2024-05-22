import Image from "next/image";
import Card from "../components/card/card";
import AboutUs from "../app/about/page";
import data from "../actions/tourActions/tour";
import Stories from "./clientstories/page";

export default async function Home() {
  const toursData = await data();
  console.log(toursData.data.data.map((tour) => tour._id));

  return (
    <main>
      <div className="main"></div>
      <div className="flex flex-col items-center justify-center absolute top-72 right-72 text-white font-bold ">
        <h1 className="text-5xl self-center">Discover The World With Us</h1>
        <p className="text-2xl">wherever you go let’s make it happen"</p>
      </div>
      <div className="text-grey-600 ">
        <div className="bg-white w-1/2 text-gray-900 flex m-10 rounded-md">
          <input
            type="text"
            placeholder="Where would you like to go?"
            className="input input-bordered w-full max-w-xs  bg-transparent "
          />
          <select className="select select-bordered w-full max-w-xs bg-transparent">
            <option disabled selected>
              When do you want to go?
            </option>
            <option>January</option>
            <option>February</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center align-center m-10">
        <h1 className="text-3xl text-gray-900 font-bold place-content-center ">
          Best <span className="text-orange-500 font-bold">vacation plan</span>
        </h1>
      </div>

      <div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 justify-center ">
          {toursData.data.data.map((tour) => (
            <Card key={tour._id} tour={tour} />
          ))}
        </ul>
      </div>
      <AboutUs />
      <Stories />
    </main>
  );
}
