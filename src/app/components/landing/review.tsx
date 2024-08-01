import * as React from "react";
import { MdOutlineFormatQuote } from "react-icons/md";
import Google from "../../../../public/assets/google.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



export default function CarouselDemo() {
  return (
    <div className="max-w-5xl mx-auto pb-16">
      <Carousel>
        <div className="max-w-2xl mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="quote-icons text-center">
                    <MdOutlineFormatQuote className="text-4xl text-themeDarkGray my-4 mx-auto" />
                    <h4 className="text-1xl font-semibold">
                      There is a lot of exciting stuff going on in the stars
                      above us that make astronomy so much fun. The truth is the
                      universe is a constantly changing, moving, some would say
                      “living” thing because you just never know what you are
                      going to see on any given night of stargazing.
                    </h4>
                    <div className="client-logo mt-8">
                      <img
                        src={Google.src}
                        alt="Client Logo"
                        className="mx-auto w-auto h-[40px]"
                      />
                    </div>
                    <div className="client-name">
                      <h4 className="text-1xl font-semibold my-2">
                        Leslie Alexander
                      </h4>
                    </div>
                    <div className="client-position mb-3">
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
