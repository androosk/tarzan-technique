import Link from "next/link";

export default function CtaBar() {
  return (
    <Link
      href="https://calendly.com/tarzantechnique/new-client-intake-5-dollars-60-mins-brt-goals"
      target="_blank"
    >
      <div className="bg-red-900 h-content py-4 px-6 flex flex-col justify-center items-center text-white font-sans font-extralight tracking-wide text-2xl md:text-3xl">
        <p className="text-left md:text-center pb-4">
          Unleash fun, freedom and find fulfillment with the proven &quot;Tarzan
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
