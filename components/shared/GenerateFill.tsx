/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const GenerateFill = () => {
  return (
    <div className="flex p-16 max-lg:px-2  justify-between px-16 items-center max-lg:flex-col">
      <div className="w-1/2 max-lg:w-full flex justify-center items-center">
        <div className="flex gap-1 ">
          <img
            alt="image before remove background"
            src={"/assets/images/genfill-nature-1.jpg"}
           className="max-lg:w-40 w-60"
          />
          <img
            alt="image after remove background"
            src={"/assets/images/genfill-nature-2.jpg"}
            className="max-lg:w-48 w-80"
          />
        </div>
      </div>
      <div className="w-1/2 max-lg:w-full px-10 max-lg:px-2 text-center">
        <h1 className="text-5xl font-bold mb-10 max-lg:text-2xl max-lg:mb-2">
          Generative Fill - Transform Your Images
        </h1>

        <p className="font-semibold text-lg max-lg:text-sm">
          Unlock the potential of your photos with PerfectPixelate's Generative
          Fill. Expand and reshape your visuals effortlessly, adding stunning
          new elements with just a few clicks. Explore endless creative
          possibilities and make your images truly extraordinary with
          PerfectPixelate.
        </p>

        <div className="mt-10 ">
          <Link
            href={"/removeBackground"}
            className="bg-black/90 text-white p-3 px-5 rounded-md"
          >
            Generative Fill
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GenerateFill;
