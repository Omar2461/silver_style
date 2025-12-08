import Image from "next/image";
import Card from "./Card";

export default function CollectionSection() {
  return (
    <section className="mt-24 w-full flex flex-col items-center">
      <h1 className="text-3xl xl:text-4xl text-center font-medium">
        Discover <span className="font-light">Jewellery</span> Collection
      </h1>

      <div className="relative w-full max-w-5xl mt-20 min-h-[550px] ">

        <div className="absolute right-80 top-0 w-[260px]">
          <Card className="bg-[#ffc9a6]/40" title="Inspiration with necklaces">
            <Image
              src="/sparcleNecklace.jpg"
              width={400}
              height={400}
              alt="necklace"
              className="object-contain"
            />
          </Card>
        </div>

        <div className="absolute left-10 top-32 w-[260px]">
          <Card className="bg-[#ffc9a6]/40" title="Rings for Joyful Connection">
            <Image
              src="/Ring.png"
              width={400}
              height={400}
              alt="ring"
              className="object-contain"
            />
          </Card>
        </div>

        <div className="absolute right-0 bottom-0 w-[260px]">
          <Card className="bg-[#ffc9a6]/40" title=" Discover Amazing Earrings">
            <Image
              src="/bracelet.png"
              width={400}
              height={400}
              alt="bracelet"
              className="object-contain"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
