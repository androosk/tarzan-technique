import AboutMe from "./components/AboutMe";
import Clients from "./components/Clients";
import CtaBar from "./components/CtaBar";
import CtaBar2 from "./components/CtaBar2";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoBox from "./components/InfoBox";
import Testimonials from "./components/Testimonials";
import Videos from "./components/Videos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <InfoBox />
      <CtaBar />
      <Videos />
      {/* <Testimonials /> */}
      <Clients />
      <CtaBar2 />
      <AboutMe />
      <Footer />
    </main>
  );
}
