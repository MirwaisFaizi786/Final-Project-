import { getTourId } from "@/actions/tourActions/tour";
import styles from "../../../styles/PackageDynamicPages.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";

async function page({ params }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  const tour = await getTourId(params.id);

  return (
    <div class="bg-blue-100/50">
      <div class="flex justify-center items-middle align-middle ml-40">
        <div class="flex relative z-20 items-center overflow-hidden mt-36">
          <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <h1 class="uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
                {tour.data.data.name}
              </h1>
              <p class="flex items-center text-sm sm:text-base text-gray-700">
                Ratings:{renderStars(tour.data.data.ratingsAverage)} (
                {tour.data.data.ratingsQuantity} reviews)
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
              <h3 className="mt-4 font-semibold text-base ">Overview</h3>
              <p className="mt-4">{tour.data.data.description}</p>
              <h3 className="mt-6 font-semibold text-base">
                What’s included in the package?
              </h3>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                ut vitae, corrupti, nulla ipsum mollitia cumque minima totam
                neque non dolor exercitationem labore porro velit perspiciatis
                repellendus. Recusandae, repellat quae?
              </p>
              <h3 className="mt-4 font-semibold text-base ">
                Other Information
              </h3>
              <p className="mt-2 text-sm">
                <span className="font-semibold">Duration: </span>
                {tour.data.data.duration} days
              </p>
              <p className="mt-2 text-sm">
                <span className="font-semibold text-sm">Group Size: </span>
                {tour.data.data.maxGroupSize} people
              </p>
              <p className="mt-2 text-sm">
                <span className="font-semibold text-sm">Difficulty: </span>
                {tour.data.data.difficulty}
              </p>
              <h3 className="mt-6 font-semibold text-base ">
                What’s included in the package?
              </h3>
              <h3 className="mt-6 font-semibold text-base ">Reviews</h3>

              <textarea
                placeholder="Review"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-6 bg-slate-100"
              ></textarea>
              <a
                href="#"
                class="uppercase py-2 px-4 rounded-lg w-28 bg-orange-500 border-2 border-transparent text-white text-md mr-4 hover:bg-orange-600 mt-6"
              >
                Comment
              </a>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Reviews</h3>
                {tour.data.data.reviews.map((review) => (
                  <div key={review.id} className="mb-4 p-4 border rounded-lg">
                    <h4 className="text-xl font-bold">{review.user.name}</h4>
                    <p className="flex items-center">
                      <strong>Rating:</strong> {renderStars(review.rating)}
                    </p>
                    <p>{review.review}</p>
                    <p className="text-sm text-gray-500">
                      <em>{new Date(review.createdAt).toLocaleDateString()}</em>
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
