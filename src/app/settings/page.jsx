import React from "react";

function Settings() {
  return (
    <div className="pt-20 ">
      <div className=" w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
        <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-orange-100 top-12">
            <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

            <a
              href="#"
              className="flex items-center px-3 py-2.5 font-semibold hover:bg-blue-100 hover:rounded-lg"
            >
              Account Settings
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 font-medium">
              Community
            </a>
          </div>
        </aside>
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">
                Public Profile
              </h2>

              <div className="grid max-w-2xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  <img
                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-orange-300"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    alt="Bordered avatar"
                  />

                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <button
                      type="button"
                      className="transition ease-in-out delay-150 py-3.5 px-7 text-base font-medium text-orange-100 focus:outline-none bg-orange-400 rounded-lg border border-orange-200 hover:bg-orange-500 focus:z-10 focus:ring-4 focus:ring-orange-200 "
                    >
                      Change picture
                    </button>
                    <button
                      type="button"
                      className="transition ease-in-out delay-150 py-3.5 px-7 text-base font-medium text-orange-400 focus:outline-none bg-white rounded-lg border border-orange-200 hover:bg-orange-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-orange-200 "
                    >
                      Delete picture
                    </button>
                  </div>
                </div>

                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                  <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div className="w-full">
                      <label
                        for="first_name"
                        className="block mb-2 text-sm font-medium text-indigo-900"
                      >
                        Your first name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                        placeholder="Your first name"
                        value="Jennifer"
                        required
                      />
                    </div>

                    <div className="w-full">
                      <label
                        for="last_name"
                        className="block mb-2 text-sm font-medium text-indigo-900"
                      >
                        Your last name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                        placeholder="Your last name"
                        value="Aniston"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-2 sm:mb-6">
                    <div class="mb-2 sm:mb-6">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-indigo-900"
                      >
                        Your email
                      </label>

                      <input
                        type="email"
                        id="email"
                        class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="your.email@mail.com"
                        required
                      />
                    </div>
                    <label
                      for="location"
                      className="block mb-2 text-sm font-medium text-indigo-900"
                    >
                      Your location
                    </label>

                    <input
                      type="text"
                      id="text"
                      className="bg-indigo-50 border border-indigo-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                      placeholder="Lisbon, Portugal"
                      required
                    />
                    <label
                      for="number"
                      className="block mb-2 text-sm font-medium text-indigo-900 mt-2"
                    >
                      Your number
                    </label>

                    <input
                      type="number"
                      id="number"
                      className="bg-indigo-50 border border-indigo-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                      placeholder="Number"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      for="message"
                      className="block mb-2 text-sm font-medium text-indigo-900"
                    >
                      Bio
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-orange-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-orange-500 focus:border-orange-500 "
                      placeholder="Write your bio here..."
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="transition ease-in-out delay-150 text-white bg-orange-400  hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Settings;
