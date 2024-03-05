import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex flex-col text-center align-middle justify-center mx-auto p-8 pt-[85px]">
      <h1 className=" text-6xl md:text-9xl font-bold mb-4">
        JR
        <span className="bg-black text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
          ui
        </span>
      </h1>

      <p className="md:text-2xl">
        Elevate your UI experience with JRui - the perfect companion for your{" "}
        <br />
        Next.js, React, TypeScript, and Firebase projects.
      </p>
      <div className="mt-8">
        <Link
          className=" px-4 py-2 text-black bg-white
            border-blue-500 border-2 w-40 "
          href="/docs"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
