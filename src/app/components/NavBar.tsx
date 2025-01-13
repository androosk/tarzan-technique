"use client";
import { useState } from "react";
import { Fira_Sans } from "next/font/google";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const fira = Fira_Sans({ weight: ["400"], subsets: ["latin"] });

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="top-0 z-10 w-screen px-6 py-2">
      <div>
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Global"
        >
          <div
            className={`flex lg:min-w-0 lg:flex-1 w-72 md:w-auto ${fira.className}`}
            aria-label="Global"
          >
            <Link href="/" className="-m-1.5 p-1.5">
              <h1 className="text-lg md:text-2xl tracking-wide">
                Men&apos;s Relationship and Personal Growth Coach
              </h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${fira.className} hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12 text-xl`}
          >
            <Link href="/coaching" className="hover:text-red-900">
              Coaching
            </Link>

            <Link href="/videos" className="hover:text-red-900">
              Videos
            </Link>

            <Link href="/testimonials" className="hover:text-red-900">
              Testimonials
            </Link>

            <Link href="/about" className="hover:text-red-900">
              About
            </Link>

            <Link href="/contact" className="hover:text-red-900">
              Contact
            </Link>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div role="dialog" aria-modal="true">
            <div
              className={`fixed inset-0 z-10 overflow-y-auto px-6 py-6 lg:hidden bg-white ${fira.className}`}
            >
              <div className="flex h-9 items-center justify-between max-w-[90vw]">
                <Link href="/" className="-m-1.5 p-1.5">
                  <h1 className="text-xl tracking-wide">
                    Men&apos;s Relationship and Personal Growth Coach
                  </h1>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                  onClick={toggleMobileMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-8 w-8 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link
                      href="/coaching"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-400/10"
                      onClick={toggleMobileMenu}
                    >
                      Coaching
                    </Link>

                    <Link
                      href="/videos"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-400/10"
                      onClick={toggleMobileMenu}
                    >
                      Videos
                    </Link>

                    <Link
                      href="/testimonials"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-400/10"
                      onClick={toggleMobileMenu}
                    >
                      Testimonials
                    </Link>
                    <Link
                      href="/testimonials"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-400/10"
                      onClick={toggleMobileMenu}
                    >
                      Testimonials
                    </Link>
                    <Link
                      href="/contact"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-400/10"
                      onClick={toggleMobileMenu}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
