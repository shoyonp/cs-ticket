import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>Home</li>
      <li>FAQ </li>
      <li>Changelog</li>
      <li>Blog</li>
      <li>Download</li>
      <li>Contact</li>
    </>
  );
  return (
    <>
      <div className="bg-base-100 shadow-sm ">
        <div className="navbar md:w-11/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium"
              >
                {links}
              </ul>
            </div>
            <a className="font-bold md:text-xl">CS - Ticket System</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex space-x-2">
              <ul className=" menu-horizontal px-1 space-x-6 font-medium cursor-pointer">
                {links}
              </ul>
            </div>
            <a className="btn ml-3 bg-linear-120 from-[#632EE3] to-[#9F62F2] text-white">
              + New Ticket
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
