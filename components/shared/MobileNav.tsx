"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="flex items-center">
        <Link href="/dashboard" className="sidebar-logo">
          <Image
            src="/p-1.jpeg"
            alt="logo"
            width={35}
            height={35}
            className="rounded-md"
          />
          <p className="text-2xl font-bold tracking-tighter">
            Prefect Pixelete
          </p>
        </Link>
      </div>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton />

          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <div className="flex items-center">
                  <Link href="/dashboard" className="sidebar-logo">
                    <Image
                      src="/p-1.jpeg"
                      alt="logo"
                      width={35}
                      height={35}
                      className="rounded-md"
                    />
                    <p className="text-2xl font-bold tracking-tighter">
                      Prefect Pixelete
                    </p>
                  </Link>
                </div>
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        className={`${
                          isActive && "gradient-text"
                        } p-18 flex whitespace-nowrap text-dark-700`}
                        key={link.route}
                      >
                        {/* <SheetClose asChild> */}
                          <Link
                            className="sidebar-link cursor-pointer"
                            href={link.route}
                          >
                            <Image
                              src={link.icon}
                              alt="logo"
                              width={24}
                              height={24}
                            />
                            {link.label}
                          </Link>
                        {/* </SheetClose> */}
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
