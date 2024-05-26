import getTours from "../../actions/tourActions/tour";
import Link from "next/link";

import { HiCalendarDays } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineExplore } from "react-icons/md";
import { TbStars } from "react-icons/tb";

import { LiaMountainSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";

import styles from "../../styles/Package.module.css";

export default async function Package() {
  const data = await getTours();
  console.log(data.data.data.map((tour) => tour._id));
  return (
    <div className="pt-24">
      <ul>
        {data.data.data.map((tour) => (
          <li key={tour._id} className={styles.travel}>
            <img
              className={styles.image}
              src="/tours/tour-1-1.jpg"
              alt="Tour image"
            />
            <div id="ladoesqButton"></div>
            <div id="ladoesq" className={styles.traveldata}>
              <h1 className={styles.tituloviagem}>{" " + tour.name}</h1>
              <div className={styles.caracteristicas}>
                <div id="Texto" className={styles.legendesq}>
                  <p className={styles.ti}>
                    <HiCalendarDays className={styles.icon} />
                    <span className={styles.ask}>Date: </span>
                    <span className={styles.result}>
                      {` ${new Date(tour.startDates[0]).getDate()} / ${new Date(tour.startDates[0]).getMonth()+1}`}
                    </span>
                  </p>
                  <p className={styles.ti}>
                    <GoPeople className={styles.icon} />
                    <span className={styles.ask}>Group size:</span>
                    <span className={styles.result}>
                      {" " + tour.maxGroupSize}
                    </span>
                  </p>
                  <p className={styles.ti}>
                    <GiSandsOfTime className={styles.icon} />
                    <span className={styles.ask}>Duration:</span>
                    <span className={styles.result}>
                      {"  " + tour.duration}
                    </span>
                  </p>
                  <p className={styles.ti}>
                    <LiaMountainSolid className={styles.icon} />{" "}
                    <span className={styles.ask}>Difficulty:</span>
                    <span className={styles.result}>
                      {" " + tour.difficulty}
                    </span>
                  </p>
                </div>
                <div className={styles.legendireita}>
                  <p id="5" className={styles.ti}>
                    <MdOutlineExplore className={styles.icon} />{" "}
                    <span className={styles.ask}>Guide Service:</span>
                    <span className={styles.result}>
                      {` ${tour.secretTour?"inclued":"not inclued"}`}
                    </span>
                  </p>

                  <p id="6" className={styles.ti}>
                    <TbStars className={styles.icon} />
                    <span className={styles.ask}> Average:</span>
                    <span className={styles.result}>
                      {" " + tour.ratingsAverage}
                    </span>
                  </p>

                  <p id="6" className={styles.ti}>
                    <IoLocationOutline className={styles.icon} />
                    <span className={styles.ask}>Location:</span>
                    <span className={styles.result}>
                      {" " + tour.startLocation.description}
                    </span>
                  </p>
                </div>
                <div id="column1" className={styles.botoes}>
                  <p className={styles.priceFrom}>
                    from
                    <p className={styles.price}>{" " + tour.price}€</p>
                  </p>
                  <div className={styles.botoes}></div>
                  <Link href={`/tour/${tour._id}`} key={tour._id}>
                    <button className={styles.buttontour}>View tour</button>
                  </Link>
                  <button className={styles.buttonBooK}>Book Now</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
