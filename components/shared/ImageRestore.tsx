import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageRestore = () => {
  return (
    <div className="flex p-16 max-lg:px-2 justify-between px-16 max-lg:gap-10 gap-0 items-center max-lg:flex-col">
      <div className="w-1/2 max-lg:w-full px-10 max-lg:px-2 text-center max-lg:order-5">
        <h1 className="text-5xl font-bold mb-10 max-lg:text-2xl max-lg:mb-2">Free AI Photo Restoration </h1>

        <p className="font-semibold text-lg max-lg:text-sm">
          Have old or damaged photos? PerfectPixelate offers a free, AI-powered
          photo restoration service to revive your memories. Our advanced
          algorithms repair blurriness, fading, and damage, delivering
          high-quality images. Your privacy is our priority, and we ensure your
          data is secure. Rediscover your past with PerfectPixelate and keep
          your memories alive for generations.
        </p>

        <div className="mt-10">
          <Link
            href={"/restore"}
            className="bg-black/90 text-white p-3 px-5 rounded-md"
          >
            Try Now
          </Link>
        </div>
      </div>
      <div className="w-1/2 max-lg:w-full flex justify-center items-center max-lg:order-1">
        <div className="flex">
          <img
            alt="image before remove background"
            src={"/assets/images/upscale.jpeg"}
            className="max-lg:w-1/2 w-60"
          />
          <img
            alt="image after remove background"
            src={"/assets/images/upscale-2.jpeg"}
            className="max-lg:w-1/2 w-60"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageRestore;
