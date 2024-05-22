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
      <div className={styles.search}>
        <div>
          <input
            class="border-2 border-white bg-white  h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none shadow-md text-center"
            type="search"
            name="search"
            placeholder="Search for Guides"
          />
          <button
            type="submit"
            class="absolute right-0 top-0 mt-5 mr-4"
          ></button>
        </div>
      </div>
      {/* separar */}
      <div className={styles.guidecards}>
        <GuideCard /> <GuideCard />
      </div>
    </div>
  );
}
