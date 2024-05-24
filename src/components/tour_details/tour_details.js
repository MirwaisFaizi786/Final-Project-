import React from "react";
import Image from "next/image";
import { styleText } from "util";
import styles from "../../styles/tour_details.module.css";
import { FaRegCalendarCheck } from "react-icons/fa";

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
      {
        $date: "2021-06-19T09:00:00.000Z",
      },
      {
        $date: "2021-07-20T09:00:00.000Z",
      },
      {
        $date: "2021-08-18T09:00:00.000Z",
      },
    ],
    secretTour: false,
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
              <h1 className={styles.tituloviagem}>{travel.name}</h1>
              <div className={styles.caracteristicas}>
                <div id="Texto" className={styles.legendesq}>
                  <p className={styles.ti}>Date:{travel.time}</p>
                  <p className="">
                    <img
                      src="/icon/tours/card_details_icon/clock.png"
                      alt="Descrição da imagem"
                    />
                    {travel.ticket}
                  </p>
                  <p className={styles.ti}>
                    <img
                      src="/icon/tours/card_details_icon/icon_ticket.png"
                      alt="Descrição da imagem"
                    />
                    {travel.location}
                  </p>
                  <p className={styles.ti}>
                    <img
                      src="/icon/tours/card_details_icon/icon_ticket.png"
                      alt="Descrição da imagem"
                    />
                    {travel.name}
                  </p>
                </div>
                <div className={styles.legendesq}>
                  <p id="5" className={styles.ti}>
                    <img
                      src="/icon/tours/card_details_icon/icon_ticket.png"
                      alt="Descrição da imagem"
                    />
                    {travel.name}
                  </p>

                  <p id="6" className={styles.ti}>
                    <img
                      src="/icon/tours/card_details_icon/icon_ticket.png"
                      alt="Descrição da imagem"
                    />
                    {travel.name}
                  </p>

                  <p id="7" className={styles.ti}>
                    <img
                      src="/icon/tours/card_details_icon/icon_ticket.png"
                      alt="Descrição da imagem"
                    />
                    <p>{travel.name}</p>
                  </p>
                  <p id="8" className={styles.ti}>
                    <img
                      src="/icon/tours/card_details_icon/icon_ticket.png"
                      alt="Descrição da imagem"
                    />
                    {travel.name}
                  </p>
                </div>
                <div id="column1" className={styles.botoes}>
                  <p className={styles.priceFrom}>from</p>
                  <h1 className={styles.price}>£700</h1>
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
