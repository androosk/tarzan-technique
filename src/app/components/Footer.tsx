import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer
      className={`${inter.className} py-6 bg-black text-white uppercase w-[100vw] text-center`}
    >
      <div className="flex justify-center flex-col md:flex-row">
        <p className="px-4">
          &copy; {new Date().getFullYear()} The Tarzan Technique
        </p>
        <p>
          <a
            href="https://calendly.com/tarzantechnique/new-client-intake-5-dollars-60-mins-brt-goals"
            className="text-blue-500 hover:text-blue-700"
          >
            Book A Call
          </a>
        </p>
      </div>
      <p className="pt-3 pb-5 md:pb-0 flex flex-col md:flex-row justify-center">
        Website Created by&nbsp;
        <a
          href="https://www.thirdandrewcreative.com"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          Third Andrew Creative Agency
        </a>
      </p>
    </footer>
  );
}
