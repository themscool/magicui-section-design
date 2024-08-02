import React from "react";
import Logo from "../../../../public/assets/logo_icon.svg";

import Menu from "@/app/components/landing/menu";
import { IoMenuSharp } from "react-icons/io5";

const header = () => {
  return (
    <main>
      <header className="py-3">
        <div className="container">
          <div className="navbar flex justify-between items-center">
            <div className="brand-logo">
              <a
                href="#"
                title="brand-logo"
                className="relative mr-6 flex items-center space-x-2"
              >
                <img
                  src={Logo.src}
                  alt="Magic UI"
                  className="w-auto h-[40px]"
                />
                <span className="font-bold text-xl">Sections</span>
              </a>
            </div>

            <div className="desktop-menu hidden lg:block">
              <div className="flex items-center ">
                <nav >
                  <Menu />
                </nav>

                <div className="call-actions ">
                  <button className="py-2 px-5 border rounded-lg font-semibold hover:bg-themePrimary hover:text-white ">
                    Button
                  </button>
                  <button className="bg-themePrimary text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-themePrimary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ml-3">
                    Button
                  </button>
                </div>
              </div>
            </div>
            <div className="mobile-menu cursor-pointer block lg:hidden">
              <IoMenuSharp className="text-2xl text-themeDarkGray" />
            </div>
          </div>
        </div>
      </header>
    </main>
  );
};

export default header;
