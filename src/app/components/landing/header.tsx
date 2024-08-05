"use client";

import React, { useState, useEffect } from "react";
import Logo from "../../../../public/assets/logo_icon.svg";
import Menu from "@/app/components/landing/menu";
import Image from "next/image";
import Drawer from "@/app/components/landing/drawer";
import BlurFade from "@/components/magicui/blur-fade";

const header = () => {
  const [addBorder, setAddBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setAddBorder(true);
      } else {
        setAddBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className={`pb-2 pt-5 sticky top-0 z-40 bg-white/5 backdrop-blur ${addBorder ? 'border-b' : ''}`}>
      <BlurFade delay={0.25} inView>
        <header className="">
          <div className="container">
            <div className="flex justify-between items-center">
              <div className="">
                <a
                  href="#"
                  title="brand-logo"
                  className="relative mr-6 flex items-center space-x-2"
                >
                  <Image
                    src={Logo}
                    alt="Magic UI"
                    className="w-auto h-[40px]"
                  />
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
              <div className="mt-2 cursor-pointer block lg:hidden">
                <Drawer />
              </div>
            </div>
          </div>
        </header>
      </BlurFade>
    </main>
  );
};

export default header;
