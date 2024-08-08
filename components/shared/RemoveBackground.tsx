import Link from "next/link";
import React from "react";

const RemoveBackground = () => {
  return (
    <div className="flex p-16 max-lg:px-2 justify-between px-16 items-center max-lg:flex-col max-lg:gap-5 gap-0">
      <div className="w-1/2 max-lg:w-full flex justify-center items-center">
        <div className="flex">
          
          <img
            alt="image before remove background"
            src={"/assets/images/bg-image.jpeg"}
            className="max-lg:w-1/2 max-lg:h-72 w-96 h-96"
          
          />
          <img
            alt="image after remove background"
            src={"/assets/images/bg-remove.png"}
            className="max-lg:w-1/2 max-lg:h-72 w-96 h-96"

       
          />
        </div>
      </div>
      <div className="w-1/2 max-lg:w-full max-lg:px-0 px-10  text-center">
        <h1 className="text-5xl font-bold mb-10 max-lg:mb-2 max-lg:text-2xl">
          Remove Background from Image Effortlessly
        </h1>

        <p className="font-semibold text-lg max-lg:text-sm ">
          Removing background from an image has never been easier with our AI
          background eraser. You can make background transparent and create
          stunning visuals in no time. It’s the best bg remover and png maker.
        </p>

        <div className="p-14 rounded-md  mt-5 border-2 border-black  border-dashed">
          <Link
            href={"/removeBackground"}
            className="bg-black/90 text-white p-3 px-5 rounded-md"
          >
            Upload Image
          </Link>
        </div>
      </div>` `
    </div>
  );
};

export default RemoveBackground;
