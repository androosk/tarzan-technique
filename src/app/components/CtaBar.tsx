import Link from "next/link";

export default function CtaBar2() {
  return (
    <Link
      href="https://calendly.com/tarzantechnique/new-client-intake-5-dollars-60-mins-brt-goals"
      target="_blank"
    >
      <div className="bg-red-900 h-content py-4 px-6 flex flex-col justify-center items-center text-white font-sans font-extralight tracking-wide text-2xl md:text-3xl">
        <p className="text-left md:text-center pb-4">
          Learn to change your broken patterns using the proven Tarzan Technique
          and set new precedence in your relationship!
        </p>
        <p>
          <span className="text-yellow-400 font-normal">Click here</span> to
          book a call with Andrew today
        </p>
      </div>
    </Link>
  );
}
