import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import TourDetails from "../../components/tour_details/tour_details";
import Tours from "../../actions/tourActions/tour";
import getTours from "../../actions/tourActions/tour";

export default async function Package() {
  const data = await getTours();
  console.log(data.data.data.map((tour) => tour.name));
  return (
    <div>
      <ul>
        {data.data.data.map((tour) => (
          <li key={tour._id}>
            <div>
              <h1>{tour.name}</h1>
              <h1>{tour._id}</h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
