import getTours from "../../actions/tourActions/tour";
import Image from "next/image";

import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";
import { HiCalendarDays } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineExplore } from "react-icons/md";
import { TbStars } from "react-icons/tb";
import { LiaMountainSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";

import styles from "../../styles/Package.module.css";
import { PiX } from "react-icons/pi";

export default async function Package() {
  const data = await getTours();
  // console.log(data.data.data.map((tour) => tour._id));
  return (
    <div className="pt-24">
      <ul>
        {data.data.data.map((tour) => (
          <li key={tour._id} className={styles.travel}>
            <Image
              className={styles.image}
              src={`/tours/${tour.images[0]}`}
              alt="image"
              width={350}
              height={200}
            />
            <div id="ladoesq" className={styles.traveldata}>
              <h1 className={styles.tituloviagem}>{tour.name}</h1>
              <div className={styles.caracteristicas}>
                <div id="Texto" className={styles.legendesq}>
                  <p className={styles.ti}>
                    <HiCalendarDays className={styles.icon} />
                    <span className={styles.ask}>Date:</span>
                    <span className={styles.result}>
                      {tour.startDates.map((d) =>
                        new Date(d).toLocaleDateString("pt-PT")
                      )}
                    </span>
                  </p>
                  <p className={styles.ti}>
                    <GoPeople className={styles.icon} />
                    <span className={styles.ask}>Group size:</span>
                    <span className={styles.result}>
                      {tour.maxGroupSize} people
                    </span>
                  </p>
                  <p className={styles.ti}>
                    <GiSandsOfTime className={styles.icon} />
                    <span className={styles.ask}>Duration:</span>
                    <span className={styles.result}>
                      {tour.duration} days trip
                    </span>
                  </p>
                  <p className={styles.ti}>
                    <LiaMountainSolid className={styles.icon} />{" "}
                    <span className={styles.ask}>Difficulty:</span>
                    <span className={styles.result}>{tour.difficulty}</span>
                  </p>
                </div>
                <div className={styles.legendireita}>
                  <p id="5" className={styles.ti}>
                    <MdOutlineExplore className={styles.icon} />{" "}
                    <span className={styles.ask}>Guide Service:</span>
                    <span className={styles.result}>
                      {` ${tour.secretTour ? "inclued" : "not inclued"}`}
                    </span>
                  </p>

                  <p id="6" className={styles.ti}>
                    <TbStars className={styles.icon} />
                    <span className={styles.ask}> Rating Average:</span>
                    <span className={styles.result}>
                      {tour.ratingsAverage}
                      <FaStar className="text-yellow-500 ml-1" />
                    </span>
                  </p>

                  <p id="6" className={styles.ti}>
                    <IoLocationOutline className={styles.icon} />
                    <span className={styles.ask}>Location:</span>
                    <span className={styles.result}>
                      {tour.startLocation.description}
                    </span>
                  </p>
                </div>
                <div id="column1" className={styles.botoes}>
                  <p className={styles.priceFrom}>
                    from
                    <span className={styles.price}>{tour.price}€</span>
                  </p>
                  <div className={styles.botoes}></div>
                  <Link href={`/tour/${tour._id}`} key={tour._id}>
                    <button className={styles.buttontour}>View tour</button>
                  </Link>
                  <Link href={`/payment/${tour._id}`} key={tour._id}>
                    <button className={styles.buttonBooK}>Book Now</button>
                  </Link>
                </div>
              </div>
              <hr className={styles.hr} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
