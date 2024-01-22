import { FunctionComponent } from "react";
import { LuMessageCircle } from "react-icons/lu";
import { Button } from "./Button";
import img from "../assets/images/img1.png";
import decoration from "../assets/images/plusicons.png";

export const About: FunctionComponent = () => {
  return (
    <section className="my-44 container flex flex-col md:flex-row gap-4 items-center justify-center">
      <div className="w-2/5 relative flex justify-start">
        <img src={img} alt="illustration" className="" />
        <img
          src={decoration}
          alt="decoration"
          className="absolute top-0 left-0 decoration"
        />
      </div>

      <div className="space-y-6 w-2/5">
        <h2 className="text-xl text-grass font-medium">About me</h2>
        <h1 className="text-5xl font-bold text-title leading-tight">
          A dedicated doctor with the core mission to help
        </h1>
        <p className="leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
          nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc
          elementum. Tellus quam mauris aenean turpis vulputate sodales nullam
          lobortis. Vulputate tortor tincidun.
        </p>

        <Button className="space-x-4">
          <LuMessageCircle size={24} /> <span>Book an appointment</span>
        </Button>
      </div>
    </section>
  );
};
