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
      <i className="text-title leading-loose">{description}</i>
      <CardFooter className="flex gap-4 p-0">
        <img src={avatar} alt="avatar" />
        <div>
          <div className="font-medium text-lg text-grass">{name}</div>
          <div className="text-sm">{category} Patient</div>
        </div>
      </CardFooter>
    </Card>
  );
};
