import React from "react";
import imgContainer from "../../../../public/assets/img_container.svg";

const listing = () => {
  return (
    <section className="max-w-6xl mx-auto flex py-8 items-center">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="left-side order-1 md:order-[0]">
            <div className="content-box my-6">
              <div className="content-item flex items-center">
                <div className="mr-4">
                  <div className="w-[50px] h-[50px] bg-themeGray rounded-full"></div>
                </div>
                <div className="content-info">
                  <h4 className="font-bold text-xl">Title</h4>
                  <p>
                    Effective marketing and advertising materials. It is also a
                    great tool to use when you want to present your.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-box my-6">
              <div className="content-item flex items-center">
                <div className="mr-4">
                  <div className="w-[50px] h-[50px] bg-themeGray rounded-full"></div>
                </div>
                <div className="content-info">
                  <h4 className="font-bold text-xl">Title</h4>
                  <p>
                    Effective marketing and advertising materials. It is also a
                    great tool to use when you want to present your.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-box my-6">
              <div className="content-item flex items-center">
                <div className="mr-4">
                  <div className="w-[50px] h-[50px] bg-themeGray rounded-full"></div>
                </div>
                <div className="content-info">
                  <h4 className="font-bold text-xl">Title</h4>
                  <p>
                    Effective marketing and advertising materials. It is also a
                    great tool to use when you want to present your.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
             <div className="img-container ">
                <img src={imgContainer.src} alt="image-container" className="w-auto h-[100%]" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default listing;
