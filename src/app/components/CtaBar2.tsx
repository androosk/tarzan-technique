import Link from "next/link";

export default function CtaBar() {
  return (
    <Link href="https://calendly.com/tarzantechnique/new-client-intake-5-dollars-60-mins-brt-goals">
      <div className="bg-red-900 h-content py-4 flex flex-col justify-center items-center text-white font-sans font-extralight tracking-wide text-3xl">
        <p>
          Learn to live in abundance with the proven &quot;Tarzan
          Technique&quot;
        </p>
        <p>
          <span className="text-yellow-400 font-normal">Click here now</span> to
          book a consultation with Andrew
        </p>
      </div>
    </Link>
  );
}
