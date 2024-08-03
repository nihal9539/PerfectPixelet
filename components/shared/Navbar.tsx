import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-[99999] px-10">
      <div className=" mx-auto px-4 py-2  flex justify-between items-center">
        {/* Left Side: Company Icon */}
        <div className="flex items-center">
          <Link href="/" className="sidebar-logo">
            <Image
              src="/p-1.jpeg"
              alt="logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <p className="text-3xl font-bold tracking-tighter">
              Prefect Pixelete
            </p>
          </Link>
        </div>

        {/* Center: Navigation Elements */}
        <ul className="flex space-x-6 hover:[&>*]:bg-gray-200 text-2xl  z-[999]">
          <li className="group  text-black p-2.5 font-semibold rounded-md">
            <a
              href="#"
              className="text-black p-2 font-semibold px-3.5 rounded-md"
            >
              Home
            </a>
            <div className=" absolute w-screen left-0 bg-white shadow-lg h-0 opacity-0 z-[-999] transition-all top-[5rem] ease duration-500 group-hover:z-10 group-hover:opacity-100 group-hover:h-96">
              hello
            </div>
          </li>

          <li className="text-black p-2.5 font-semibold px-3.5 rounded-md">
            <a href="#">About</a>
          </li>
          <li className="text-black p-2.5 font-semibold px-3.5 rounded-md">
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Right Side: Search Bar */}
        <div className="mx-4 flex items-center  space-x-3">
          {/* <Button className={cn("text-black text-lg p-5 bg-gray-200")}>
            Login
          </Button> */}
          <SignedOut>
            <Button className={cn("text-black text-lg p-5 bg-gray-200")}>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <Button className={cn("text-lg bg-black p-5")}>
            <Link href={"/dashboard"}>Start Creating</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
