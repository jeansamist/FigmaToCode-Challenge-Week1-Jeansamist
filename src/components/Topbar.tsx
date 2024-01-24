import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { LuMenu, LuMessageCircle, LuX } from "react-icons/lu";
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
  const [menuIsOpen, setmenuIsOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setmenuIsOpen(window.innerWidth >= 768)
    );
  }, []);

  return (
    <header className="absolute top-0 left-0 px-2 py-4 md:p-8 md:px-4 lg:p-8 w-full z-10">
      <nav className="container flex items-center justify-between h-14">
        <img src={brand} alt="logo" className="w-28 md:w-36" />
        <div
          className={cn(
            "fixed md:relative top-0 left-0 right-0 bottom-0 bg-primary text-4xl items-center justify-center flex-col md:flex-row gap-10 md:text-base md:bg-transparent",
            menuIsOpen || window.innerWidth >= 768 ? "flex" : "hidden"
          )}
        >
          {LINKS.map((link, key) => (
            <a
              href={link.href}
              className={cn(
                "transition-colors text-primary-foreground md:hover:text-primary md:text-foreground",
                link.activate && "md:text-primary"
              )}
              key={key}
            >
              {link.label}
            </a>
          ))}
          <Button className="space-x-4 md:hidden px-8" variant={"light"}>
            <LuMessageCircle size={24} /> <span>Book Now</span>
          </Button>
        </div>

        {window.innerWidth >= 768 ? (
          <Button className="space-x-4">
            <LuMessageCircle size={24} /> <span>Book Now</span>
          </Button>
        ) : (
          <>
            <LuMenu
              className="text-primary text-2xl cursor-pointer"
              onClick={() => setmenuIsOpen(true)}
            />
            {menuIsOpen && (
              <LuX
                className="text-primary-foreground fixed top-8 right-10 z-50 text-2xl cursor-pointer"
                onClick={() => setmenuIsOpen(false)}
              />
            )}
          </>
        )}
      </nav>
    </header>
  );
};
