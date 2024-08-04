import * as React from "react";
import { MdOutlineFormatQuote } from "react-icons/md";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

export default function CarouselDemo() {
  return (
    <div className="max-w-5xl mx-auto pb-16">
      <Carousel>
        <div className="max-w-2xl mx-auto">
          <CarouselContent>
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className=" text-center">
                    <MdOutlineFormatQuote className="text-4xl text-themeDarkGray my-4 mx-auto" />
                    <h4 className="text-1xl font-semibold">
                      There is a lot of exciting stuff going on in the stars
                      above us that make astronomy so much fun. The truth is the
                      universe is a constantly changing, moving, some would say
                      “living” thing because you just never know what you are
                      going to see on any given night of stargazing.
                    </h4>
                    <div className="mt-8">
                      <Image
                        width={0}
                        height={40}
                        key={index}
                        src={`https://cdn.magicui.design/companies/${
                          companies[index % companies.length]
                        }.svg`}
                        alt={`${companies[index % companies.length]} Logo`}
                        className="mx-auto w-auto h-[40px] grayscale opacity-30"
                      />
                    </div>
                    <div className="">
                      <h4 className="text-1xl font-semibold my-2">
                        Leslie Alexander
                      </h4>
                    </div>
                    <div className=" mb-3">
                      <span className="text-sm text-themeDarkGray">
                        UI Designer
                      </span>
                    </div>
                    <a href="" className="text-themePrimary font-semibold">
                      Learn more
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <div className="md:block hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
