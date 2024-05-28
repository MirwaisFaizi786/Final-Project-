import styles from "../../styles/Guide.module.css";
import Link from "next/link";
export default function GuideCard() {
  return (
    <div>
      <div class="w-72 bg-white border border-gray-200 rounded-lg shadow">
        <div class="flex justify-center px-4 pt-4">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900">
              Person's Name
            </h5>
            <span class="text-sm text-gray-500">Location</span>
            <span class="text-xs text-gray-500">Description</span>
            <div class="flex mt-4 md:mt-6">
              <Link
                href="/paymentguide"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-600 "
              >
                Hire
              </Link>
              <a
                href="#"
                class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 "
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
