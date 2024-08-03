"use client";
import HomeGridPattern from "@/components/shared/HomeGridPattern";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import { ItemCircle } from "@/components/shared/ItemCircle";
import BlurIn from "@/components/magicui/blur-in";
import ShinyButton from "@/components/magicui/shiny-button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const transition = { type: "spring", duration: 3 };

  return (
    <>
      {/* <Navbar /> */}
      <div className="">
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border-none bg-background  max-lg:px-2">
          <div className="z-10 whitespace-pre-wrap text-center font-medium text-black dark:text-white bg-transparent">
            <div className="mb-10 px-28">
              <BlurIn className="font-bold text-black dark:text-white" />
            </div>
            <div className="text-xl mb-16 max-lg:px-0 px-20">
              <motion.p
                className=""
                initial={{ opacity: 0, x: "100%" }}
                transition={{ type: "tween", duration: 1, delay: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Explore Perfect Pixelate’s new AI Powered Generative Tools
                unleashing limitless creative possibilities. Perfect for both
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: "-100%" }}
                transition={{ type: "tween", duration: 1, delay: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                beginners and seasoned professionals, these tools redefine
                artistic expression with intuitive AI technology,
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: "100%" }}
                transition={{ type: "tween", duration: 1, delay: 1.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                revolutionizing your creative process.
              </motion.p>
            </div>
            <motion.div
              className=""
              initial={{ opacity: 0, y: "100%" }}
              transition={{ type: "tween", duration: 1, delay: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ShinyButton text="Start Creating" className="" />
            </motion.div>
          </div>
          <HomeGridPattern />
        </div>
        <div className="flex h-screen justify-between px-16 items-center max-lg:flex-col">
          <div className="w-1/2 max-lg:w-full px-10 text-center">
            <h1 className="text-5xl font-bold mb-10">
              Transform Images Instantly <br /> with AI Magic
            </h1>

            <p className="font-semibold text-lg">
              Elevate your photos effortlessly with Perfect Pixelate’s advanced
              AI tools. Whether you’re removing backgrounds, restoring old
              images, or making detailed adjustments, our technology delivers
              seamless, high-quality results in seconds just one click is all it
              takes.
            </p>
          </div>
          <div className="w-1/2 max-lg:w-full">
            <ItemCircle />
          </div>
        </div>
        <div className="flex h-screen justify-between px-16 items-center max-lg:flex-col">
          <div className="w-1/2 max-lg:w-full flex justify-center items-center">
            <div className="flex">
              <Image
                alt="image before remove background"
                src={"/assets/images/bg-image.jpeg"}
                width={250}
                height={450}
              />
              <Image
                alt="image after remove background"
                src={"/assets/images/bg-remove.png"}
                width={250}
                height={450}
              />
            </div>
          </div>
          <div className="w-1/2 max-lg:w-full px-10 text-center">
            <h1 className="text-5xl font-bold mb-10">
              Remove Background from Image Effortlessly
            </h1>

            <p className="font-semibold text-lg">
              Removing background from an image has never been easier with our
              AI background eraser. You can make background transparent and
              create stunning visuals in no time. It’s the best bg remover and
              png maker.
            </p>

            <div className="p-14 rounded-md  mt-5 border-2 border-black  border-dashed">
              <Link href={"/remove-background"} className="bg-black/90 text-white p-3 px-5 rounded-md">Upload Image</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
