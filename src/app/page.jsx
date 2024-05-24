import Image from "next/image";
import data from "../actions/tourActions/tour";
import Search from "../components/search/search";
import Card from "../components/card/card";
import AboutUs from "../app/about/page";
import Stories from "./clientstories/page";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default async function Home() {
  const toursData = await data();
  console.log(toursData);

  return (
    <main>
      <div className={styles.main}>
        <div>
          <h1 className={styles.mainTitle}>Discover The World With Us</h1>
          <p
            className={styles.subTitle}
          >{`wherever you go let’s make it happen`}</p>
        </div>
        <div className={styles.search}>
          <Search />
        </div>
      </div>

      <div className="flex justify-center align-center m-24">
        <h1 className="text-3xl text-gray-900 font-bold place-content-center ">
          Best <span className="text-orange-500 font-bold">vacation plan</span>
        </h1>
      </div>
      <div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 justify-center ">
          {toursData.doc.map((tour) => (
            <Link href={`/tour/${tour._id}`} key={tour._id}>
              <Card key={tour._id} tour={tour} />
            </Link>
          ))}
        </ul>
      </div>

      <AboutUs />
      <div className={styles.stories}>
        <h2>
          <span className={styles.line}>
            Joyful Experiences from Our Travelers
          </span>
        </h2>
      </div>
      <Stories />
    </main>
  );
}
