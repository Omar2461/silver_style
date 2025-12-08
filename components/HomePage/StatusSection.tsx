import { HiArrowDown } from "react-icons/hi2";

function StatusSection() {
  const status = [
    { numbers: "12+", text: "All over the world" },
    { numbers: "150+", text: "Product Available" },
    { numbers: "1K+", text: "product Review" },
  ];

  const renderstatus = status.map(({ numbers, text }, index) => (
    <li key={index}>
      <div className=" xl:text-5xl lg:text-4xl md:text-3xl">{numbers}</div>
      <p className="text-sm xl:text-xl ">{text}</p>
    </li>
  ));

  return (
    <div className="flex 2xl:ml-37 2xl:mt-33 xl:ml-35 xl:mt-31 lg:ml-25 lg:mt-30 md:mt-28 md:ml-25  ">
      <div className="bg-[#ffc9a6] 2xl:w-180 2xl:h-40  xl:w-169 xl:h-40  lg:w-122 lg:h-30 md:w-90 md:h-25 rounded-2xl transition-all duration-500">
        <ul className="flex justify-around xl:pt-10 lg:pt-7 md:pt-5 text-center transition-all text-black duration-500">
          {renderstatus}
        </ul>
      </div>
      
      <div className="relative flex items-center ml-10 cursor-pointer justify-center w-30 h-30 xl:w-35 xl:h-35 xl:mt-5 transition-all duration-500">
        <div className="absolute w-15 h-15 xl:w-20 xl:h-20 bg-[#ffc9a6] rounded-full flex items-center justify-center text-black text-2xl">
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
