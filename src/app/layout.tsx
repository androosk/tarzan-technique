import type { Metadata, Viewport } from "next";
import { Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import InfoBar from "./components/InfoBar";

const frl = Frank_Ruhl_Libre({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Tarzan Technique",
  description: "Men's Relationship and Personal Growth Coach",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${frl.className} flex min-h-screen flex-col overflow-x-hidden`}
      >
        <InfoBar />
        {/* <Navbar /> */}
        <div>{children}</div>
      </body>
    </html>
  );
}
