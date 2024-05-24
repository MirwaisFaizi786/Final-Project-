import { getTourId } from "@/actions/tourActions/tour";
import styles from "../../../styles/PackageDynamicPages.module.css";

async function page({ params }) {
  const tour = await getTourId(params.id);
  console.log(tour);
  return (
    <div class="flex justify-center items-middle align-middle ml-40 ">
      <div class="flex relative z-20 items-center overflow-hidden mt-36">
        <div class="container mx-auto px-6 flex relative py-16">
          <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <h1 class="uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
              {tour.data.data.name}
            </h1>
            <p class="text-sm sm:text-base text-gray-700">
              <span className="text-yellow-500">★</span>{" "}
              {tour.data.data.ratingsAverage}
            </p>
            <p class="text-sm sm:text-base text-gray-700">
              {tour.data.data.summary}
            </p>

            <div class="flex mt-8">
              <p className="font-bold text-4xl mr-4">
                € {tour.data.data.price}
              </p>
              <a
                href="#"
                class="uppercase py-2 px-4 rounded-lg bg-orange-500 border-2 border-transparent text-white text-md mr-4 hover:bg-orange-600"
              >
                Book
              </a>
            </div>
            <h3 className="mt-4 font-semibold text-sm ">Overview</h3>
            <p className="mt-4">{tour.data.data.description}</p>
            <h3 className="mt-4 font-semibold text-sm ">
              What’s included in the package?
            </h3>
          </div>
          <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative ">
            <img
              src="https://www.wallpapers13.com/wp-content/uploads/2017/10/Life-Underwater-Coral-Reef-tropical-fishs-ocean-Wallpaper-for-Desktop-3840x2400.jpg"
              alt="picture of the location"
              class="max-w-xs md:max-w-sm m-auto rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
