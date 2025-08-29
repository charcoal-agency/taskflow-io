"use client";

import Badge from "@/components/ui/Badge";

interface PriorityBadgeProps {
  priority: "low" | "medium" | "high";
}

const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const priorityMap = {
    low: { label: "Low", variant: "secondary" },
    medium: { label: "Medium", variant: "default" },
    high: { label: "High", variant: "destructive" }
  };

  const { label, variant } = priorityMap[priority];

  return (
    <Badge variant={variant as any}>
      {label}
    </Badge>
  );
};

export default PriorityBadge;