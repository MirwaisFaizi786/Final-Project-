
import { getTourId } from "@/actions/tourActions/tour";
import styles from "../../../styles/PackageDynamicPages.module.css";

async function page({ params }) {
  const tour = await getTourId(params.id);
  console.log(tour);
  return (
    <div>
      <div class={styles.container}>
        <div>
          <div>
            <p>{tour.data.data.name}</p>
            <p>{tour.data.data.ratingsAverage}</p>
          </div>
          <div>
            <p>{tour.data.data.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
