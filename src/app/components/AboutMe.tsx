import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function AboutMe() {
  return (
    <div
      className={`${inter.className} flex flex-col-reverse sm:flex-row bg-[#CCB9B9]`}
    >
      <div className="relative sm:flex">
        <Image
          src="/assets/images/IMG-0260.jpg"
          height={400}
          width={700}
          alt="Happy couple"
        />
      </div>
      <div className="md:w-[50vw] w-auto">
        <div className="px-10 py-4 md:py-0 items-center flex flex-col justify-center w-[100%] h-full">
          <div className="md:text-4xl text-red-900 text-3xl uppercase leading-8 flex flex-col md:flex-row">
            <h2 className="leading-relaxed font-bold text-center">
              who is&nbsp;
            </h2>
            <p className="leading-relaxed font-bold text-center">Andrew?</p>
          </div>
          <div className="mt-3 max-w-xl text-xl text-black font-sans font-extralight tracking-wide normal-case text-center md:leading-loose">
            <p>&quot;Me Tarzan&quot;</p>
            <p>Masculinity and Relationship Coach,</p>
            <p>Father, Husband</p>
          </div>
          <div className="mt-5 sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                href="https://calendly.com/tarzantechnique/new-client-intake-5-dollars-60-mins-brt-goals"
                target="_blank"
                className="border-4 rounded-xl shadow w-full flex items-center justify-center px-8 py-3 border-red-900 text-base text-white bg-black font-sans hover:bg-red-700 md:py-3 md:text-lg md:px-8 font-light tracking-wider"
              >
                Find out More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
