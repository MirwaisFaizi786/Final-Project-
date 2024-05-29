import { getGuides } from "../../actions/guideAction/guideAction";
import styles from "../../styles/Guide.module.css";

import { MdHome } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";

import Link from "next/link";
export default async function GuideCard({ guide }) {
  // const data = await getGuides();
  // for (let i = 0; i < data.data.guides.length; i++) {
  //   console.log("data===guides=========sdfgsdfg========", data.data.guides[i]);
  //   console.log(i);
  // }
  // console.log("data===guides=================", data);
  console.log("guide ««««««««««««««««««««««««   «««««««««««««««««", guide);

  return (
    <div>
      <div className="w-72 bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex justify-center px-4 pt-4">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              Person's Name
            </h5>
            <span className="text-base items-center gap-2 flex text-gray-500">
              <MdHome /> Lives in Location
            </span>
            <span className="text-base text-gray-500  items-center gap-2 flex">
              <IoLanguageSharp /> Spoken languages
            </span>
            <span className="text-base text-gray-500">Description</span>
            <div className="flex mt-4 md:mt-6">
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
