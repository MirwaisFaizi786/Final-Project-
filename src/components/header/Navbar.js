"use client";
import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { useScrollPosition } from "./useScrollPosition";
import Image from "next/image";
import Link from "next/link";
import { logout } from "@/actions/authAction/authActions";

export default function Navbar(users) {
  // const [coisas, setCoisas] = useState("LKDJASDlk");
  const scrollPosition = useScrollPosition();
 const [userInfo, setUserInfo ] = useState(users);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleLogout = async () => {
    await logout();
  };


  return (
    <header>
      <div
        className={classNames(
          scrollPosition > 150
            ? "bg-teal-600 text-white shadow-2xl"
            : "bg-transparent  text-white ",
          "drawer fixed z-40 transition ease-in-out duration-500"
        )}
      >
        <div className="drawer-content flex  flex-col w-full navbar">
          <div className="w-full navbar ">
            <div className="flex-1 flex-col px-2 mx-2 hover:cursor-pointer mr-20">
              <Image src="/logo.png" alt="logo" width={75} height={75} />
              <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_90%)] text-white ">
                WonderGo
              </p>
            </div>
            <div className="flex-none  mx-10  ">
              <ul
                className={classNames(
                  scrollPosition > 150 ? " text-white " : " text-orange-400 ",
                  "menu menu-horizontal gap-12 text-base hover:cursor-pointer"
                )}
              >
                <li className="pt-3 ">
                  <Link
                    href="/"
                    className="[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]  hover:underline hover:underline-thick hover:underline-offset-4 "
                  >
                    Home
                  </Link>
                </li>

                <li className="pt-3 ">
                  <Link
                    href="/package"
                    className="[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] hover:underline hover:underline-thick hover:underline-offset-4 "
                  >
                    Tour Packages
                  </Link>
                </li>
                <li className="pt-3">
                  <Link
                    href="/guide"
                    className="[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] hover:underline hover:underline-thick hover:underline-offset-4 "
                  >
                    Guide
                  </Link>
                </li>
                <li className="pt-3">
                  <Link
                    href="/community"
                    className="[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] hover:underline hover:underline-thick hover:underline-offset-4 "
                  >
                    Community
                  </Link>
                </li>
                <li className="pt-3">
                  <Link
                    href="/about"
                    className="[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] hover:underline hover:underline-thick hover:underline-offset-4 "
                  >
                    About Us
                  </Link>
                </li>
                <li className="pt-3">
                  <Link
                    href="#footer"
                    className="[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] hover:underline hover:underline-thick hover:underline-offset-4 "
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <div>
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={10}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="rounded-full">
                             {/* <VscAccount className="w-9 h-9" /> */}
                             {
                               users?.users?.photo  ? <Image src={`http://localhost:8084/img/users/${users.users.photo}`} alt="user-pic" width={200} height={200} className="w-9 h-9"/>: <VscAccount className="w-9 h-9" /> 
                             }
                        {/* <Image src={`http://localhost:8084/img/users/${users.users.photo}`} alt="user-pic" width={200} height={200} className="w-9 h-9"/> */}
                        </div>

                      </div>
                      <ul
                        tabIndex={0}
                        className="mt-5   shadow menu menu-sm dropdown-content w-44 rounded-md bg-teal-600 text-white"
                      >
                        <li>
                          <Link href="/login" className=" hover:font-bold">
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link href="/profile" className="hover:font-bold">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/community-user"
                            className="hover:font-bold"
                          >
                            My Community
                          </Link>
                        </li>
                        <li>
                          <Link href="/settings" className="hover:font-bold">
                            Settings
                          </Link>
                        </li>

                        {
                          users?.users?.role === "admin" ? <li><Link href="/dashboard" className="hover:font-bold">Admin Panel</Link></li>: null
                        }
                       

                        <li>
                         <button className="hover:font-bold" onClick={handleLogout}>logout</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
