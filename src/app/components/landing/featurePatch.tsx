import React from "react";
import MarqueClient from "@/app/components/landing/marqueClient";
import BlurFade from "@/components/magicui/blur-fade";

const featurePatch = () => {
  return (
    <section className="max-w-6xl mx-auto flex py-16 items-center overflow-hidden">
      <div className="container">
        <div className="lg:max-w-2xl mx-auto">
          <div className="text-center">
    
            <div className="flex items-center justify-center">
              <MarqueClient />
            </div>
            <BlurFade delay={0.25 * 5} inView>
            <p className="my-5">
              Effective marketing and advertising materials. It is also a great
              tool to use when you want to present your.
            </p>
            <a href="" className="text-themePrimary font-semibold">
              Learn more
            </a>
            </BlurFade>
       
          </div>
        </div>
      </div>
    </section>
  );
};

export default featurePatch;
