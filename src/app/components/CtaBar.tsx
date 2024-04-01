import Link from "next/link";

export default function CtaBar() {
  return (
    <Link href="#">
      <div className="bg-red-900 h-content py-4 flex flex-col justify-center items-center text-white font-sans font-extralight tracking-wide text-3xl">
        <p>
          Learn to live in abundance with my proven &quot;Tarzan Technique&quot;
        </p>
        <p>
          <span className="text-yellow-400 font-normal">Click here now</span> to
          book a consultation with Andrew
        </p>
      </div>
    </Link>
  );
}
