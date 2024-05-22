import Image from "next/image";
import Card from "../components/card/card";
import AboutUs from "../components/aboutus/AboutUs";

export default function Home() {
  return (
    <main>
      <div className="main"></div>
      <div className="flex flex-col items-center justify-center absolute top-64 left-64 text-white font-bold ">
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
      <Card />
      <AboutUs/>
    </main>
  );
}
