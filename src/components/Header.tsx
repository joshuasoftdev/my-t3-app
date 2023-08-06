import React from "react";
import HamburgerMenu from "./HamburgerMenu";

const Header: React.FC = () => (
  <>
    <div className="lg:hidden xl:hidden">
      <HamburgerMenu />
    </div>
    <header
      className="header fixed h-20 w-full items-center text-center"
      style={{ zIndex: 1 }}
    >
      <div className="mx-auto flex w-full flex-auto justify-between ">
        <img
          src="https://create.t3.gg/images/t3-light.svg"
          alt="Logo"
          className="hidden h-14 w-14 pl-4 lg:block xl:block"
        />
        <div className="container mx-auto flex flex-col items-center justify-center gap-12 xl:block">
          <h1 className="mx-auto text-5xl text-white xl:ml-44">
            {" "}
            Joshua Jacobs
          </h1>
        </div>
        <nav className="hidden lg:block xl:block">
          <ul className="flex justify-center">
            <li className="p-3 text-2xl text-white">About</li>
            <li className="p-3 text-2xl text-white">Home</li>
            <li className="relative p-3 text-2xl text-white">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
