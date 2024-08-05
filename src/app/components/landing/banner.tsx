import React from "react";
import User from "../../../../public/assets/user_icon.svg";
import imgContainer from "../../../../public/assets/img_container.svg";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
const banner = () => {
  return (
    <section className="max-w-6xl mx-auto py-8 flex items-center   ">
      <div className="container">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 items-center ">
          <div className="order-1 md:order-[0]">
            <BlurFade delay={0.25} inView>
              <h2 className="text-5xl font-bold">
                UI Design for Web & Mobile Apps
              </h2>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
            <p className="mt-5">
              Effective marketing and advertising materials. It is also a great
              tool to use when you want to present your.
            </p>
            </BlurFade>
            <BlurFade delay={0.25 * 3} inView>
            <div className="mt-5 block items-center sm:flex ">
              <button className="w-full sm:w-auto mr-3 bg-themePrimary text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-themePrimary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                Button
              </button>
              <div className="flex items-center justify-center sm:mt-0 mt-5">
                <div className=" flex -space-x-2 overflow-hidden">
                  <Image
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={User}
                    alt="avatar-icon"
                  />
                  <Image
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={User}
                    alt="avatar-icon"
                  />
                  <Image
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={User}
                    alt="avatar-icon"
                  />
                  <Image
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={User}
                    alt="avatar-icon"
                  />
                </div>
                <div className=" ml-3">
                  <span>700 000+ Users</span>
                </div>
              </div>
            </div>
            </BlurFade>
          </div>
          <div className="image-container ">
          <BlurFade delay={0.25 * 4} inView>
            <Image
              src={imgContainer}
              alt="banner-Image"
              className="w-auto h-[100%] mx-auto"
            />
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default banner;
