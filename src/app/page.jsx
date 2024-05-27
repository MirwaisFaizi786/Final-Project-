import Image from "next/image";
import data from "../actions/tourActions/tour";
import Search from "../components/search/search";
import Card from "../components/card/card";
import Stories from "./clientstories/page";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default async function Home() {
  const toursData = await data();

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

      <div className="flex justify-center align-center m-12">
        <h1 className="text-3xl text-gray-900 font-bold place-content-center ">
          Best <span className="text-orange-500 font-bold">vacation plan</span>
        </h1>
      </div>

      <div>
        <div className="collapse justify-start ml-3">
          <input type="checkbox" />
          <div className="collapse-title text-xl text-gray-400">
            <IoIosInformationCircleOutline />
          </div>
          <p className="collapse-content text-sm text-gray-400">
            <span>drag to the right to see more packages</span>
          </p>
        </div>
      </div>
      <div className="card carousel rounded-box w-full shrink-0 my-10">
        <ul className=" carousel-item  ">
          {toursData.data.data.map((tour) => (
            <Link href={`/tour/${tour._id}`} key={tour._id}>
              <Card carousel rounded-box key={tour._id} tour={tour} />
            </Link>
          ))}
        </ul>
      </div>

      <div className={styles.stories}>
        <h2>
          <span className={styles.line}>
            <div className="divider divider-accent w-1/4">
              Joyful Experiences
            </div>
          </span>
        </h2>
      </div>
      <Stories />
    </main>
  );
}
