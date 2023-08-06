import React from "react";
import HamburgerMenu from "./HamburgerMenu";

const Header: React.FC = () => (
  <>
    <HamburgerMenu />
    <header
      className="header fixed h-20 w-full items-center text-center"
      style={{ zIndex: 1 }}
    >
      <div className="flex w-full justify-between">
        <h1 className="p-3 text-5xl text-white">My T3 App</h1>
        <nav>
          <ul className="flex justify-center">
            <li className="p-3 text-white">Home</li>
            <li className="p-3 text-white">About</li>
            <li className="relative p-3 text-white">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
