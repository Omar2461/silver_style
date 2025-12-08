import Container from "@/components/General/Container";
import Header from "@/components/General/Header";
import HeroSection from "@/components/HomePage/heroSection";
import StatusSection from "@/components/HomePage/StatusSection";
import ScrollAnimation from "@/components/General/ScrollAnimation";
import CollectionSection from "@/components/HomePage/CollectionSection";

import localFont from "next/font/local";

const font=localFont({
    src:"./fonts/Canela-Light-Trial.otf"
})

export default function Home() {
  return (
    <div > 
      <ScrollAnimation>
        <Container className={font.className}>
          <Header />
          <HeroSection />
          <StatusSection />
          <CollectionSection/>
        </Container>

        {/* <Image
          className="md:-mt-119 md:w-35 lg:-mt-98 lg:w-45 xl:-mt-74 xl:w-65 2xl:-mt-59 2xl:w-67 transition-all duration-500"
          src="/Blue_necklace.png"
          width={100}
          height={100}
          priority
          alt="necklace"
        /> */}
      </ScrollAnimation>
    </div>
  );
}
