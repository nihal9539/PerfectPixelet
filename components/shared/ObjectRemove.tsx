/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ObjectRemove = () => {
  return (
    <div className="flex p-16  max-lg:px-2 justify-between px-16 items-center max-lg:flex-col">
      <div className="w-1/2 max-lg:w-full max-lg:order-2 px-10 text-center">
      <h1 className="text-5xl font-bold mb-10 max-lg:text-2xl max-lg:mb-2">
      Object Remove - Perfect Your Photos
        </h1>

        <p className="font-semibold text-lg max-lg:text-sm">
          Effortlessly remove unwanted elements with PerfectPixelate's Object
          Remove tool. Clean up your photos and focus on what matters most.
          Achieve flawless results with just a few clicks. Try it now!
        </p>

        <div className="mt-8 ">
          <Link
            href={"/remove"}
            className="bg-black/90 text-white p-3 px-5 rounded-md"
          >
           Object Remove
          </Link>
        </div>
      </div>
      <div className="w-1/2 max-lg:w-full flex max-lg:order-1 justify-center items-center">
        <div className="flex flex-col gap-2">
          <img
            alt="image after remove background"
            src={"/assets/images/object-remove.jpg"}
            width={350}
            height={450}
          />
          <img
            alt="image before remove background"
            src={"/assets/images/object-remove-1.jpg"}
            width={350}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default ObjectRemove;
