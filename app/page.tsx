import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex flex-col text-center align-middle justify-center mx-auto p-8 pt-[85px]">
      <Reveal>
        <h1 className=" text-6xl md:text-9xl font-bold mb-4">
          JR
          <span className="bg-black text-primary">ui</span>
        </h1>
      </Reveal>
      <Reveal delay={0.4}>
        <p className="md:text-2xl">
          Elevate your UI experience with JRui - the perfect companion for your{" "}
          <br />
          Next.js, React, TypeScript, and Firebase projects.
        </p>
      </Reveal>
      <Reveal delay={0.6}>
        <div className="mt-8">
          <Link
            className=" px-4 py-2 text-black bg-white
            border-blue-500 border-2 w-40 "
            href="/docs"
          >
            Get Started
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
