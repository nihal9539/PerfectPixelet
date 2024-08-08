import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";

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
          <li className="group relative text-black p-2.5 font-semibold rounded-md">
            <a
              href="#"
              className="text-black p-2 font-semibold px-3.5 rounded-md"
            >
              Home
            </a>
            <div
              className=" absolute w-64 bg-white shadow-lg left-1/2 rounded-xl transform -translate-x-1/2 h-0 opacity-0 z-[-999] transition-all top-[4.7rem] ease duration-500 group-hover:z-10 group-hover:opacity-100 group-hover:h-72 flex justify-center items-center
            p-1
            "
            >
              <div className="group-hover:flex flex-col gap-5 font-normal text-lg hidden  ">
                {navLinks.slice(1, 6).map((link) => (
                  <div key={link.navLink} className="flex gap-4 ">
                    <Image
                      src={link.icon}
                      alt="logo"
                      width={24}
                      height={24}
                    />
                    <Link href={link?.navLink}>{link.label}</Link>
                  </div>
                ))}
              </div>
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
