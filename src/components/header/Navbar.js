import React from "react";
import { VscAccount } from "react-icons/vsc";

import Link from "next/link";
import useScroll from "./scroller";
// import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/utills/scrollernavbar";

export default function Navbar() {
  // const scrolled = useScroll(5);
  // const selectedLayout = useSelectedLayoutSegment();

  return (
    <header
    // className={cn(
    //   `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
    //   {
    //     "border-b border-gray-200 bg-red backdrop-blur-lg": scrolled,
    //     "border-b border-gray-200 bg-red": selectedLayout,
    //   }
    // )}
    >
      <div className="drawer fixed z-40 bg-cyan-700 h-20">
        <div className="drawer-content flex flex-colbg-green ">
          <div className="w-full navbar ">
            <div className="flex-1 px-2 mx-2 hover:cursor-pointer">
              WonderGo
            </div>
            <div className="flex-none  mx-10  ">
              <ul className="menu menu-horizontal gap-12 text-white text-base hover:cursor-pointer">
                <li className="pt-3">
                  <Link href="/">Home</Link>
                </li>
                <li className="pt-3 ">
                  <Link href="/package">Tour Packages</Link>
                </li>
                <li className="pt-3">
                  <Link href="/guide">Guide</Link>
                </li>
                <li className="pt-3">
                  <Link href="/community">Community</Link>
                </li>
                <li className="pt-3">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="pt-3">
                  <Link href="#footer">Contact</Link>
                </li>

                <li>
                  <div className="m-0">
                    <div className="dropdown dropdown-end ">
                      <div
                        tabIndex={10}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="rounded-full">
                          <VscAccount className="w-9 h-9" />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-gray-900"
                      >
                        <li>
                          <Link href="/login" className="justify-between">
                            Login{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="/profile" className="justify-between">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link href="/community-user">My Community</Link>
                        </li>
                        <li>
                          <Link href="/payment">Payment</Link>
                        </li>
                        <li>
                          <Link href="/">Logout</Link>
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
