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
    // <section className="mb-25 md:mb-15 -mt-5 md:mt-0" >
    //   <div className={`w-150`}>
    //     <div className=" mt-40 flex flex-wrap flex-col md:w-[400px] lg:w-[500px] xl:w-[600px] transition-all duration-500">
    //       <h1 className={`text-black text-4xl mb-2 md:ml-10 -mt-20 md:text-6xl lg:text-7xl xl:text-8xl xl:mb-30 
    //       lg:mb-10 md:mb-7 transition-all duration-500 ${myFont.className}`}>Silver Style</h1>
    //       <div className="flex flex-col text-black text-3xl md:text-5xl lg:text-6xl xl:text-7xl transition-all duration-500 mt-10">
    //         <h1>Desire Meets </h1>
    //         <Image
    //           className="absolute md:mt-8 md:-ml-4 md:w-20 lg:w-30 xl:w-40 w-17 mt-7 -ml-4 lg:mt-9 lg:-ml-4 xl:mt-9 xl:-ml-7 transition-all duration-500"
    //           src="./ring.svg"
    //           width={500}
    //           height={500}
    //           loading="eager"
    //           priority
    //           alt="ring"
    //         />

    //         <h1 className="ml-12 md:ml-17 lg:ml-25 xl:ml-34"> New Style</h1>
    //       </div>
    //       <p className="flex flex-wrap mt-3 w-45 md:w-[408px] lg:w-[500px] xl:w-[600px] text-xs md:text-md lg:text-lg xl:text-xl text-gray-700 transition-all duration-500">
    //         Anyone can get dressed up and glamorous, but it is how <br />
    //         people dress in their days off that.
    //       </p>
    //     </div>
    //     <Button className="bg-black text-white mt-10 hover:bg-gray-400">
    //       See All <GoArrowRight className="mt-1 ml-2 " />
    //     </Button>
    //   </div>

    //   <div className="flex w-46 ml-47 mb-35 -mt-70 md:w-80 md:ml-100 md:-mt-80 lg:w-105 lg:ml-130 lg:-mt-95 xl:w-155 xl:ml-170 xl:-mt-130 2xl:ml-185 gap-1 md:gap-6 transition-all duration-500 " >
    //     <Image
    //       className="w-20 md:w-40 lg:w-45 xl:w-80 rounded-lg"
    //       src="/necklacee.jpg"
    //       width={400}
    //       height={400}
    //       priority
    //       alt="ring"
    //     />

    //     <Image
    //       className="w-20 h-25 mt-6 xl:w-70 xl:h-80 xl:mt-20 lg:w-50 lg:h-60 lg:mt-8 md:w-35 md:h-45 md:mt-5 rounded-t-full"
    //       src="/ear-ring.jpg"
    //       width={400}
    //       height={400}
    //       priority
    //       alt="ring"
    //     />
    //   </div>
    // </section>


    <section className="relative w-full flex flex-col items-start mt-10 md:mt-20">
      {/* LEFT TEXT BLOCK */}
      <div className="flex flex-col w-fit max-w-xl md:ml-10">
        <h1
          className={`${myFont.className} text-black text-[33px] md:text-6xl lg:text-7xl xl:text-8xl leading-tight`}
        >
          Silver Style
        </h1>

        <div className="relative mt-8 text-black text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light">
          <h1 className="">Desire Meets</h1>

          {/* Floating Ring Image */}
          <Image
            src="/ring.svg"
            width={90}
            height={90}
            alt="ring"
            className="absolute top-10 -left-3 w-[55px] md:w-[95px] md:-left-5 md:top-12 lg:top-15 lg:w-[115px] lg:-left-5 xl:top-18 xl:w-[130px] ]"
            priority
          />

          <h1 className="ml-10 mt-4 xl:ml-25 lg:ml-21 md:mt-5 md:ml-17 lg:mt-6">New Style</h1>
        </div>

        <p className="mt-5 text-gray-700 w-[63%] text-[12px] md:text-[12px] lg:text-lg xl:text-xl">
          Anyone can get dressed up and glamorous, but it is how people dress
          in their days off that.
        </p>

        <Button className="bg-black text-white mt-8 hover:bg-gray-400 flex items-center w-fit px-6 py-3">
          See All <GoArrowRight className="ml-2 mt-1" />
        </Button>
      </div>

      {/* IMAGES BLOCK */}
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
