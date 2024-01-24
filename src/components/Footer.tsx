import { FunctionComponent } from "react";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import brand from "../assets/images/brand-withe.png";
import { motion } from "framer-motion";
import { VARIANTS } from "../lib/variants";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-primary text-primary-foreground p-16">
      <div className="container">
        <div className="flex justify-between mb-16">
          <motion.div
            className="w-2/5"
            variants={VARIANTS}
            initial={"hiddenX"}
            whileInView={"visibleX"}
            viewport={{ once: true }}
          >
            <img src={brand} alt="logo" className="w-36 mb-4" />
            <i className="mb-4 opacity-75">
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
            className="w-1/2 grid grid-cols-3 gap-8"
            variants={VARIANTS}
            initial={"hiddenY"}
            whileInView={"visibleY"}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">Company Info</h2>
              <div className="opacity-75">About</div>
              <div className="opacity-75">Services</div>
              <div className="opacity-75">Blog</div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">Book Now</h2>
              <div className="opacity-75">Appointment</div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">Contact</h2>
              <div className="opacity-75">+1 123456789</div>
              <div className="opacity-75">remmcal@mail.com</div>
              <div className="opacity-75">Phone: +1 123456789</div>
            </div>
          </motion.div>
        </div>
        <div className="w-full h-px bg-primary-foreground mb-8 opacity-75"></div>
        <motion.div
          className="text-center opacity-75"
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
