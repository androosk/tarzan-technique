import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Testimonials() {
  return (
    <div
      className={`${inter.className} flex flex-col justify-center items-center px-24 pb-10`}
    >
      <h1 className="py-10 text-4xl">What Clients Say</h1>
      <div className="flex justify-around gap-4 w-full items-center">
        <div className="h-80 flex flex-col items-center justify-around w-1/3 border-4 border-black rounded-3xl">
          <div
            className="rounded-full w-1/4 bg-center bg-no-repeat bg-cover border-2 border-black h-1/4 -mt-16"
            style={{ backgroundImage: "url(/assets/images/karsten.jpg)" }}
          ></div>
          <p className="px-10">
            Andrew has become a dear friend and a brother. He has helped me
            change my life to what I want on my terms and according to my own
            values
          </p>
          <p>Aidan Barr</p>
        </div>
        <div className="h-80 flex flex-col items-center justify-around w-1/3 border-4 border-black rounded-3xl">
          <div
            className="rounded-full w-1/4 bg-center bg-no-repeat bg-cover border-2 border-black h-1/4 -mt-16"
            style={{ backgroundImage: "url(/assets/images/harry.jpg)" }}
          ></div>
          <p className="px-10">
            Andrew helped me out in a dark time after my wife came to me one day
            and said, “I can’t take this anymore. We’re done.” He helped me get
            my relationship back.
          </p>
          <p>Ryan Kain</p>
        </div>
        <div className="h-80 flex flex-col items-center justify-around w-1/3 border-4 border-black rounded-3xl">
          <div
            className="rounded-full w-1/4 bg-harry bg-center bg-no-repeat bg-cover border-2 border-black h-1/4 -mt-16"
            style={{ backgroundImage: "url(/assets/images/fred.jpg)" }}
          ></div>
          <p className="px-10">
            I struggled for years with what it meant to be a man. Andrew got me
            clear on what masculinity is and how a man lives and loves. He
            taught me the true meaning of confidence.
          </p>
          <p>David Warren</p>
        </div>
      </div>
    </div>
  );
}
