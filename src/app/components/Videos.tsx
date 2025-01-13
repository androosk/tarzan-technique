import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Videos() {
  return (
    <div
      className={`${inter.className} text-4xl flex flex-col relative font-bold justify-center items-center h-content`}
    >
      {/* <h1>Videos</h1> */}
      {/* <div className="flex -mt-10">
        <Image
          src="/assets/images/videoframe.png"
          height={200}
          width={400}
          alt="video frame"
        />
      </div> */}
      <div className="md:my-4">
        <video width="600" controls>
          <source src="/assets/videos/andrew-unedited.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
