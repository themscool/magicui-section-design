import React from "react";
import Logo from "../../../../public/assets/logo_icon.svg";
import Menu from "@/app/components/landing/menu";
import Image from "next/image";
import Drawer from "@/app/components/landing/drawer";

const header = () => {
  return (
    <main>
      <header className="py-3">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="">
              <a
                href="#"
                title="brand-logo"
                className="relative mr-6 flex items-center space-x-2"
              >
                <Image src={Logo} alt="Magic UI" className="w-auto h-[40px]" />
                <span className="font-bold text-xl">Sections</span>
              </a>
            </div>

            <div className=" hidden lg:block">
              <div className="flex items-center ">
                <nav className="mr-10">
                  <Menu />
                </nav>

                <div className="">
                  <button className="py-2 px-5 border rounded-lg font-semibold hover:bg-themePrimary hover:text-white ">
                    Button
                  </button>
                  <button className="bg-themePrimary text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-themePrimary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ml-3">
                    Button
                  </button>
                </div>
              </div>
            </div>
            <div className=" cursor-pointer block lg:hidden">
              <Drawer />
            </div>
          </div>
        </div>
      </header>
    </main>
  );
};

export default header;
