import React from "react";
import UserMarque from "@/app/components/landing/userFlowMarquee";
import BlurFade from "@/components/magicui/blur-fade";
function userFlow() {
  return (
    <section className="max-w-6xl mx-auto flex py-16 items-center   ">
      <div className="container">
        <div className="lg:max-w-2xl mx-auto pb-5">
          <div className="text-center">
            <BlurFade delay={0.25} inView>
              <h2 className="text-4xl font-bold">
                User Flows and Navigational Structures
              </h2>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
              <p className="my-5">
                Effective marketing and advertising materials. It is also a
                great tool to use when you want to present your.
              </p>
            </BlurFade>
          </div>
        </div>
        <UserMarque />
      </div>
    </section>
  );
}

export default userFlow;
