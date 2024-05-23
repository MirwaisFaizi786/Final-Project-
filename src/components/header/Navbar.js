import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
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
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/package">Tour Packages</Link>
                </li>
                <li>
                  <Link href="/guide">Guide</Link>
                </li>
                <li>
                  <Link href="/community">Community</Link>
                </li>
                <li>
                  <Link href="#about">About Us</Link>
                </li>
                <li>
                  <Link href="#footer">Contact</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/signup" className="bg-orange-600 radius-sd">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
