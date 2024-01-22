import { FunctionComponent, useState } from "react";
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
  return (
    <section className="min-h-screen bg-background-variant pb-32">
      <div className="container p-16 flex flex-col md:flex-row gap-4 items-center justify-between pt-36 pb-32">
        <div className="space-y-6 w-2/5">
          <h2 className="text-xl text-grass font-medium">Service</h2>
          <h1 className="text-3xl font-bold text-title leading-tight">
            Experienced in multiple medical practices
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            eget vel, nunc nulla feugiat. Metus ut.
          </p>

          <Button className="space-x-4">
            <LuMessageCircle size={24} /> <span>Book an appointment</span>
          </Button>
        </div>
        <div className="w-1/2 relative flex justify-end">
          <img src={illustration} alt="illustration" className="w-full" />
        </div>
      </div>
      <div className="container px-24 grid grid-cols-3 gap-8">
        {SERVICES.map((services, key) => (
          <ServiceCard {...services} key={key} />
        ))}
      </div>
    </section>
  );
};
