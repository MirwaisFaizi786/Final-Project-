import styles from "../../styles/Guide.module.css";
import GuideCard from "../../components/guideCard/guideCard";

export default function Guide() {
  return (
    <div>
      <div className={styles.background}>
        <p className={styles.paragrafo}>
          Find the perfect person to guide you on your journey...
        </p>
      </div>
      <p className="text-1xl p-10 text-center">
        {`Passionate travellers ready to lead you on an unforgettable trip: learn
        more about them! Search their name here to find their next trip :)`}
      </p>

      <div className={styles.search}>
        <div>
          <input
            class="border-2 border-white bg-white h-10 px-5 pr-36 rounded-lg text-sm focus:outline-none shadow-md text-start w-fullflex-1"
            type="search"
            name="search"
            placeholder="Search for guides by name, locat"
            list="search-suggestions"
            autocomplete="off"
          />
          <button
            type="submit"
            class="absolute right-0 top-0 mt-5 mr-4"
          ></button>
        </div>
      </div>
      <div className={styles.guidecards}>
        <GuideCard /> <GuideCard />
      </div>
    </div>
  );
}
