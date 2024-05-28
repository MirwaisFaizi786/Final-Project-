"use client";

import React, { useState } from "react";
import Link from "next/link";
function App() {
  const [openTab, setOpenTab] = useState(1);

  const handleClick = (tabIndex) => {
    setOpenTab(tabIndex);
  };

  return (
    <div className=" font-sans items-center justify-center pt-32">
      <div className="p-8">
        <div className="max-w-md mx-auto">
          <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
            <div
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                openTab === 1 ? "bg-orange-400 text-white" : ""
              }`}
              onClick={() => handleClick(1)}
            >
              Login
            </div>
            <div
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                openTab === 2 ? "bg-orange-400 text-white" : ""
              }`}
              onClick={() => handleClick(2)}
            >
              Sign Up
            </div>
          </div>

          {openTab === 1 && (
            <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-500">
                Sign in to your account
              </h2>
              <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                  <Link href="/">
                    <img
                      className="mx-auto h-10 w-auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                      alt="Your Company"
                    />
                  </Link>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                  <form
                    className="space-y-6"
                    action={async (formData) => {
                      const response = await getLogin(formData);
                      if (response.status === 200) {
                        router.push("/");
                      } else {
                        console.log("error");
                      }
                    }}
                  >
                    <div>
                      <label
                        for="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autocomplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          for="password"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Password
                        </label>
                        <div className="text-sm">
                          <a
                            href="#"
                            className="font-semibold text-orange-500 hover:text-orange-600"
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autocomplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 "
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {openTab === 2 && (
            <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-500">
                Create an account
              </h2>
              <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                  <Link href="/">
                    <img
                      className="mx-auto h-10 w-auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                      alt="Your Company"
                    />
                  </Link>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                  <form
                    className="space-y-6"
                    action={async (formData) => {
                      const response = await getLogin(formData);
                      if (response.status === 200) {
                        router.push("/");
                      } else {
                        console.log("error");
                      }
                    }}
                  >
                    <div>
                      <label
                        for="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          name="name"
                          type="name"
                          autocomplete="name"
                          required
                          className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autocomplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          for="password"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autocomplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 "
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          for="password"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Repeat password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autocomplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 "
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
