
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilterChange: (showFreeOnly: boolean) => void;
}

const SearchFilter = ({ onSearch, onFilterChange }: SearchFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, onSearch]);

  const handleFilterChange = (checked: boolean) => {
    setShowFreeOnly(checked);
    onFilterChange(checked);
  };

  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
            placeholder="Search AI providers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <input
            id="free-only"
            type="checkbox"
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            checked={showFreeOnly}
            onChange={(e) => handleFilterChange(e.target.checked)}
          />
          <label htmlFor="free-only" className="ml-2 block text-sm text-gray-700">
            Show Free Output Only
          </label>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
