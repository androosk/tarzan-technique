import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function InfoBox() {
  return (
    <div
      className={`${inter.className} flex flex-col items-center py-10 justify-center w-screen items-center"`}
    >
      <div className="w-2/3 text-red-900 pb-10 font-light italic">
        <h1 className={`text-red-900 text-4xl leading-loose mx-auto`}>
          &quot;Couple&apos;s counseling saved my marriage&quot;
        </h1>
        <p className="text-end text-2xl">~ No One Ever</p>
      </div>
      <div className="w-auto text-center text-xl font-light px-20">
        <p className="py-4">
          You can do the traditional thing and go to couple&apos;s counseling,
          but that takes years, costs thousands of dollars and is ineffective at
          the thing you need to do most ... rescue your failing relationship.
          There&apos;s no question that tradition has failed us.
        </p>
        <p>My method offers a less traditional route with proven results!</p>
      </div>
    </div>
  );
}
