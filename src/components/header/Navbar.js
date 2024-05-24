import React from "react";

import Link from "next/link";
import useScroll from "./scroller"
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/utills/scrollernavbar";

export default function Navbar() {

  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <header
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          "border-b border-gray-200 bg-red backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-red": selectedLayout,
        }
      )}
    >
      <div className="drawer fixed z-50 ">
        <div className="drawer-content flex flex-col ">
          <div className="w-full navbar">
            <div className="flex-none lg:hidden ">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost hover:bg-sky-700"
              ></label>
            </div>
            <div className="flex-1 px-2 mx-2 ">Logo</div>
            <div className="flex-none  mx-10  ">
              <ul className="menu menu-horizontal gap-12 text-white text-base ">
                <li className="pt-3">
                  <Link href="/">Home</Link>
                </li>
                <li className="pt-3">
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
                          <img alt="ico" src="/profile-ico.png" />
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
                          <a className="justify-between">Profile</a>
                        </li>
                        <li>
                          <Link href="/community-user">My Community</Link>
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
