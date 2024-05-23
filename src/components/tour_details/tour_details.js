import React from "react";
import Image from "next/image";
import { styleText } from "util";
import styles from "./tour_details.module.css";
import getTours from "../../actions/tourActions/tour";


import { HiCalendarDays } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineExplore } from "react-icons/md";
import { TbStars } from "react-icons/tb";

import { LiaMountainSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";

const people = [
  {
    name: "The Sea Explorer",
    startLocation: {
      type: "Point",
      coordinates: [-80.185942, 25.774772],
      address: "301 Biscayne Blvd, Miami, FL 33132, USA",
      description: "Miami, USA",
    },
    locations: [
      {
        type: "Point",
        coordinates: [-80.128473, 25.781842],
        description: "Lummus Park Beach",
        day: 1,
        _id: {
          $oid: "5c88fa8cf4afda39709c2959",
        },
      },
      {
        type: "Point",
        coordinates: [-80.647885, 24.909047],
        description: "Islamorada",
        day: 2,
        _id: {
          $oid: "5c88fa8cf4afda39709c2958",
        },
      },
      {
        type: "Point",
        coordinates: [-81.0784, 24.707496],
        description: "Sombrero Beach",
        day: 3,
        _id: {
          $oid: "5c88fa8cf4afda39709c2957",
        },
      },
      {
        type: "Point",
        coordinates: [-81.768719, 24.552242],
        description: "West Key",
        day: 5,
        _id: {
          $oid: "5c88fa8cf4afda39709c2956",
        },
      },
    ],
    duration: 7,
    maxGroupSize: 15,
    difficulty: "medium",
    ratingsAverage: 3,
    ratingsQuantity: 3,
    price: 497,
    summary: "Exploring the jaw-dropping US east coast by foot and by boat",
    description:
      "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageCover: "tour-2-cover.jpg",
    images: ["tour-2-1.jpg", "tour-2-2.jpg", "tour-2-3.jpg"],
    createdAt: {
      $date: "2024-05-19T14:46:40.653Z",
    },
    startDates: [
      "aa",
      {
        $date: "2024-05-19T14:46:40.653Z",
      },
      {
        $date: "2021-07-20T09:00:00.000Z",
      },
      {
        $date: "2021-08-18T09:00:00.000Z",
      },
    ],
    secretTour: "false",
    slug: "the-sea-explorer",
    __v: 0,
  },
  {
    name: "The Sea Explorer",
    startLocation: {
      type: "Point",
      coordinates: [-80.185942, 25.774772],
      address: "301 Biscayne Blvd, Miami, FL 33132, USA",
      description: "Miami, USA",
    },
    locations: [
      {
        type: "Point",
        coordinates: [-80.128473, 25.781842],
        description: "Lummus Park Beach",
        day: 1,
        _id: {
          $oid: "5c88fa8cf4afda39709c2959",
        },
      },
      {
        type: "Point",
        coordinates: [-80.647885, 24.909047],
        description: "Islamorada",
        day: 2,
        _id: {
          $oid: "5c88fa8cf4afda39709c2958",
        },
      },
      {
        type: "Point",
        coordinates: [-81.0784, 24.707496],
        description: "Sombrero Beach",
        day: 3,
        _id: {
          $oid: "5c88fa8cf4afda39709c2957",
        },
      },
      {
        type: "Point",
        coordinates: [-81.768719, 24.552242],
        description: "West Key",
        day: 5,
        _id: {
          $oid: "5c88fa8cf4afda39709c2956",
        },
      },
    ],
    duration: 7,
    maxGroupSize: 15,
    difficulty: "medium",
    ratingsAverage: 3,
    ratingsQuantity: 3,
    price: 497,
    summary: "Exploring the jaw-dropping US east coast by foot and by boat",
    description:
      "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageCover: "tour-2-cover.jpg",
    images: ["tour-2-1.jpg", "tour-2-2.jpg", "tour-2-3.jpg"],
    createdAt: {
      $date: "2024-05-19T14:46:40.653Z",
    },
    startDates: [
      "aa",
      {
        $date: "2024-05-19T14:46:40.653Z",
      },
      {
        $date: "2021-07-20T09:00:00.000Z",
      },
      {
        $date: "2021-08-18T09:00:00.000Z",
      },
    ],
    secretTour: "false",
    slug: "the-sea-explorer",
    __v: 0,
  },
];
export default function TourDetails() {
  return (
    <div className={styles.card}>
      <ul role="list">
        {people.map((travel) => (
          <li key={travel.id} className={styles.travel}>
            <img
              className={styles.image}
              src="/tours/tour-1-1.jpg"
              alt="image"
            />
            <div id="ladoesqButton"></div>
            <div id="ladoesq" className={styles.traveldata}>
              <h1 className={styles.tituloviagem}>{" " + travel.name}</h1>
              <div className={styles.caracteristicas}>
                <div id="Texto" className={styles.legendesq}>
                  <p className={styles.ti}>
                    <HiCalendarDays className={styles.icon} />
                    <span className={styles.ask}>Date: </span>
                    <span className={styles.result}>
                      {" " + travel.startDates[1].$date}
                    </span>
                  </p>
                  <p className={styles.ti}>
                    <GoPeople className={styles.icon} />
                    <span className={styles.ask}>Group size:</span>
                    <span className={styles.result}>{" " + travel.maxGroupSize}</span>
                  </p>
                  <p className={styles.ti}>
                    <GiSandsOfTime className={styles.icon} />
                    <span className={styles.ask}>Duration:</span>
                    <span className={styles.result}>{"  " + travel.duration}</span>
                  </p>
                  <p className={styles.ti}>
                    <LiaMountainSolid className={styles.icon} /> <span className={styles.ask}>Difficulty:</span>
                    <span className={styles.result}>{" " + travel.difficulty}</span>
                  </p>
                </div>
                <div className={styles.legendireita}>
                  <p id="5" className={styles.ti}>
                    <MdOutlineExplore className={styles.icon} /> <span className={styles.ask}>Guide Service:</span>
                    <span className={styles.result}>{" " + travel.secretTour}</span>
                  </p>

                  <p id="6" className={styles.ti}>
                    <TbStars className={styles.icon} />
                   <span className={styles.ask}> Average:</span>
                    <span className={styles.result}>{" " + travel.ratingsAverage}</span>
                  </p>

                  <p id="6" className={styles.ti}>
                    <IoLocationOutline className={styles.icon} />
                    <span className={styles.ask}>Location:</span>
<span className={styles.result}>{" " + travel.startLocation.description}</span>
                  </p>
                </div>
                <div id="column1" className={styles.botoes}>
                  <p className={styles.priceFrom}>
                    from
                    <p className={styles.price}>{" " + travel.price}€</p>
                  </p>
                  <div className={styles.botoes}></div>
                  <button className={styles.buttontour}>View tour</button>
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
