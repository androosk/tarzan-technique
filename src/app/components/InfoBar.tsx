import Link from "next/link";

export default function InfoBar() {
  return (
    <Link href="https://calendly.com/tarzantechnique/new-client-intake-5-dollars-60-mins-brt-goals">
      <div className="bg-red-900 min-h-20 flex justify-center items-center text-white font-sans font-extralight tracking-wide uppercase sm:text-3xl">
        <h1 className="text-center">
          click <span className="text-yellow-400 font-normal">here</span> now to
          book a consultation with andrew
        </h1>
      </div>
    </Link>
  );
}
