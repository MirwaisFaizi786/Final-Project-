import styles from "../../styles/Home.module.css";

export default function AboutUs() {
  return (
    <div className="bg-orange-100 w-full mt-36" id="about">
      <div className={styles.aboutMaior}>
        <div className={styles.aboutFoto}>
          <img src="/about.png" alt="city" />
        </div>
        <div className={styles.aboutTexto}>
          <p className="text-gray-600 mt-6 ">ABOUT US</p>
          <p className="text-gray-900 font-bold text-2xl mt-2 ">
          {`  We're not your ordinary travel agency. We're a community of
            travellers.`}
          </p>
          <p className="text-gray-900 mt-2">
           {` This page is not about how we work, it's more about giving you a
            sense of what NaTours is - or who we are. NaTours was born to
            connect people, cultures and stories through that magical activity
            that we call 'travelling'. So we group people together and send them
            to live incredible adventures around the globe. What are you waiting
            for? Come travel with us! :)`}
          </p>
          <div className="flex justify-between mt-6">
            <div>
              <p className="text-orange-400 font-bold  text-3xl	">20+</p>
              <p className="text-gray-500">Years</p>
              <p className="text-gray-500">Experience</p>
            </div>
            <div>
              <p className="text-orange-400 font-bold  text-3xl	">100+</p>
              <p className="text-gray-500">Happy</p>
              <p className="text-gray-500">Costumer</p>
            </div>
            <div>
              <p className="text-orange-400 font-bold  text-3xl	">15+</p>
              <p className="text-gray-500">Choice</p>
              <p className="text-gray-500">of Services</p>
            </div>
            <div>
              <p className="text-orange-400 font-bold  text-3xl	">15+</p>
              <p className="text-gray-500">Profissional</p>
              <p className="text-gray-500">Guides</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
