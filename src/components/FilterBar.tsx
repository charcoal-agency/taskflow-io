import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
  value: string;
}

interface FilterBarProps {
  filters: FilterOption[];
  activeFilters: string[];
  onFilterChange: (filterId: string, isActive: boolean) => void;
  className?: string;
}

const FilterBar = ({
  filters,
  activeFilters,
  onFilterChange,
  className,
}: FilterBarProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <Button variant="outline" size="sm">
        <Filter className="h-4 w-4 mr-2" />
        Filter
      </Button>
      
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilters.includes(filter.id) ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(filter.id, !activeFilters.includes(filter.id))}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default FilterBar;