import React from "react";

export default function Search() {
  return (
    <div>
      <div className="text-grey-600 w-2/5">
        <div className="bg-white  text-gray-900 flex m-10 rounded-md">
          <input
            type="text"
            placeholder="Where would you like to go?"
            className="input input-bordered bg-transparent "
          />
          <select className="select select-bordered bg-transparent">
            <option disabled selected>
              When do you want to go?
            </option>
            <option>January</option>
            <option>February</option>
          </select>
        </div>
      </div>
    </div>
  );
}
