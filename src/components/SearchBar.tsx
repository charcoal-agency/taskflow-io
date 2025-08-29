import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
}

const SearchBar = ({
  placeholder = "Search...",
  onSearch,
  className,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    handleSearch("");
  };

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-10 pr-10"
      />
      {query && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;