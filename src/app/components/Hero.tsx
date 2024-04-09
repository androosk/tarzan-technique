import Link from "next/link";
import Image from "next/image";
import { FaGlasses } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex relative items-center h-content bg-[#CCB9B9] py-6 sm:py-0">
      <div className=" w-screen px-10 items-center">
        <div className="md:text-4xl text-red-900 sm:text-3xl text-xl uppercase leading-8">
          <h2 className="leading-relaxed">Change your patterns</h2>
          <p>Redefine your relationships</p>
          <p className="mt-3 max-w-xl text-xl text-black font-sans font-extralight tracking-wide normal-case">
            Empowering men to create a life of abundance and stronger families{" "}
          </p>
        </div>
        <div className="mt-5 sm:flex sm:justify-center items-center md:mt-8">
          <div className="rounded-md shadow w-40 sm:w-max">
            <Link
              href="https://calendly.com/tarzantechnique/new-client-intake-5-dollars-60-mins-brt-goals"
              target="_blank"
              className="border-4 rounded-xl shadow w-full flex items-center justify-between py-3 border-red-900 text-base text-white bg-black font-sans hover:bg-red-700 md:py-3 md:text-lg md:px-8 font-light tracking-wider "
            >
              <span>
                <FaGlasses />
              </span>
              &nbsp; New Perspective
            </Link>
          </div>
        </div>
      </div>
      <div className="relative sm:flex hidden">
        <Image
          src="/assets/images/subject.png"
          height={400}
          width={800}
          alt="Happy couple"
        />
      </div>
    </div>
  );
}
