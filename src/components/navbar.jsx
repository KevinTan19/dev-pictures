"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      className={`w-full min-h-[60px] bg-black/10 backdrop-blur-md drop-shadow flex items-center px-10 gap-x-8 text-black sticky top-0`}
    >
      <Link href="/">
        <Image src="/logo.png" width={48} height={48} alt="" />
      </Link>
      <div className="flex gap-x-4">
        <Link href="/" className="font-semibold">
          Trending
        </Link>
        <Link href="/" className="font-semibold">
          Premiere
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
