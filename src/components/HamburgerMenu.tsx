import { push as Menu } from "react-burger-menu";
import React from "react";
import Link from "next/link";

const HamburgerMenu: React.FC = () => (
  <Menu right className="font-dopejam right-0 h-full" width={"60%"}>
    <h2 className="right-5 bg-gradient-to-r from-orange-500 to-emerald-800 bg-clip-text p-4 text-5xl font-extrabold text-transparent">
      Menu
    </h2>
    <hr className="rounded bg-gradient-to-r from-orange-500 to-emerald-800 p-1" />

    <Link
      className="block bg-gradient-to-r from-orange-500 to-emerald-800 bg-clip-text p-4 text-5xl font-extrabold text-transparent hover:text-white hover:underline"
      href="/"
    >
      Home
    </Link>
    <Link
      className="block bg-gradient-to-r from-orange-500 to-emerald-800 bg-clip-text p-4 text-5xl font-extrabold text-transparent hover:text-white hover:underline"
      href="/about"
    >
      About
    </Link>
    <Link
      className="block bg-gradient-to-r from-orange-500 to-emerald-800 bg-clip-text p-4 text-5xl font-extrabold text-transparent hover:text-white hover:underline"
      href="/contact"
    >
      Contact
    </Link>
    <Link
      className="block bg-gradient-to-r from-orange-500 to-emerald-800 bg-clip-text p-4 text-5xl font-extrabold text-transparent hover:text-white hover:underline"
      href="/Docs"
    >
      Docs
    </Link>
  </Menu>
);

export default HamburgerMenu;
