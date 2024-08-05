import React from "react";
import Roundchart from "@/app/components/landing/pieChart";
import RadialCharts from "@/app/components/landing/radialChart";
import BlurFade from "@/components/magicui/blur-fade";

const chartSection = () => {
  return (
    <section className="max-w-6xl mx-auto flex py-16 items-center   ">
      <div className="container">
        <div className="lg:max-w-2xl mx-auto">
          <div className="text-center">
            <BlurFade delay={0.25} inView>
              <h2 className="text-4xl font-bold">Our Approach to UX Design</h2>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
              <p className="my-5">
                Effective marketing and advertising materials. It is also a
                great tool to use when you want to present your.
              </p>
            </BlurFade>
          </div>
        </div>

        <div className="grid sm:grid-cols-12 gap-10 items-center">
          <div className="sm:col-span-4 col-span-2">
            <Roundchart />
          </div>
          <div className="sm:col-span-8 col-span-2">
            <div className="grid md:grid-cols-2">
              <RadialCharts />
              <RadialCharts />
              <RadialCharts />
              <RadialCharts />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default chartSection;
