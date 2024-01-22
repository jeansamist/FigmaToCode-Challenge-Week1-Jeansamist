import { FunctionComponent, ReactNode, useState } from "react";
import { LuMessageCircle } from "react-icons/lu";
import brand from "../assets/images/brand.png";
import { cn } from "../lib/utils";
import { Button } from "./Button";

export const Topbar: FunctionComponent = () => {
  type link = {
    label: ReactNode;
    activate?: boolean;
    href: string;
  };
  const [LINKS] = useState<link[]>([
    {
      label: "Home",
      href: "/",
      activate: true,
    },
    {
      label: "About",
      href: "/",
      activate: false,
    },
    {
      label: "Services",
      href: "/",
      activate: false,
    },
    {
      label: "Contact",
      href: "/",
      activate: false,
    },
  ]);
  return (
    <header className="absolute top-0 left-0 p-8 w-full z-10">
      <nav className="container flex items-center justify-between h-14">
        <img src={brand} alt="logo" className="w-36" />
        <div className="space-x-10">
          {LINKS.map((link, key) => (
            <a
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary",
                link.activate && "text-primary"
              )}
              key={key}
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button className="space-x-4">
          <LuMessageCircle size={24} /> <span>Book Now</span>
        </Button>
      </nav>
    </header>
  );
};
