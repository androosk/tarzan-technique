import Link from "next/link";
import Image from "next/image";
import { Fira_Sans } from "next/font/google";
import { FaGlasses } from "react-icons/fa";

const frs = Fira_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className="flex relative items-center h-content py-6 sm:py-0 bg-black md:bg-gradient-to-r from-black from-50% via-black via-50% to-[#CCB9B9]">
      <div className={`w-screen px-10 items-center ${frs.className} z-10`}>
        <div className="md:text-6xl text-white sm:text-3xl text-2xl uppercase leading-8">
          <h2 className={`leading-relaxed`}>Change your patterns</h2>
          <p>Redefine your relationships</p>
          <p className="mt-3 max-w-xl text-xl text-white font-sans font-extralight tracking-wide normal-case">
            Empowering men to create a life of abundance and stronger families{" "}
          </p>
        </div>
        <div className="mt-5 flex items-center md:justify-start justify-center md:mt-8 py-4">
          <div className="rounded-md shadow">
            <Link
              href="https://calendly.com/tarzantechnique/new-client-intake-5-dollars-60-mins-brt-goals"
              target="_blank"
              className="border-4 rounded-xl shadow w-80 sm:w-full flex items-center justify-around sm:justify-around py-3 border-red-900 text-base text-white bg-black font-sans hover:bg-red-700 md:py-3 md:text-lg md:px-8 font-light tracking-wider"
            >
              <span>
                <FaGlasses className="text-2xl" />
              </span>
              &nbsp; Find a New Perspective
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="relative sm:flex hidden"> */}
      <div className="absolute bottom-0 right-0 sm:flex hidden">
        <Image
          className="h-[100px] w-[200px] md:h-[200px] md:w-[400px] lg:h-[300px] lg:w-[525px]"
          src="/assets/images/subject.png"
          height={400}
          width={800}
          alt="Happy couple"
        />
      </div>
    </div>
  );
}
