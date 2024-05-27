"use client";

import styles from "../../styles/Profile.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function Profile() {
  const alert = () => {
    toast.info("No problem, you can joy the commmunity whenever you want!");
  };

  return (
    <div className={styles.background}>
      <div className={styles.page}>
        <div class=" ">
          <div class="bg-white shadow-xl pb-8">
            <div class="w-full h-[250px]">
              <img src="/guidebg.png" class="w-full h-full " />
            </div>
            <div class="flex flex-col items-center -mt-20">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                class="w-40 border-2 border-white rounded-full"
              />
              <div class="flex items-center space-x-2 mt-2">
                <p class="text-2xl">Jennifer Aniston</p>
              </div>
              {/* <p class="text-gray-700">I love travelling</p> */}
              <p class="text-sm text-gray-500">Lisbon, Portugal</p>
            </div>
            <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
              <div class="flex items-center space-x-4 mt-2">
                <Link href="/settings">
                  <button class="flex items-center bg-orange-400 hover:bg-orange-500 focus:bg-orange-600 text-white rounded-lg px-3 py-2 space-x-2 transition duration-100">
                    <span className="flex items-center gap-1">
                      <CiSettings />
                      Settings
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div class="w-full flex flex-col 2xl:w-1/3">
              <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 class="text-xl text-gray-900 font-bold">Personal Info</h4>
                <ul class="mt-2 text-gray-700">
                  <li class="flex border-y py-2">
                    <span class="font-bold w-24">Full name:</span>
                    <span class="text-gray-700">Jennifer Aniston</span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Birthday:</span>
                    <span class="text-gray-700">24 Jul, 1991</span>
                  </li>

                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Mobile:</span>
                    <span class="text-gray-700">+351 123-1234</span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Email:</span>
                    <span class="text-gray-700">try@example.com</span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Location:</span>
                    <span class="text-gray-700">Lisbon, Portugal</span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Languages:</span>
                    <span class="text-gray-700">English, Spanish</span>
                  </li>
                  <li class="flex items-center border-b py-2 space-x-2">
                    <span class="font-bold w-24">Elsewhere:</span>
                    <FaWhatsapp className="w-5 h-5 hover:text-orange-500 hover:cursor-pointer" />
                    <FaInstagram className="w-5 h-5 hover:text-orange-500 hover:cursor-pointer" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col w-full 2xl:w-2/3">
              <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 class="text-xl text-gray-900 font-bold">Bio</h4>
                <p class="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt voluptates obcaecati numquam error et ut fugiat
                  asperiores. Sunt nulla ad incidunt laboriosam, laudantium est
                  unde natus cum numquam, neque facere. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ut, magni odio magnam
                  commodi sunt ipsum eum! Voluptas eveniet aperiam at maxime,
                  iste id dicta autem odio laudantium eligendi commodi
                  distinctio!
                </p>
              </div>
              <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
                <h4 class="text-xl text-orange-500 font-bold">My package</h4>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
                  <div class="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-sm text-gray-900">
                        The Sea Explorer
                      </span>
                      <span class="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                        7 days
                      </span>
                    </div>
                    <div class="flex items-center justify-between mt-6">
                      <div>
                        <svg
                          class="w-12 h-12 p-2.5 bg-orange-400 bg-opacity-20 rounded-full text-orange-600 border border-orange-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          ></path>
                        </svg>
                      </div>
                      <div class="flex flex-col">
                        <div class="flex items-end">
                          <span class="text-2xl 2xl:text-3xl font-bold">
                            Miami, USA
                          </span>
                          <div class="flex items-center ml-2 mb-1">
                            <span class="font-bold text-sm text-gray-500 ml-0.5">
                              €1000
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-gray-900 text-lg mt-4 p-8  text-center">
                <p>
                  Ready to make some amazing connections? Join our community and
                  connect with other solo travelers who are excited to explore
                  the world with you.
                </p>
                <p className="mt-4 font-bold">
                  Would you like to share your profile to the community about
                  your trip?
                </p>
                <div className="flex place-content-center gap-8 mt-10">
                  <Link href="/community-user">
                    <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-xl w-32">
                      I'm in
                    </button>
                  </Link>
                  <ToastContainer />
                  <button
                    onClick={alert}
                    className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-xl w-32"
                  >
                    Not now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
