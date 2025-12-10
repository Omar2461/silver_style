import Container from "@/components/General/Container";
import Header from "@/components/HomePage/Header";
import HeroSection from "@/components/HomePage/heroSection";
import StatusSection from "@/components/HomePage/StatusSection";
import ScrollAnimation from "@/components/General/ScrollAnimation";
import CollectionSection from "@/components/HomePage/CollectionSection";

import localFont from "next/font/local";

const font = localFont({
  src: "./fonts/Canela-Light-Trial.otf",
});

export default function Home() {
  return (
    <ScrollAnimation>
      <Container className={font.className}>
        <Header />
        <HeroSection />
        <StatusSection />
        <CollectionSection />
      </Container>
    </ScrollAnimation>
  );
}
