import styles from "../../styles/Profile.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Profile() {
  return (
    <div className={styles.background}>
      {/* <div className="pt-24">
        <div class="max-w-lg mx-auto  rounded-lg  p-5">
          <img
            class="w-32 h-32 rounded-full mx-auto px-4 py-4 justify-center"
            src="https://picsum.photos/200"
            alt="Profile picture"
          />
          <h2 class="text-center text-2xl font-semibold mt-3">John Doe</h2>
          <p class="text-center text-gray-600 mt-1">Lisbon, Portugal</p>
          <div class="flex justify-center mt-5">
            <a href="#" class="text-gray-500 hover:text-orange-700 mx-3">
              WhatsApp
            </a>
            <a href="#" class="text-gray-500 hover:text-orange-700 mx-3">
              Instagram
            </a>
          </div>
          <div class="mt-5">
            <h3 class="text-xl font-semibold">Bio</h3>
            <p class="text-gray-600 mt-2">
              John is a software engineer with over 10 years of experience in
              developing web and mobile applications. He is skilled in
              JavaScript, React, and Node.js.
            </p>
          </div>
        </div>
      </div> */}
      <div className={styles.page}>
        <div class="flex items-center justify-center pt-64 ">
          <div class="w-full break-words border shadow-2xl md:max-w-sm rounded-xl">
            <div class="pb-6">
              <div class="flex flex-wrap justify-center">
                <div class="flex justify-center w-full">
                  <div class="">
                    <img
                      src="https://picsum.photos/200"
                      class="dark:shadow-xl rounded-full align-middle border-2 -m-16 -ml-18 lg:-ml-16 max-w-[150px]"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-24 text-center ">
                <h3 class="mb-1 text-2xl font-bold leading-normal text-gray-700 ">
                  Ana Moura
                </h3>
                <div class="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="text-sm font-bold text-gray-600">
                    Lisbon, Portugal
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
              <div class="flex flex-wrap justify-center">
                <div class="w-full px-6">
                  <p>Biography:</p>
                  <p class="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                    Ana Moura is a renowned Portuguese fado singer known for her
                    powerful voice and captivating stage presence. Born in
                    Lisbon in 1982, she began her musical journey at a young
                    age, immersing herself in the rich traditions of fado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
