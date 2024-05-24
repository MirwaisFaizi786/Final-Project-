import { getTourId } from "@/actions/tourActions/tour";
import styles from "../../../styles/PackageDynamicPages.module.css";

async function page({ params }) {
  const tour = await getTourId(params.id);
  console.log("tour", tour);
  return (
    <div>
      <div className={styles.container}>
        {tour ? (
          <div>
            <div>
              <p>{tour.data.data.name}</p>
              <p>{tour.data.data.ratingsAverage}</p>
            </div>
            <div>
              <p>{tour.data.data.price}</p>
            </div>
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
}

export default page;
