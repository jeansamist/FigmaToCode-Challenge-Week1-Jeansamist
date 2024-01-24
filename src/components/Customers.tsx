import { FunctionComponent, useEffect, useState } from "react";
import { CustomerCard, CustomerCardProps } from "./CustomerCard";
import avatar1 from "../assets/images/avatar (1).png";
import avatar2 from "../assets/images/avatar (2).png";
import avatar3 from "../assets/images/avatar (3).png";
import avatar4 from "../assets/images/avatar (4).png";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { motion } from "framer-motion";
import { VARIANTS } from "../lib/variants";
import { Carousel } from "./Carousel";

export const Customer: FunctionComponent = () => {
  const [COMMENTS] = useState<CustomerCardProps[]>([
    {
      avatar: avatar1,
      category: "Cardiology",
      description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore sed do
          eiusmod tempor incididunt ut labore et dolore`,
      name: "Samy White",
    },
    {
      avatar: avatar2,
      category: "Nutrion",
      description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore sed do
          eiusmod tempor incididunt ut labore et dolore`,
      name: "Arthur Northon",
    },
    {
      avatar: avatar3,
      category: "Orthopedics",
      description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore sed do
          eiusmod tempor incididunt ut labore et dolore`,
      name: "Kevin Smith",
    },
    {
      avatar: avatar4,
      category: "Ophthalmology",
      description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore sed do
          eiusmod tempor incididunt ut labore et dolore`,
      name: "Amanda Jackson",
    },
  ]);
  const [small, setsmall] = useState<boolean>(false);

  useEffect(() => {
    setsmall(window.innerWidth <= 768);
    window.addEventListener("resize", () => setsmall(window.innerWidth <= 768));
  }, []);
  return (
    <section className="bg-background-variant py-16 md:p-32">
      <div className="container">
        <motion.div
          variants={VARIANTS}
          initial={"hiddenScale"}
          whileInView={"visibleScale"}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="font-semibold text-2xl md:text-3xl text-center text-title md:w-3/5 mx-auto">
            What our great customers say about Dr. Matthew Anderson
          </h2>
          <p className="leading-loose text-center md:w-3/5 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore sed do eiusmod tempor
            incididunt ut labore et dolore
          </p>
        </motion.div>

        {small ? (
          <Carousel>
            {COMMENTS.map((props, key) => (
              <div className="p-4" key={key}>
                <CustomerCard {...props} />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="relative grid md:grid-cols-1 lg:grid-cols-2 gap-8 mt-32">
            {COMMENTS.map((props, key) => (
              <CustomerCard {...props} key={key} />
            ))}
            <div className="absolute text-title top-1/2 -left-16 -translate-y-1/2 cursor-pointer">
              <LuChevronLeft size={38} />
            </div>
            <div className="absolute text-title top-1/2 -right-16 -translate-y-1/2 cursor-pointer">
              <LuChevronRight size={38} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
