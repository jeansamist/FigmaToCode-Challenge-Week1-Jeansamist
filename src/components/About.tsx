import { FunctionComponent } from "react";
import { LuMessageCircle } from "react-icons/lu";
import { Button } from "./Button";
import img from "../assets/images/img1.png";
import decoration from "../assets/images/plusicons.png";
import { motion } from "framer-motion";
import { VARIANTS } from "../lib/variants";
export const About: FunctionComponent = () => {
  return (
    <section className="mb-16 lg:my-44 container flex flex-col lg:flex-row gap-4 lg:gap-10 items-center justify-center">
      <div className="lg:w-2/5 relative w-full scale-110 ld:scale-100 translate-x-2 lg:translate-x-0 inline-flex lg:justify-start justify-center">
        <motion.img
          src={img}
          alt="illustration"
          className=""
          variants={VARIANTS}
          initial={"hiddenScale"}
          whileInView={"visibleScale"}
          viewport={{ once: true }}
        />
        <img
          src={decoration}
          alt="decoration"
          className="absolute top-0 left-0 decoration sm:hidden lg:block"
        />
      </div>

      <motion.div
        className="space-y-4 lg:space-y-6 lg:w-1/3"
        variants={VARIANTS}
        initial={"hiddenX"}
        whileInView={"visibleX"}
        viewport={{ once: true }}
      >
        <h2 className="text-xl text-grass font-medium">About me</h2>
        <h1 className="text-2xl lg:text-3xl font-bold text-title leading-tight">
          A dedicated doctor with the core mission to help
        </h1>
        <p className="leading-normal sora">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
          nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc
          elementum. Tellus quam mauris aenean turpis vulputate sodales nullam
          lobortis. Vulputate tortor tincidun.
        </p>
        <div className="flex justify-center md:justify-start pt-6 md:pt-0">
          <Button className="space-x-4">
            <LuMessageCircle size={24} /> <span>Book an appointment</span>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
