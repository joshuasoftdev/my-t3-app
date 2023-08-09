import { scaleRotate as Menu } from "react-burger-menu";
import React from "react";
import Link from "next/link";

const HamburgerMenu: React.FC = () => (
  <Menu
    pageWrapId={"page-wrap"}
    outerContainerId={"outer-container"}
    right
    className="right-0 h-full font-dopejam"
    width={"60%"}
  >
    <h2 className="right-5 bg-gradient-to-r from-red-100 to-emerald-800 bg-clip-text p-4 text-5xl font-extrabold text-emerald-800 text-transparent md:text-7xl">
      Menu
    </h2>
    <hr className="rounded bg-gradient-to-r from-red-100 to-emerald-800 p-1 invert" />

    <Link
      className="block bg-gradient-to-r from-red-100 to-emerald-800 bg-clip-text p-4 text-5xl font-extrabold text-transparent hover:text-white hover:underline"
      href="/"
    >
      Home
    </Link>
    <Link
      className="block bg-gradient-to-r from-red-100 to-emerald-800 bg-clip-text p-4 text-5xl font-extrabold text-transparent hover:text-white hover:underline"
      href="/about"
    >
      About
    </Link>
    <Link
      className="block bg-gradient-to-r from-red-100 to-emerald-800 bg-clip-text p-4 text-5xl font-extrabold text-transparent hover:text-white hover:underline"
      href="/contact"
    >
      Contact
    </Link>
    <Link
      className="block bg-gradient-to-r from-red-100 to-emerald-800 bg-clip-text p-4 text-5xl font-extrabold text-transparent hover:text-white hover:underline"
      href="/Docs"
    >
      Docs
    </Link>
  </Menu>
);

export default HamburgerMenu;
