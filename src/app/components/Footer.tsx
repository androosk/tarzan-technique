import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div>
      <div
        className={`${inter.className} h-44 bg-red-900 flex items-center text-white justify-evenly uppercase text-xl`}
      >
        <p>2024 tarzan technique</p>
        <p>|</p>
        <p>site by third andrew creative</p>
      </div>
    </div>
  );
}
