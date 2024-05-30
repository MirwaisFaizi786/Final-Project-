import { getGuides } from "../../actions/guideAction/guideAction";
import styles from "../../styles/Guide.module.css";

import { MdHome } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";

import Link from "next/link";
import Image from "next/image";

export default async function GuideCard({ guide }) {
  return (
    <div>
      <div class="w-72 bg-white border border-gray-200 rounded-lg shadow">
        <div class="flex justify-center px-4 pt-4">
          <div class="flex flex-col items-center pb-10">
            <Image
              src={`data:image;base64,${guide.photo}`}
              alt="image"
              width={350}
              height={220}
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900">{guide.name}</h5>
            <span class="text-sm text-gray-500">{guide.location}</span>
            <span class="text-xs text-gray-500">{guide.description}</span>
            <div class="flex mt-4 md:mt-6">
              <Link
                href="/paymentguide"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 "
              >
                Hire
              </Link>
              <a
                href="#"
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 "
              >
                Follow
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
