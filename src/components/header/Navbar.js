import React from "react";

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
                  <a>Home</a>
                </li>
                <li>
                  <a>Tour Packages</a>
                </li>
                <li>
                  <a>Guide</a>
                </li>
                <li>
                  <a>Community</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Contacts</a>
                </li>
                <li>
                  <a>Login</a>
                </li>
                <li>
                  <a className="bg-amber-800">Sing Up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
