import { FunctionComponent, ReactNode } from "react";
import { IconType } from "react-icons";
import { Card } from "./Card";
export type HeroCardProps = {
  icon: IconType;
  title: ReactNode;
  description?: ReactNode;
};
export const HeroCard: FunctionComponent<HeroCardProps> = ({
  description,
  title,
  icon: Icon,
}) => {
  return (
    <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-4 py-2 gap-3 rounded-lg inline-flex min-h-20 items-center box-shadow-button max-w-60 md:min-w-72 border-none">
      <Icon size={38} width={38} height={38} />
      <div className="space-y-1 w-[calc(100%-38px-0.75rem)]">
        <h3 className="font-semibold text-sm md:text-lg ">{title}</h3>
        {description && <p className="text-[10px] opacity-80">{description}</p>}
      </div>
    </Card>
  );
};
export const HeroCard2: FunctionComponent<HeroCardProps> = ({
  title,
  icon: Icon,
}) => {
  return (
    <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground md:px-4 p-4 py-3 md:py-2  gap-3 rounded-lg inline-flex md:min-h-20 items-center box-shadow-button md:min-w-72 border-none">
      <Icon size={38} width={38} height={38} />
      <div className="space-y-1 w-[calc(100%-38px-0.75rem)]">
        <h3 className="font-semibold text-[15px] md:text-lg ">{title}</h3>
      </div>
    </Card>
  );
};
