import React from "react";
import styles from "../../styles/Community.module.css";

export default function Community() {
  return (
    <div>
      <div className={styles.background}>
        <p className={styles.slogan}>
          Meet new friends wherever you go and discover the world with us and
          our community...
        </p>
      </div>
      <div className={styles.page}>
        <div className={styles.paragrafo}>
          <p class="text-2xl p-5">
            Turn your solo trip into an unforgettable adventure. <br /> Find
            your travel match, share authentic experiences, and create memories
            that will last a lifetime. Connect with your fellow travelers.
          </p>
          <p class="font-bold text-2xl mt-5">
            Have a more authentic travel experience!
          </p>
        </div>
        <div>
          <p class="text-start ml-56 mt-20 text-gray-700 italic bt-5">
            Some of our travelers
          </p>
          {/* <div className={styles.imgs}>
            <div className={styles.imgone}></div>
            <div className={styles.twoimgs}>
              <div className={styles.imgtwo}></div>
              <div className={styles.imgthree}></div>
            </div>
          </div> */}
          <div className="carousel carousel-end  gap-5">
            <div className="carousel-item ">
              <img
                src="/community/1.png"
                alt="WonderGo Travellers"
                width={400}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/community/2.png"
                alt="WonderGo Travellers"
                width={400}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/community/3.png"
                alt="WonderGo Travellers"
                width={400}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/community/4.png"
                alt="WonderGo Travellers"
                width={400}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/community/5.png"
                alt="WonderGo Travellers"
                width={400}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/community/6.png"
                alt="WonderGo Travellers"
                width={400}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/community/7.png"
                alt="WonderGo Travellers"
                width={400}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/community/8.png"
                alt="WonderGo Travellers"
                width={400}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/community/9.png"
                alt="WonderGo Travellers"
                width={400}
              />
            </div>
           
            <div className="carousel-item">
              <img
                src="/community/10.png"
                alt="WonderGo Travellers"
                width={400}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/community/11.png"
                alt="WonderGo Travellers"
                width={400}
              />
            </div>

            <div className="carousel-item">
              <img
                src="/community/12.png"
                alt="WonderGo Travellers"
                width={400}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/community/13.png"
                alt="WonderGo Travellers"
                width={400}
              />
            </div>
            
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
