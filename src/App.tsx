import { FunctionComponent, useState } from "react";
import { Topbar } from "./components/Topbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import {
  LuCheckCircle,
  LuClock,
  LuMessageCircle,
  LuPlay,
  LuPlusCircle,
} from "react-icons/lu";
import { Button } from "./components/Button";
import decoration from "./assets/images/box-decoration.png";
import img2 from "./assets/images/img2.png";
import { HeroCard2, HeroCardProps } from "./components/HeroCard";
const App: FunctionComponent = () => {
  const [CARDS] = useState<HeroCardProps[]>([
    {
      icon: LuClock,
      title: "+15 years of experience",
    },
    {
      icon: LuCheckCircle,
      title: "Urgent 24 hour service",
    },
    {
      icon: LuPlusCircle,
      title: "High quality care",
    },
  ]);
  return (
    <main>
      <Topbar />
      <Hero />
      <About />
      <Services />
      <section className="my-32">
        <div className="container p-16 relative">
          <div className="text-center text-grass font-medium text-xl mb-3">
            Book an appointment
          </div>
          <div className="bg-gradient-to-br from-primary space-y-4 text-center to-secondary/60 p-20 px-32 rounded-4xl text-primary-foreground">
            <h1 className="font-semibold text-3xl">
              Schedule a virtual or presential appointment today
            </h1>
            <p className="leading-loose w-3/5 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              egestas viverra turpis habitant eu sociis fermentum felis.
            </p>

            <Button className="space-x-4" variant={"light"}>
              <LuMessageCircle size={24} /> <span>Book an appointment</span>
            </Button>
          </div>
          <img
            src={decoration}
            alt="decoration"
            className="absolute top-8 left-0 decoration w-full hidden xl:block"
          />
        </div>
      </section>
      <section className="my-32">
        <div className="container p-20 space-y-3">
          <div className="text-center text-grass font-medium text-xl">
            Why Dr. Matthew Anderson?
          </div>

          <div className="w-full relative">
            <img src={img2} alt="" className="w-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 overflow-hidden rounded-4xl -translate-y-1/2 w-full h-full flex items-center justify-center">
              <div className="transition-all hover:w-[200%]  hover:opacity-50 duration-300 hover:h-[300%] text-primary-foreground  w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="translate-x-1">
                  <LuPlay size={60} />
                </div>
              </div>
            </div>
          </div>
          <h2 className="font-semibold text-3xl text-center text-title">
            A dedicated doctor with the core mission to help
          </h2>
          <p className="leading-loose text-center w-4/5 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
            nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis
            nunc elementum. Tellus quam mauris aenean turpis vulputate sodales
            nullam lobortis. Vulputate tortor tincidun.
          </p>
          <div className="flex mx-auto w-full 2xl:w-[1440px] justify-center gap-7 translate-y-1/2">
            {CARDS.map((props, key) => (
              <HeroCard2 {...props} key={key} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
