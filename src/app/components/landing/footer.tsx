import React from "react";
import Logo from "../../../../public/assets/logo_icon.svg";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";

const footer = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 sm:px-10 px-5">
      <div>
        <BlurFade delay={0.25} inView>
          <a
            href="#"
            title="brand-logo"
            className="relative mr-6 flex items-center space-x-2"
          >
            <Image src={Logo} alt="Magic UI" className="w-auto h-[40px]" />
            <span className="font-bold text-xl">Sections</span>
          </a>
        </BlurFade>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 mt-8">
        <BlurFade delay={0.25 * 2} inView>
          <div className=" mb-5">
            <h4 className=" font-semibold">Title</h4>
            <ul>
              <li className="my-2">
                <a href="" title="links">
                  Link One
                </a>{" "}
              </li>
              <li className="my-2">
                <a href="" title="links">
                  Link Two
                </a>{" "}
              </li>
            </ul>
          </div>
        </BlurFade>

        <BlurFade delay={0.25 * 3} inView>
          <div className=" mb-5">
            <h4 className=" font-semibold">Title</h4>
            <ul>
              <li className="my-2">
                <a href="" title="links">
                  Link One
                </a>{" "}
              </li>
              <li className="my-2">
                <a href="" title="links">
                  Link Two
                </a>{" "}
              </li>
              <li className="my-2">
                <a href="" title="links">
                  Link Three
                </a>{" "}
              </li>
              <li className="my-2">
                <a href="" title="links">
                  Link Four
                </a>{" "}
              </li>
              <li className="my-2">
                <a href="" title="links">
                  Link Five
                </a>{" "}
              </li>
            </ul>
          </div>
        </BlurFade>

        <BlurFade delay={0.25 * 4} inView>
          <div className=" mb-5">
            <h4 className=" font-semibold">Title</h4>
            <ul>
              <li className="my-2">
                <a href="" title="links">
                  Link One
                </a>{" "}
              </li>
              <li className="my-2">
                <a href="" title="links">
                  Link Two
                </a>{" "}
              </li>
              <li className="my-2">
                <a href="" title="links">
                  Link Three
                </a>{" "}
              </li>
            </ul>
          </div>
        </BlurFade>

        <BlurFade delay={0.25 * 5} inView>
          <div className=" mb-5">
            <h4 className="font-semibold">Social</h4>
            <ul>
              <li className="my-2">
                <a href="#" title="Twitter" className="flex items-center">
                  {" "}
                  <FaTwitter className="text-themeDarkGray" />{" "}
                  <span className="ml-2"> Twitter</span>
                </a>
              </li>
              <li className="my-2">
                <a href="#" title="Instagram" className="flex items-center">
                  {" "}
                  <RiInstagramFill className="text-themeDarkGray" />{" "}
                  <span className="ml-2"> Instagram</span>
                </a>{" "}
              </li>
              <li className="my-2">
                <a href="#" title="Youtube" className="flex items-center">
                  {" "}
                  <FaYoutube className="text-themeDarkGray" />
                  <span className="ml-2"> Youtube</span>{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default footer;
