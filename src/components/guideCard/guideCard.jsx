import styles from "../../styles/Guide.module.css";

export default function GuideCard() {
  return (
    <div>
      <div className={styles.dividir}>
        <div class="max-w-sm mx-auto bg-orange-50 rounded-lg overflow-hidden shadow-lg ">
          <div class="border-b px-4 pb-6">
            <div class="text-center my-4">
              <img
                class="h-32 w-32 rounded-full border-4 border-orange-300 mx-auto my-4"
                src="https://randomuser.me/api/portraits/women/21.jpg"
                alt=""
              />
              <div class="py-2">
                <h3 class="font-bold text-2xl text-gray-800 mb-1">
                  Cait Genevieve
                </h3>
                <div class="inline-flex text-orange-300 items-center">
                  <svg
                    class="h-5 w-5 text-orange-300 mr-1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      class=""
                      d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                    />
                  </svg>
                  New York, NY
                </div>
                <div>
                  <p class="text-amber-200 text-xl">★</p>
                </div>
              </div>
            </div>
            <div class="flex gap-2 px-2">
              <button class="flex-1 rounded-full bg-orange-300 text-white antialiased font-bold hover:bg-orange-600 px-4 py-2">
                Hire
              </button>
              <button class="flex-1 rounded-full border-2 border-orange-300 font-semibold text-orange-300 px-4 py-2 ">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
