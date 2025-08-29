"use client";

import Badge from "@/components/ui/Badge";

interface StatusBadgeProps {
  status: "todo" | "in-progress" | "review" | "done";
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusMap = {
    "todo": { label: "To Do", variant: "secondary" },
    "in-progress": { label: "In Progress", variant: "default" },
    "review": { label: "Review", variant: "outline" },
    "done": { label: "Done", variant: "secondary" }
  };

  const { label, variant } = statusMap[status];

  return (
    <Badge variant={variant as any}>
      {label}
    </Badge>
  );
};

export default StatusBadge;