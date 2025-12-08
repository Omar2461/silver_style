import Image from "next/image";
import Card from "./Card";

export default function CollectionSection() {
  return (
    <section className="mt-24 w-full flex flex-col items-center ">
      <h1 className="text-3xl xl:text-4xl text-center font-medium">
        Discover <span className="font-light">Jewellery</span> Collection
      </h1>

      <div className="relative w-full max-w-5xl mt-15 min-h-[560px] md:min-h-[800px] lg:min-h-[700px]   ">

        <div className="absolute md:left-50 lg:left-85 xl:left-100 left-25 top-0 w-40 md:w-[260px]">
          <Card className="bg-[#ffc9a6]/40" title="Inspiration with necklaces">
            <Image
              src="/sparcleNecklace.jpg"
              width={400}
              height={400}
              alt="necklace"
              loading="eager"
              className="object-contain"
            />
          </Card>
        </div>

        <div className="absolute left-5 md:top-80 lg:top-65 top-45 w-40 md:w-[260px]">
          <Card className="bg-[#ffc9a6]/40" title="Rings for Joyful Connection">
            <Image
              src="/Ring.png"
              width={400}
              height={400}
              loading="eager"
              alt="ring"
              className="object-contain"
            />
          </Card>
        </div>

        <div className="absolute md:right-20 right-25 bottom-0 w-40 md:w-[260px]">
          <Card className="bg-[#ffc9a6]/40" title=" Discover Amazing Earrings">
            <Image
              src="/bracelet.png"
              width={400}
              height={400}
              loading="eager"
              alt="bracelet"
              className="object-contain"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
