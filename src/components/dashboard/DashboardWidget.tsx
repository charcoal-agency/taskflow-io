import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface DashboardWidgetProps {
  title: string;
  description?: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

const DashboardWidget = ({
  title,
  description,
  icon,
  children,
  className,
}: DashboardWidgetProps) => {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {description && <CardDescription className="text-xs mt-1">{description}</CardDescription>}
        </div>
        {icon}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default DashboardWidget;