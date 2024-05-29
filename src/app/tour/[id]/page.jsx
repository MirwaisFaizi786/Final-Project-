import { getTourId } from "@/actions/tourActions/tour";
import styles from "../../../styles/PackageDynamicPages.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import ReviewForm from "@/components/reviews/ReviewForm";
import Image from "next/image";
import { createReview } from "@/actions/reviewAction/reviewActions";
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

  const addReview = async (review, rating, tourId, userId) => {
    "use server";
    return await createReview(review, rating, tourId, userId);
  };

  const tour = await getTourId(params.id);
  console.log("tour::: ", tour);
  return (
    <div class="bg-blue-100/50">
      <div class="flex justify-center items-middle align-middle ml-40 ">
        <div class="flex relative z-20 items-center overflow-hidden mt-36">
          <div class="container mx-auto px-6 flex relative py-16 ">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative  ">
              <h1 class="uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800 ">
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
                <Link
                  href={`/payment/${tour.data.data._id}`}
                  className="transition ease-in-out delay-150 uppercase py-2 px-4 rounded-lg bg-orange-500 border-2 border-transparent text-white text-md mr-4 hover:bg-orange-600"
                >
                  Book
                </Link>
              </div>
              <h3 className="mt-4 font-semibold text-base ">Overview</h3>
              <p className="mt-2 text-sm">{tour.data.data.description}</p>
              <h3 className="mt-4 font-semibold text-base">
                What’s included in the package?
              </h3>
              <p className="mt-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                ut vitae, corrupti, nulla ipsum mollitia cumque minima totam
                neque non dolor exercitationem labore porro velit perspiciatis
                repellendus. Recusandae, repellat quae?
              </p>
              <h3 className="mt-4 font-semibold text-base">Start Location:</h3>
              <p className="mt-2 text-sm">
                {tour.data.data.startLocation.description}
              </p>
              <p className="mt-2 text-sm">
                <span className="font-semibold text-sm">
                  Locations you will visit: <br />
                </span>
                {tour.data.data.locations[0].description}
                <br></br>
                {tour.data.data.locations[1].description}
                <br></br>
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
              <p className="mt-2 text-sm">
                <span className="font-semibold text-sm">Guide: </span>
                {tour.data.data.guide == false ? "No guide" : "Yes"}
              </p>
              <p className="mt-2 text-xs">
                *Difficulty describes the level of difficulty of the tour.
              </p>
              <h3 className="mt-6 font-semibold text-base ">Reviews</h3>

              <div className="mb-8">
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
                <ReviewForm tourId={params.id} addReview={addReview} />
              </div>
            </div>
            <div className="mb-3/4 ">
              <div className="carousel carousel-center h-96 w-2/2 p-4 space-x-4 rounded-box left-3/5 ml-40">
                {tour.data.data.images.map((image) => (
                  <div key={image.id} className="carousel-item">
                    <Image
                      src={`data:image;base64,${image}`}
                      alt="image"
                      width={400}
                      height={400}
                      className="rounded-box"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default page;

