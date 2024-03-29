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
import { motion } from "framer-motion";
import { VARIANTS } from "../lib/variants";
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
        <div className="p-16 flex flex-col-reverse md:flex-row gap-8 md:gap-4 items-center justify-between pt-36 pb-32">
          <motion.div
            variants={VARIANTS}
            initial={"hiddenY"}
            whileInView={"visibleY"}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 text-center md:text-left md:w-2/5"
          >
            <h2 className="text-xl text-grass font-medium">
              Dr. Matthew Anderson
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-title leading-tight">
              A dedicated doctor you can trust
            </h1>
            <p className="sora">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              eget vel, nunc nulla feugiat. Metus ut.
            </p>

            <Button className="space-x-4">
              <LuMessageCircle size={24} /> <span>Book an appointment</span>
            </Button>
          </motion.div>
          <div className="w-4/5 md:w-2/5 relative flex justify-end">
            <motion.img
              src={illustration}
              alt="illustration"
              className="w-full"
              variants={VARIANTS}
              initial={"hiddenScale"}
              whileInView={"visibleScale"}
              viewport={{ once: true }}
            />
            <img
              src={decoration}
              alt="decoration"
              className="absolute top-0 right-0 decoration w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mx-auto w-[90%] lg:w-[80%] 2xl:w-[1440px] justify-center gap-7 -translate-y-1/4 md:-translate-y-1/2">
        {CARDS.map((props, key) => (
          <div key={key}>
            <HeroCard {...props} />
          </div>
        ))}
      </div>
    </>
  );
};
