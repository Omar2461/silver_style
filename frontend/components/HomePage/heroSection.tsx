import Image from "next/image";
import localFont from "next/font/local";

import { GoArrowRight } from "react-icons/go";

import Button from "../General/Button";
import Link from "next/link";

const myFont = localFont({
  src: "../../app/fonts/VeganStylePersonalUse-5Y58.ttf",
  display: "swap",
});

function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-start mt-10 md:mt-20">
      <div className="flex flex-col w-fit max-w-xl md:ml-10">
        <h1
          className={`${myFont.className} text-black text-[33px] md:text-6xl lg:text-7xl xl:text-8xl leading-tight`}
        >
          Silver Style
        </h1>

        <div className="relative mt-8 text-black text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light">
          <h1 className="">Desire Meets</h1>

          <Image
            src="/ring.svg"
            width={90}
            height={90}
            alt="ring"
            className="absolute top-10 -left-3 w-[55px] md:w-[95px] md:-left-5 md:top-12 lg:top-15 lg:w-[115px] lg:-left-5 xl:top-18 xl:w-[130px] ]"
            priority
          />

          <h1 className="ml-10 mt-4 xl:ml-25 lg:ml-21 md:mt-5 md:ml-17 lg:mt-6">
            New Style
          </h1>
        </div>

        <p className="mt-5 text-gray-700 w-[63%] text-[12px] md:text-[12px] lg:text-lg xl:text-xl">
          Anyone can get dressed up and glamorous, but it is how people dress in
          their days off that.
        </p>
        <Link href="/products">
          <Button className="bg-black text-white mt-8 hover:bg-gray-400 flex items-center w-fit px-6 py-3">
            See All <GoArrowRight className="ml-2 mt-1" />
          </Button>
        </Link>
      </div>

      <div className="absolute -right-4 -top-10 md:-right-8 lg:-right-12 xl:right-0 flex gap-2 md:gap-2 mt-10 self-center md:self-start w-fit h-fit ">
        <Image
          src="/necklacee.jpg"
          width={350}
          height={350}
          alt="necklace"
          className="rounded-lg w-28 h-42 md:w-46 md:h-64 lg:w-52 lg:h-80 xl:w-90 xl:h-130 object-cover"
          priority
        />

        <Image
          src="/ear-ring.jpg"
          width={350}
          height={350}
          alt="ear ring"
          className="rounded-t-full w-18 h-28 mt-4 md:w-34 md:h-46 lg:w-40 lg:h-50 lg:mt-15 xl:w-55 xl:h-75 xl:mt-25 object-cover"
          priority
        />
      </div>
    </section>
  );
}

export default HeroSection;
