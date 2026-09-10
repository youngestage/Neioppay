import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Neioppay",
  description: "Houston, we have a problem. This page does not exist.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <Image
        src="/404bg.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right pointer-events-none select-none"
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar variant="dark" />

        <div className="flex flex-1 items-center px-4 sm:px-6 lg:px-8 xl:px-10 pb-16 sm:pb-20">
          <div className="w-full max-w-[1800px] mx-auto">
            <div className="max-w-[560px] sm:max-w-[620px]">
              <h1 className="font-mange font-bold text-white text-[7rem] sm:text-[9rem] md:text-[11rem] lg:text-[12.5rem] leading-none tracking-tight">
                404
              </h1>

              <h2 className="font-mange font-bold text-white text-2xl sm:text-3xl md:text-4xl tracking-tight mt-4 sm:mt-5">
                Houston, We Have A Problem
              </h2>

              <p className="font-montserrat font-normal text-sm sm:text-base md:text-[17px] text-white/65 max-w-[420px] mt-4 sm:mt-5 leading-relaxed">
                We dont yet support outerspace banking but we are willing to try
              </p>

              <Link
                href="/"
                className="mt-8 sm:mt-10 inline-flex items-center justify-center px-7 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-black font-montserrat font-medium text-sm sm:text-[15px] lowercase tracking-wide hover:bg-white/90 transition-colors"
              >
                home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
