
import { useState, useCallback, useEffect } from "react";
import Layout from "../components/layout/Layout";
import SearchFilter from "../components/SearchFilter";
import ProviderGrid from "../components/ProviderGrid";
import { providers } from "../data/providers";
import { Provider } from "../types/providers";

const Index = () => {
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>(providers);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  const filterProviders = useCallback(() => {
    let result = [...providers];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (provider) =>
          provider.name.toLowerCase().includes(query) ||
          provider.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by free output only
    if (showFreeOnly) {
      result = result.filter((provider) => provider.freeOutput);
    }
    
    setFilteredProviders(result);
  }, [searchQuery, showFreeOnly]);

  // Apply filters when search or free-only filter changes
  useEffect(() => {
    filterProviders();
  }, [filterProviders]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (freeOnly: boolean) => {
    setShowFreeOnly(freeOnly);
  };

  return (
    <Layout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">AI Output Copyright Status</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover which AI providers give you full copyright ownership of the generated content and which ones don't.
        </p>
      </div>

      <SearchFilter onSearch={handleSearch} onFilterChange={handleFilterChange} />
      <ProviderGrid providers={filteredProviders} />
    </Layout>
  );
};

export default Index;
