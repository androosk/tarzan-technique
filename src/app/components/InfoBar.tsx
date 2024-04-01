import Link from "next/link";

export default function InfoBar() {
  return (
    <Link href="#">
      <div className="bg-red-900 min-h-20 flex justify-center items-center text-white font-sans font-extralight tracking-wide uppercase text-3xl">
        <h1>
          click <span className="text-yellow-400 font-normal">here</span> now to
          book a consultation with andrew
        </h1>
      </div>
    </Link>
  );
}
