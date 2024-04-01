import Link from "next/link";

export default function CtaBar2() {
  return (
    <Link href="#">
      <div className="bg-red-900 h-content py-4 flex flex-col justify-center items-center text-white font-sans font-extralight tracking-wide text-3xl">
        <p>Learn to change your broken patterns using my proven</p>
        <p>Tarzan Technique and set a new precedence in your relationship!</p>
        <p>
          <span className="text-yellow-400 font-normal">Click here</span> to
          book a call with Andrew today
        </p>
      </div>
    </Link>
  );
}
