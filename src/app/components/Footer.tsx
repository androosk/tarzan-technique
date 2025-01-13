import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div>
      <div
        className={`${inter.className} py-6 bg-black flex items-center text-white uppercase w-[100vw] grid-cols-3 text-center`}
      >
        <p className="text-sm w-full">2024 tarzan technique</p>
        <p>|</p>
        <p className="text-sm w-full">site by third andrew creative</p>
      </div>
    </div>
  );
}
