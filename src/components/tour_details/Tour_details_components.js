"use client";


import React, { useEffect, useState } from "react";
import styles from "./tour_details.module.css";
import { HiCalendarDays } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineExplore } from "react-icons/md";
import { TbStars } from "react-icons/tb";
import { LiaMountainSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";

const TourDetailsComponent = ({ tour }) => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    if (tour) {
      setTours([tour]);
    }
  }, [tour]);

  return (
    <div className={styles.card}>
      <ul role="list">
        {tours.length > 0 ? (
          tours.map((travel) => (
            <li key={travel.id} className={styles.travel}>
              <img
                className={styles.image}
                src="/tours/tour-1-1.jpg"
                alt="Tour image"
              />
              <h1 className={styles.tituloviagem}>{travel.name}</h1>
              <div className={styles.caracteristicas}>
                <div className={styles.legendesq}>
                  <p className={styles.ti}>
                    <HiCalendarDays className={styles.icon} />
                    <span className={styles.ask}>Date: </span>
                    <span className={styles.result}>
                      {new Date(travel.startDates).toLocaleDateString()}
                    </span>
                  </p>
                  <p className={styles.ti}>
                    <GoPeople className={styles.icon} />
                    <span className={styles.ask}>Group size: </span>
                    <span className={styles.result}>{travel.maxGroupSize}</span>
                  </p>
                  <p className={styles.ti}>
                    <GiSandsOfTime className={styles.icon} />
                    <span className={styles.ask}>Duration: </span>
                    <span className={styles.result}>
                      {travel.duration} days
                    </span>
                  </p>
                  <p className={styles.ti}>
                    <LiaMountainSolid className={styles.icon} />
                    <span className={styles.ask}>Difficulty: </span>
                    <span className={styles.result}>{travel.difficulty}</span>
                  </p>
                </div>
                <div className={styles.legendireita}>
                  <p className={styles.ti}>
                    <MdOutlineExplore className={styles.icon} />
                    <span className={styles.ask}>Guide Service: </span>
                    <span className={styles.result}>
                      {travel.secretTour ? "Yes" : "No"}
                    </span>
                  </p>
                  <p className={styles.ti}>
                    <TbStars className={styles.icon} />
                    <span className={styles.ask}>Average Rating: </span>
                    <span className={styles.result}>
                      {travel.ratingsAverage}
                    </span>
                  </p>
                  <p className={styles.ti}>
                    <IoLocationOutline className={styles.icon} />
                    <span className={styles.ask}>Location: </span>
                    <span className={styles.result}>
                      {travel.startLocation.description}
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.botoes}>
                <p className={styles.priceFrom}>
                  from
                  <span className={styles.price}> {travel.price}€</span>
                </p>
                <button className={styles.buttontour}>View tour</button>
                <button className={styles.buttonBooK}>Book Now</button>
              </div>
            </li>
          ))
        ) : (
          <div>LOADING</div>
        )}
      </ul>
    </div>
  );
};

export default TourDetailsComponent;
