"use client";
import HomeGridPattern from "@/components/shared/HomeGridPattern";
import React from "react";
import { ItemCircle } from "@/components/shared/ItemCircle";
import BlurIn from "@/components/magicui/blur-in";
import ShinyButton from "@/components/magicui/shiny-button";
import { motion } from "framer-motion";
import RemoveBackground from "@/components/shared/RemoveBackground";
import ImageRestore from "@/components/shared/ImageRestore";
import GenerateFill from "@/components/shared/GenerateFill";
import ObjectRemove from "@/components/shared/ObjectRemove";
import ObjectRecolor from "@/components/shared/ObjectRecolor";
import TransformImage from "@/components/shared/TransformImage";

const Home = () => {
  const transition = { type: "spring", duration: 3 };

  return (
    <>
      <div className="relative flex h-[90vh] w-full items-center justify-center overflow-hidden rounded-lg border-none bg-background  max-lg:px-2">
        <div className="z-10 whitespace-pre-wrap text-center font-medium text-black dark:text-white bg-transparent">
          <div className="mb-10 px-28 max-lg:px-2">
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
      <TransformImage />
      <RemoveBackground />
      <ImageRestore />
      <GenerateFill />
      <ObjectRemove />
      <ObjectRecolor />
    </>
  );
};

export default Home;
