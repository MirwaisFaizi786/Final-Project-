import Image from "next/image";
import data from "../actions/tourActions/tour";
import Search from "../components/search/search";
import Card from "../components/card/card";
import AboutUs from "../app/about/page";
import Stories from "./clientstories/page";

export default async function Home() {
  const toursData = await data();
  console.log(toursData.data.data.map((tour) => tour._id));

  return (
    <main>
      <div class="main">
        <div>
          <h1 className="main-title ">Discover The World With Us</h1>
          <p className="sub-title">wherever you go let’s make it happen</p>
        </div>
      </div>

      <Search />
      <div className="flex justify-center align-center m-24">
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
