import { FunctionComponent, ReactNode } from "react";
import { Card, CardFooter } from "./Card";

export type CustomerCardProps = {
  description: ReactNode;
  avatar: string;
  name: ReactNode;
  category: ReactNode;
};

export const CustomerCard: FunctionComponent<CustomerCardProps> = ({
  avatar,
  category,
  description,
  name,
}) => {
  return (
    <Card className="border-none rounded-4xl box-shadow-card p-6 space-y-4">
      <i className="text-title leading-loose md:text-base text-sm">
        {description}
      </i>
      <CardFooter className="flex gap-4 p-0 items-center">
        <img
          src={avatar}
          alt="avatar"
          className="w-[48px] aspect-square object-cover h-[48px]"
        />
        <div className="w-[calc(100%-48px-16px)]">
          <div className="font-medium text-[15px] md:text-lg text-grass">
            {name}
          </div>
          <div className="text-xs md:text-sm sora">{category} Patient</div>
        </div>
      </CardFooter>
    </Card>
  );
};
