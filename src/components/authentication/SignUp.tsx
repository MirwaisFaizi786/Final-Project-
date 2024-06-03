"use client";
import React from "react";
import { signUpAction } from "@/actions/authAction/authActions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/types/validationSchema";
import { Toaster, toast } from "react-hot-toast";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (formData: any) => {
    try {
      const response = await signUpAction(formData);
      if (response?.status === "success") {
        toast.success("Registration successful!");
      }else {
        toast.error(response?.message);
      }

    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

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

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              {...register("password")}
              type="password"
              placeholder="••••••••"
              className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
            />
            {errors.password?.message && (
              <p className="text-red-600">{errors.password.message.toString()}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Repeat password
          </label>
          <div className="mt-2">
            <input
              id="confirmPassword"
              {...register("confirmPassword")}
              type="password"
              placeholder="••••••••"
              className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
            />
            {errors.confirmPassword?.message && (
              <p className="text-red-600">{errors.confirmPassword.message.toString()}</p>
            )}
          </div>
        </div>

        <div className="flex items-start mb-5 bg">
          <div className="flex items-center h-5">
            <input
              id="terms"
              {...register("terms")}
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded"
            />
            {errors.terms?.message && (
              <p className="text-red-600">{errors.terms.message.toString()}</p>
            )}
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
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
    </>
  );
}

export default SignUp;
