import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";
import Jrui from "@/imgs/JRuiLogo.png";

export default function Hero() {
  return (
    <div className="container m-auto flex flex-wrap justify-around items-center py-4 px-8">
      <div className="w-full sm:w-[50%] pt-[76px] flex-col center md:block max-w-[469px] ">
        <Reveal className="flex">
          <h1 className=" text-6xl md:text-9xl font-bold mb-4">
            JR
            <span className="bg-black text-primary font-normal">ui</span>
          </h1>
        </Reveal>
        <Reveal className="flex" delay={0.4}>
          <p className="md:text-2xl text-left ">
            Elevate your UI experience with{" "}
            <span className=" font-semibold">JR</span>
            <span className="bg-black text-primary">ui</span> - the perfect
            companion for your Next.js, React, and TypeScript projects.
          </p>
        </Reveal>
        <Reveal className="flex" delay={0.6}>
          <Link
            className=" mt-4 btn-hover px-4 py-2 text-black bg-white
           border border-gradient"
            href="/docs"
          >
            Get Started
          </Link>
        </Reveal>
      </div>
      <div className="w-full sm:w-[50%]  md:pt-[85px] pt-4 center max-w-[469px] ">
        <Reveal>
          <Image src={Jrui} alt="It's JRui the Mascot!!" />
        </Reveal>
      </div>
    </div>
  );
}
