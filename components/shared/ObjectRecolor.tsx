import Image from "next/image";
import Link from "next/link";
import React from "react";

const ObjectRecolor = () => {
  return (
    <div className="flex p-16  justify-between px-16 items-center max-lg:flex-col">
      <div className="w-1/2 max-lg:w-full flex justify-center items-center">
        <div className="flex gap-2">
          <img src={"/assets/images/recolor.jpg"} className="w-72" alt="" />
          <img src={"/assets/images/recolor-1.jpg"} className="w-72" alt="" />
        </div>
      </div>
      <div className="w-1/2 max-lg:w-full px-10 text-center">
        <h1 className="text-5xl font-bold mb-10">
          Recolor Pictures Easily and Professionally{" "}
        </h1>

        <p className="font-semibold text-lg">
          PerfectPixelate’s color replacement tool lets you quickly recolor
          images and transform colors professionally. Upload your photos and
          apply desired colors to any part in seconds. Try PerfectPixelate for
          fast, precise color changes.
        </p>

        <div className="mt-8">
          <Link
            href={"/recolor"}
            className="bg-black/90 text-white p-3 px-5 rounded-md"
          >
            Upload Image
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ObjectRecolor;
