import { FunctionComponent, useEffect, useState } from "react";
import { LuMessageCircle } from "react-icons/lu";
import { Button } from "./Button";
import illustration from "../assets/images/Visual.png";
import cardIllustration1 from "../assets/images/card-illustration (1).png";
import cardIllustration2 from "../assets/images/card-illustration (2).png";
import cardIllustration3 from "../assets/images/card-illustration (3).png";
import cardIllustration4 from "../assets/images/card-illustration (4).png";
import cardIllustration5 from "../assets/images/card-illustration (5).png";
import cardIllustration6 from "../assets/images/card-illustration (6).png";
import { ServiceCard, ServiceCardProps } from "./ServiceCard";
import { VARIANTS } from "../lib/variants";
import { motion } from "framer-motion";
import { Carousel } from "./Carousel";
export const Services: FunctionComponent = () => {
  const [SERVICES] = useState<ServiceCardProps[]>([
    {
      illustration: cardIllustration1,
      title: "General",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum eget vel, nunc nulla feugiat. Metus ut.",
    },
    {
      illustration: cardIllustration2,
      title: "Pediatrics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum eget vel, nunc nulla feugiat. Metus ut.",
    },
    {
      illustration: cardIllustration3,
      title: "Nutritional",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum eget vel, nunc nulla feugiat. Metus ut.",
    },
    {
      illustration: cardIllustration4,
      title: "Cardiology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum eget vel, nunc nulla feugiat. Metus ut.",
    },
    {
      illustration: cardIllustration5,
      title: "Ophthamology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum eget vel, nunc nulla feugiat. Metus ut.",
    },
    {
      illustration: cardIllustration6,
      title: "Orthopedics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum eget vel, nunc nulla feugiat. Metus ut.",
    },
  ]);
  const [small, setsmall] = useState<boolean>(false);

  useEffect(() => {
    setsmall(window.innerWidth <= 768);
    window.addEventListener("resize", () => setsmall(window.innerWidth <= 768));
  }, []);
  return (
    <section className="min-h-screen bg-background-variant pb-32">
      <motion.div
        variants={VARIANTS}
        initial={"hiddenX"}
        whileInView={"visibleX"}
        viewport={{ once: true }}
        className="container p-8 md:p-16 flex flex-col-reverse md:flex-row gap-4 items-center justify-between pt-36 pb-32"
      >
        <div className="space-y-4 md:space-y-6 md:w-2/5">
          <h2 className="text-xl text-grass font-medium">Service</h2>
          <h1 className="text-2xl md:text-3xl font-bold text-title leading-tight">
            Experienced in multiple medical practices
          </h1>
          <p className="sora">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            eget vel, nunc nulla feugiat. Metus ut.
          </p>

          <div className="flex justify-center md:justify-start pt-6 md:pt-0">
            <Button className="space-x-4">
              <LuMessageCircle size={24} /> <span>Book an appointment</span>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative flex justify-end">
          <motion.img
            src={illustration}
            alt="illustration"
            className="w-full"
            variants={VARIANTS}
            initial={"hiddenScale"}
            whileInView={"visibleScale"}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
      {small ? (
        <Carousel>
          {SERVICES.map((services, key) => (
            <div className="p-8" key={key}>
              <ServiceCard {...services} />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="container px-24 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((services, key) => (
            <ServiceCard {...services} key={key} />
          ))}
        </div>
      )}
    </section>
  );
};
