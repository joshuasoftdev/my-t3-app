import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Header: React.FC = () => (
  <>
    <div className="lg:hidden xl:hidden">
      <HamburgerMenu />
    </div>
    <header
      className="fixed h-20 w-full items-center bg-gradient-to-r from-red-100 to-emerald-800 bg-clip-text p-4 text-center text-5xl font-extrabold text-transparent md:text-7xl"
      id="header"
      style={{ zIndex: 1 }}
    >
      <div className="mx-auto flex w-full flex-auto justify-between ">
        <img
          src="https://create.t3.gg/images/t3-light.svg"
          alt="Logo"
          className="ml-20 hidden h-14 w-14 pl-4 pt-7 lg:block xl:block"
        />
        <div className="container mx-auto flex flex-col items-center justify-center gap-12 xl:block">
          <h1 className="mx-auto pt-2 text-5xl text-white xl:ml-32">
            {" "}
            Joshua Jacobs
          </h1>
        </div>
        <nav className="hidden pr-2 pt-2 lg:block xl:block">
          <ul className="flex justify-center">
            <Link href="." className="p-3 text-2xl text-white">
              Home
            </Link>
            <Link href="/About" className="p-3 text-2xl text-white">
              About
            </Link>
            <Link href="/Contact" className="p-3 text-2xl text-white">
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
