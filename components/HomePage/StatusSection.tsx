import { HiArrowDown } from "react-icons/hi2";

function StatusSection() {
  const status = [
    { numbers: "12+", text: "All over the world" },
    { numbers: "150+", text: "Product Available" },
    { numbers: "1K+", text: "product Review" },
  ];

  const renderstatus = status.map(({ numbers, text }, index) => (
    <li key={index} className="space-y-1 pt-3 md:pt-0">
      <div className="xl:text-5xl lg:text-4xl md:text-3xl text-md">{numbers}</div>
      <p className="text-[12px] xl:text-xl ">{text}</p>
    </li>
  ));

  return (
    <div className="relative 2xl:mt-33 xl:mt-31 lg:mt-30 md:mt-28 mt-50 w-full">
      <div className="bg-[#ffc9a6] 2xl:w-180 2xl:h-40 xl:w-169 xl:h-40 lg:w-122
         lg:h-30 md:w-100 md:h-27 w-67 h-20 rounded-2xl transition-all duration-500">
        <ul className="flex md:justify-around xl:pt-10 lg:pt-7 md:pt-5 space-x-3 md:space-x-0 text-center transition-all text-black duration-500">
          {renderstatus}
        </ul>
      </div>
      
      <div className="absolute flex items-center md:ml-35 cursor-pointer xl:right-30 lg:right-25 md:right-20 right-0 
      justify-center top-0 w-15 h-15 xl:w-40 xl:h-40 lg:w-30 lg:h-30 md:w-25 md:h-25 transition-all duration-500">

        <div className="w-11 h-11 xl:w-25 xl:h-25 lg:w-20 lg:h-20 md:w-17 md:h-17 bg-[#ffc9a6] rounded-full flex items-center justify-center text-black text-2xl">
          <HiArrowDown />
        </div>

        <svg viewBox="0 0 100 100" className="absolute w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
            />
          </defs>
          <text fontSize="8" className="fill-[#173F4F] tracking-[2px]">
            <textPath href="#circlePath" startOffset="0%">
              • Explore All • Explore All • Explore All •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
export default StatusSection;
