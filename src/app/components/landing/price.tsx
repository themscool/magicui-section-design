import React from "react";
import { FaStar } from "react-icons/fa";
import BlurFade from "@/components/magicui/blur-fade";

const price = () => {
  return (
    <section className="max-w-6xl mx-auto pb-16 sm:px-10 px-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:2 gap-4">
        <BlurFade delay={0.25} inView>
          <div className="rounded-2xl  border-themeGray border-[0.5px] py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-gray-600">START</p>
              <p className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  Free
                </span>
              </p>

              <p className="mt-6 text-xs leading-5 text-gray-600">
                Next 3 months
              </p>

              <ul className="mt-5">
                <li className="my-2 text-sm">Feature One</li>
                <li className="my-2 text-sm">Feature Two</li>
                <li className="my-2 text-sm">Feature Three</li>
              </ul>

              <div className="w-full bg-themeGray h-[1px] mt-4"></div>

              <p className="mt-6 text-xs leading-5 text-gray-600">
                Two line long header example for your web project
              </p>

              <button className="py-2 px-10 mt-4 border rounded-lg hover:bg-themePrimary hover:text-white font-semibold ">
                Subscribe
              </button>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <div className="rounded-2xl  border-themePrimary border-[0.5px] py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 relative">
            <div className="absolute top-0 right-0 bg-themePrimary py-1 px-4 rounded-xl flex items-center">
              <FaStar className="text-white" />
              <span className="text-white ml-1 font-sans font-semibold">
                Popular
              </span>
            </div>
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-gray-600">PRO</p>
              <p className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  $349
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  / USD
                </span>
              </p>

              <p className="mt-6 text-xs leading-5 text-gray-600">
                Charging $456 per/y
              </p>

              <ul className="mt-5">
                <li className="my-2 text-sm">Feature One</li>
                <li className="my-2 text-sm">Feature Two</li>
                <li className="my-2 text-sm">Feature Three</li>
              </ul>

              <div className="w-full bg-themeGray h-[1px] mt-4"></div>

              <p className="mt-6 text-xs leading-5 text-gray-600">
                Two line long header example for your web project
              </p>

              <button className="mt-4 bg-themePrimary text-white font-semibold px-10 py-2 rounded-md shadow hover:bg-themePrimary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ">
                Subscribe
              </button>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView>
          <div className="rounded-2xl  border-themeGray border-[0.5px] py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-gray-600">BUSINESS</p>
              <p className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  $78
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  / USD
                </span>
              </p>

              <p className="mt-6 text-xs leading-5 text-gray-600">
                Charging $456 per/y
              </p>

              <ul className="mt-5">
                <li className="my-2 text-sm">Feature One</li>
                <li className="my-2 text-sm">Feature Two</li>
                <li className="my-2 text-sm">Feature Three</li>
              </ul>

              <div className="w-full bg-themeGray h-[1px] mt-4"></div>

              <p className="mt-6 text-xs leading-5 text-gray-600">
                Two line long header example for your web project
              </p>

              <button className="py-2 px-10 mt-4 border rounded-lg hover:bg-themePrimary hover:text-white font-semibold ">
                Subscribe
              </button>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default price;
