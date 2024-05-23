import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div className="drawer fixed ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              ></label>
            </div>
            <div className="flex-1 px-2 mx-2 ">Logo</div>
            <div className="flex-none hidden lg:block mx-10  ">
              <ul className="menu menu-horizontal gap-12 text-white ">
                {/* Navbar menu content here */}
                <li>
                  <Link href="/commun/ity">Home</Link>
                </li>
                <li>
                  <Link href="/package">Tour Packages</Link>
                </li>
                <li>{}
                  <Link href="/guide">Guide</Link>
                </li>
                <li>
                  <Link href="/community">Community</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contacts</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/signup" className="bg-amber-800">
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
