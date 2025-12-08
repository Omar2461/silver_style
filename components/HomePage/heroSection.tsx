import Image from "next/image";
import localFont from "next/font/local";

import { GoArrowRight } from "react-icons/go";

import Button from "../General/Button";

const myFont = localFont({
  src: "../../app/fonts/VeganStylePersonalUse-5Y58.ttf",
  display: "swap",
});

function HeroSection() {
  return (
    <section className="mb-25 md:mb-15 -mt-5 md:mt-0" >
      <div className={` w-150`}>
        <div className=" mt-40 flex flex-wrap flex-col md:w-[400px] lg:w-[500px] xl:w-[600px] transition-all duration-500">
          <h1 className={`text-black text-4xl mb-2 md:ml-10 -mt-20 md:text-6xl lg:text-7xl xl:text-8xl xl:mb-30 
          lg:mb-10 md:mb-7 transition-all duration-500 ${myFont.className}`}>Silver Style</h1>
          <div className="flex flex-col text-black text-3xl md:text-5xl lg:text-6xl xl:text-7xl transition-all duration-500 mt-10">
            <h1>Desire Meets </h1>
            <Image
              className="absolute md:mt-8 md:-ml-4 md:w-20 lg:w-30 xl:w-40 w-17 mt-7 -ml-4 lg:mt-9 lg:-ml-4 xl:mt-9 xl:-ml-7 transition-all duration-500"
              src="./ring.svg"
              width={500}
              height={500}
              loading="eager"
              priority
              alt="ring"
            />

            <h1 className="ml-12 md:ml-17 lg:ml-25 xl:ml-34"> New Style</h1>
          </div>
          <p className="flex flex-wrap mt-3 w-45 md:w-[408px] lg:w-[500px] xl:w-[600px] text-xs md:text-md lg:text-lg xl:text-xl text-gray-700 transition-all duration-500">
            Anyone can get dressed up and glamorous, but it is how <br />
            people dress in their days off that.
          </p>
        </div>
        <Button className="bg-black text-white mt-10 hover:bg-gray-400">
          See All <GoArrowRight className="mt-1 ml-2 " />
        </Button>
      </div>

      <div className="flex w-46 ml-47 mb-35 -mt-70 md:w-80 md:ml-100 md:-mt-80 lg:w-105 lg:ml-130 lg:-mt-95 xl:w-155 xl:ml-170 xl:-mt-130 2xl:ml-185 gap-1 md:gap-6 transition-all duration-500 " >
        <Image
          className="w-20 md:w-40 lg:w-45 xl:w-80 rounded-lg"
          src="/necklacee.jpg"
          width={400}
          height={400}
          priority
          alt="ring"
        />

        <Image
          className="w-20 h-25 mt-6 xl:w-70 xl:h-80 xl:mt-20 lg:w-50 lg:h-60 lg:mt-8 md:w-35 md:h-45 md:mt-5 rounded-t-full"
          src="/ear-ring.jpg"
          width={400}
          height={400}
          priority
          alt="ring"
        />
      </div>
    </section>
  );
}
export default HeroSection;
