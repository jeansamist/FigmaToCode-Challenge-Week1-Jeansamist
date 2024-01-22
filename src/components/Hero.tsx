import { FunctionComponent, useState } from "react";
import {
  LuCheckCircle,
  LuClock,
  LuMessageCircle,
  LuPlusCircle,
} from "react-icons/lu";
import { Button } from "../components/Button";
import illustration from "../assets/images/hero-illustration.png";
import decoration from "../assets/images/hero-illustration-decoration.png";
import { HeroCard, HeroCardProps } from "./HeroCard";

export const Hero: FunctionComponent = () => {
  const [CARDS] = useState<HeroCardProps[]>([
    {
      icon: LuClock,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "24 hour service",
    },
    {
      icon: LuCheckCircle,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "8 years of experience",
    },
    {
      icon: LuPlusCircle,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "High quality care",
    },
  ]);
  return (
    <>
      <div className="min-h-screen rounded-4xl bg-background-variant relative flex justify-center items-center z-0">
        <div className="p-16 flex flex-col md:flex-row gap-4 items-center justify-between pt-36 pb-32">
          <div className="space-y-6 w-1/2">
            <h2 className="text-xl text-grass font-medium">
              Dr. Matthew Anderson
            </h2>
            <h1 className="text-5xl font-bold text-title leading-tight">
              A dedicated doctor you can trust
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              eget vel, nunc nulla feugiat. Metus ut.
            </p>

            <Button className="space-x-4">
              <LuMessageCircle size={24} /> <span>Book an appointment</span>
            </Button>
          </div>
          <div className="w-2/5 relative flex justify-end">
            <img src={illustration} alt="illustration" className="w-full" />
            <img
              src={decoration}
              alt="decoration"
              className="absolute top-0 right-0 decoration w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex mx-auto w-[90%] lg:w-[80%] 2xl:w-[1440px] justify-center gap-7 -translate-y-1/2">
        {CARDS.map((props, key) => (
          <HeroCard {...props} key={key} />
        ))}
      </div>
    </>
  );
};
