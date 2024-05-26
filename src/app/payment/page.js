import React from "react";

export default function Payment() {
  return (
    <div class=" grid grid-cols-3 pt-32">
      <div class="lg:col-span-2 col-span-30 space-y-8 px-12">
        <div className="flex place-content-center">
          <ul className="steps text-center">
            <li className="step step-error">Booking Details</li>
            <li className="step step-error">Your </li>
            <li className="step ">Purchase</li>
          </ul>
        </div>
        <div class="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
          <div class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
            <div class="text-sm font-medium ml-3">Checkout</div>
          </div>
          <div class="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
            Complete your shipping and payment details below.
          </div>
          <div class="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer"></div>
        </div>
        <div class="rounded-md">
          <form id="payment-form" method="POST" action="">
            <section>
              <h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                Personal Information
              </h2>
              <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
                <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                  <span class="text-right px-2">Full Name:</span>
                  <input
                    name="name"
                    class="focus:outline-none px-3 bg-white"
                    placeholder="insert your name here"
                    required=""
                  />
                </label>
                <label class="flex border-b border-gray-200 h-12 py-3 items-center ">
                  <span class="text-right px-2">Email:</span>
                  <input
                    name="email"
                    type="email"
                    class="focus:outline-none px-3  bg-white"
                    placeholder="try@example.com"
                    required=""
                  />
                </label>
                <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                  <span class="text-right px-2">Phone Number:</span>
                  <input
                    type="tel"
                    name="phone"
                    class="focus:outline-none px-3 bg-white"
                    placeholder="+55 9999-9999"
                  />
                </label>
                <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                  <span class="text-right px-2">Date of Birth</span>
                  <input
                    type="date"
                    name="dob"
                    class="focus:outline-none px-3 bg-white text-gray-400"
                  />
                </label>

                <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                  <span class="text-right px-2">Passport Details</span>
                  <input
                    name="passport"
                    class="focus:outline-none px-3 bg-white"
                    placeholder="passport number"
                  />
                </label>

                <label class="flex  border-gray-200 h-12 py-3 items-center select relative bg-white">
                  <span className="text-base">Country</span>
                  <div
                    id="country"
                    class="focus:outline-none px-3 w-full flex items-center"
                  >
                    <select
                      name="country"
                      class="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none"
                    >
                      <option>Australia</option>
                      <option>Belgium</option>
                      <option>Brazil</option>
                      <option>Canada</option>
                      <option>China</option>
                      <option>Denmark</option>
                      <option>Finland</option>
                      <option>France</option>
                      <option>Germany</option>
                      <option>Hong Kong</option>
                      <option>Ireland</option>
                      <option>Italy</option>
                      <option>Japan</option>
                      <option>Luxembourg</option>
                      <option>Mexico</option>
                      <option>Netherlands</option>
                      <option>Poland</option>
                      <option selected="selected">Portugal</option>
                      <option>Singapore</option>
                      <option>Spain</option>
                      <option>Tunisia</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                    </select>
                  </div>
                </label>
              </fieldset>
            </section>
          </form>
        </div>
        <div class="rounded-md">
          <h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
            Payment Information
          </h2>
          <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
            <div class="w-full p-3 border-b border-gray-200">
              <div class="mb-5">
                <label for="type1" class="flex items-center cursor-pointer" />
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type1"
                  checked
                />
                <img
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  class="h-6 ml-3"
                />
                <label />
              </div>
              <div>
                <div class="mb-3">
                  <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                    Name on card
                  </label>
                  <div>
                    <input
                      class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none  bg-white"
                      placeholder="Mano Brown"
                      type="text"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                    Card number
                  </label>
                  <div>
                    <input
                      class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none bg-white"
                      placeholder="1234  - - - -  - - - -  - - - -"
                      type="text"
                    />
                  </div>
                </div>
                <div class="mb-3 -mx-2 flex items-end">
                  <div class="px-2 w-1/4">
                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                      Expiration date
                    </label>
                    <div>
                      <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none  cursor-pointer bg-white">
                        <option>01 - January</option>
                        <option>02 - February</option>
                        <option>03 - March</option>
                        <option>04 - April</option>
                        <option>05 - May</option>
                        <option>06 - June</option>
                        <option>07 - July</option>
                        <option>08 - August</option>
                        <option>09 - September</option>
                        <option>10 - October</option>
                        <option>11 - November</option>
                        <option>12 - December</option>
                      </select>
                    </div>
                  </div>
                  <div class="px-2 w-1/4">
                    <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none  cursor-pointer bg-white">
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                      <option>2028</option>
                      <option>2029</option>
                      <option>2030</option>
                    </select>
                  </div>
                  <div class="px-2 w-1/4">
                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                      Security code
                    </label>
                    <div>
                      <input
                        class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none bg-white"
                        placeholder=" - - - "
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button class="block w-full max-w-xs mx-auto bg-orange-400 hover:bg-orange-500 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
              <i class="mdi mdi-lock-outline mr-1"></i> Check-Out
            </button>
          </div>
        </div>
      </div>
      <div class=" bg-white lg:block hidden mt-20 rounded-xl mr-10 h-1/2">
        <h1 class="py-6 border-b-2 text-xl text-gray-600 px-8">
          Order Summary
          <div class="flex justify-between">
            <img src="/paris.png" alt="Product" />
            <div className="flex justify-around w-1/2">
              <p class="">Gold package</p>
              <p class="text-pink-400 font-semibold inline-block">2 x €200</p>
            </div>
          </div>
          <p className="font-semibold mt-2">Paris, France</p>
        </h1>

        <div class=" outline-dashed text-gray-400"></div>
        <div class="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
          <span>Total</span>
          <span>€999.99</span>
        </div>
      </div>
    </div>
  );
}
