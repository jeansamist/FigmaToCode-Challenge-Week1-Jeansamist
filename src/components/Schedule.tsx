import { FunctionComponent } from "react";
import { LuMessageCircle } from "react-icons/lu";
import { Button } from "./Button";
import decoration from "../assets/images/box-decoration.png";
import { motion } from "framer-motion";
import { VARIANTS } from "../lib/variants";
export const Schedule: FunctionComponent = () => {
  return (
    <motion.section
      className="md:my-32"
      variants={VARIANTS}
      initial={"hiddenScale"}
      whileInView={"visibleScale"}
      viewport={{ once: true }}
    >
      <div className="container p-16 px-8 md:p-16 relative">
        <div className="text-center text-grass font-medium text-xl mb-3">
          Book an appointment
        </div>
        <div className="bg-gradient-to-br from-primary space-y-4 text-center to-secondary/60 p-8 md:p-20 md:px-32 rounded-4xl text-primary-foreground">
          <h1 className="font-semibold text-2xl md:text-3xl">
            Schedule a virtual or presential appointment today
          </h1>
          <p className="md:leading-loose md:w-3/5 mx-auto sora">
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
    </motion.section>
  );
};
