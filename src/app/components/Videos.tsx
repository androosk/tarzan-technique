import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Videos() {
  return (
    <div
      className={`${inter.className} text-4xl flex flex-col relative py-10 font-bold justify-center items-center h-content bg-[#CCB9B9]`}
    >
      <h1>Videos</h1>
      <div className="flex -mt-10">
        <Image
          src="/assets/images/videoframe.png"
          height={200}
          width={400}
          alt="video frame"
        />
        <Image
          src="/assets/images/videoframe.png"
          height={200}
          width={400}
          alt="video frame"
        />
      </div>
      <div className="-mt-36 -mb-24">
        <Image
          src="/assets/images/videoframe.png"
          height={200}
          width={400}
          alt="video frame"
        />
      </div>
    </div>
  );
}
