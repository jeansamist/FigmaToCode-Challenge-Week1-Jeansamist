import { FunctionComponent, ReactNode } from "react";
import { LuMessageCircle } from "react-icons/lu";
import { Button } from "./Button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./Card";

export type ServiceCardProps = {
  illustration: string;
  title: ReactNode;
  description?: ReactNode;
};

export const ServiceCard: FunctionComponent<ServiceCardProps> = ({
  description,
  illustration,
  title,
}) => {
  return (
    <Card className="border-none rounded-4xl p-4 flex flex-col justify-between">
      <CardHeader>
        <img
          src={illustration}
          alt="service illustration"
          className="w-4/5 mx-auto mb-4 aspect-square object-contain"
        />
        <CardTitle className="text-title">{title}</CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter>
        <Button className="space-x-4 w-full">
          <LuMessageCircle size={24} /> <span>Book an appointment</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
