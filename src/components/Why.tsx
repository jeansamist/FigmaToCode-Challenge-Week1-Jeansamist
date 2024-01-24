import { FunctionComponent, useState } from "react";
import { LuCheckCircle, LuClock, LuPlay, LuPlusCircle } from "react-icons/lu";
import { HeroCard2, HeroCardProps } from "./HeroCard";
import img2 from "../assets/images/img2.png";
import { motion } from "framer-motion";
import { VARIANTS } from "../lib/variants";
export const Why: FunctionComponent = () => {
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
    <section className="my-32">
      <div className="container md:p-20 space-y-3">
        <motion.h2 className="text-center text-grass font-medium text-xl">
          Why Dr. Matthew Anderson?
        </motion.h2>

        <motion.div
          className="w-full relative"
          variants={VARIANTS}
          initial={"hiddenScale"}
          whileInView={"visibleScale"}
          viewport={{ once: true }}
        >
          <img src={img2} alt="" className="w-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 overflow-hidden rounded-4xl -translate-y-1/2 w-full h-full flex items-center justify-center">
            <div className="transition-all hover:w-[200%]  hover:opacity-50 duration-300 hover:h-[300%] text-primary-foreground  w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <div className="translate-x-1">
                <LuPlay size={60} />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.h2
          variants={VARIANTS}
          initial={"hiddenY"}
          whileInView={"visibleY"}
          viewport={{ once: true }}
          className="font-semibold text-3xl text-center text-title"
        >
          A dedicated doctor with the core mission to help
        </motion.h2>
        <motion.p
          variants={VARIANTS}
          initial={"hiddenY"}
          whileInView={"visibleY"}
          viewport={{ once: true }}
          className="leading-loose text-center w-4/5 mx-auto sora"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
          nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc
          elementum. Tellus quam mauris aenean turpis vulputate sodales nullam
          lobortis. Vulputate tortor tincidun.
        </motion.p>
        <div className="flex flex-col md:flex-row items-center mx-auto lg:w-[80%] 2xl:w-[1440px] w-full justify-center gap-7 translate-y-4">
          {CARDS.map((props, key) => (
            <HeroCard2 {...props} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};
