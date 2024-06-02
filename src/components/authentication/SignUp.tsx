"use client";
import { signUpAction } from "@/actions/authAction/authActions";
import { redirect } from "next/navigation";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {
  return (
    <form
      className="space-y-6"
      action={async (formData) => {

        await signUpAction(formData)
        redirect("/");
      }}
    >
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type=" name"
            placeholder=" insert your name"
            required
            className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-black shadow-sm ring-1 ring-inset   focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type=" email"
            placeholder=" insert your email"
            required
            className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-black shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            placeholder=" ••••••••"
            type="password"
            required
            className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 "
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Repeat password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="confirmPassword"
            placeholder=" ••••••••"
            type="password"
            required
            className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset 0 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 "
          />
        </div>
      </div>
      <div className="flex items-start mb-5 bg">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded  dark:focus:ring-blue-600"
            name="terms"
            required
          />
        </div>
        <label
          htmlFor="terms"
          className="ms-2 text-sm font-medium text-gray-100 dark:text-gray-300"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions.
          </a>
        </label>
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
  );
}

export default SignUp;
