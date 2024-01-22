import { FunctionComponent, ReactNode } from "react";
import { IconType } from "react-icons";
import { Card } from "./Card";
export type HeroCardProps = {
  icon: IconType;
  title: ReactNode;
  description: ReactNode;
};
export const HeroCard: FunctionComponent<HeroCardProps> = ({
  description,
  title,
  icon: Icon,
}) => {
  return (
    <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-4 py-2 gap-3 rounded-lg inline-flex max-w-80 min-h-20 items-center box-shadow-button border-none">
      <Icon size={38} width={38} height={38} />
      <div className="space-y-1 w-[calc(100%-38px-0.75rem)]">
        <h3 className="font-semibold text-lg ">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </Card>
  );
};
