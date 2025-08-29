import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
}

const StatsCard = ({
  title,
  value,
  description,
  icon,
  trend,
}: StatsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">{description}</p>
          {trend && (
            <span className={`text-xs ${trend.positive ? "text-green-600" : "text-red-600"}`}>
              {trend.value}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;