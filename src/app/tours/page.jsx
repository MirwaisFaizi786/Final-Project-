import React from "react";
import getTours from "../../actions/tourActions/tour";

async function Tours() {
  const data = await getTours();
  console.log(data.data.data.map((tour) => tour.name));
  return (
    <div>
      <h1>tours</h1>
    </div>
  );
}
-
export default Tours;
