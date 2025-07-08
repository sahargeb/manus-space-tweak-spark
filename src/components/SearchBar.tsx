import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ searchTerm, setSearchTerm, placeholder = "ابحث..." }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative max-w-md mx-auto transition-all duration-300 ${
      isFocused ? 'scale-105' : ''
    }`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="pl-10 pr-10 py-3 rounded-full bg-background/50 backdrop-blur-sm border-2 border-primary/20 focus:border-primary/50 transition-all duration-300"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchTerm('')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-primary/10 rounded-full"
          >
            <X className="w-3 h-3" />
          </Button>
        )}
      </div>
      {isFocused && searchTerm && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg z-10 p-2 animate-fade-in">
          <p className="text-sm text-muted-foreground text-center py-2">
            البحث عن "{searchTerm}"...
          </p>
        </div>
      )}
    </div>
  );
};