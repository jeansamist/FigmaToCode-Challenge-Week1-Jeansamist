import { FunctionComponent } from "react";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import brand from "../assets/images/brand-withe.png";
import { motion } from "framer-motion";
import { VARIANTS } from "../lib/variants";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-primary text-primary-foreground p-4 px-2 md:p-16 w-full">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-16 md:gap-0">
          <motion.div
            className="md:w-2/5"
            variants={VARIANTS}
            initial={"hiddenX"}
            whileInView={"visibleX"}
            viewport={{ once: true }}
          >
            <img src={brand} alt="logo" className="w-36 mb-4" />
            <i className="mb-4 opacity-75 text-sm md:text-base">
              8 W. South St.Buford, GA 30518 <br /> 5 Briarwood LaneVienna, VA
              22180 RER
            </i>
            <div className="flex gap-4 mt-4">
              <LuYoutube size={24} />
              <FaFacebookSquare size={24} />
              <FaWhatsapp size={24} />
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={VARIANTS}
            initial={"hiddenY"}
            whileInView={"visibleY"}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-base md:text-lg">Company Info</h2>
              <div className="opacity-75 text-sm md:text-base">About</div>
              <div className="opacity-75 text-sm md:text-base">Services</div>
              <div className="opacity-75 text-sm md:text-base">Blog</div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-base md:text-lg">Book Now</h2>
              <div className="opacity-75 text-sm md:text-base">Appointment</div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-base md:text-lg">Contact</h2>
              <div className="opacity-75 text-sm md:text-base">
                +1 123456789
              </div>
              <div className="opacity-75 text-sm md:text-base">
                remmcal@mail.com
              </div>
              <div className="opacity-75 text-sm md:text-base">
                Phone: +1 123456789
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full h-px bg-primary-foreground mb-8 opacity-70"></div>
        <motion.div
          className="text-center opacity-75 text-xs md:text-sm"
          variants={VARIANTS}
          initial={"hiddenY"}
          whileInView={"visibleY"}
          viewport={{ once: true }}
        >
          &copy; Doctor all rights 2023 - Designed by remmcal
        </motion.div>
      </div>
    </footer>
  );
};
