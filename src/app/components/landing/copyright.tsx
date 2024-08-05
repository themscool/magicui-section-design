import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
const copyright = () => {
  return (
    <BlurFade delay={0.25 * 5} inView>
      <section className="max-w-6xl mx-auto pb-16 pt-10 border-t sm:px-10 px-5">
        <div className="grid md:grid-cols-2  ">
          <div className=" mb-3">
            <p className="text-themeDarkGray">
              &copy; Copyright 2023 <a href="">Pixsellz</a> – High-Quality
              Resources for UI Designers
            </p>
          </div>
          <div className="links-widget">
            <ul className="flex justify-start md:justify-end">
              <li className="mr-3 md:mx-4 text-themeDarkGray">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Link One
                </a>
              </li>
              <li className="mr-3 md:mx-4 text-themeDarkGray">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Link Two
                </a>
              </li>
              <li className="mr-3 md:mx-4 text-themeDarkGray">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Link Three
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </BlurFade>
  );
};

export default copyright;
