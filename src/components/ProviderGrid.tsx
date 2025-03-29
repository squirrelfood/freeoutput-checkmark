
import { Provider } from "../types/providers";
import ProviderCard from "./ProviderCard";

interface ProviderGridProps {
  providers: Provider[];
}

const ProviderGrid = ({ providers }: ProviderGridProps) => {
  if (providers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600">No providers found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {providers.map((provider) => (
        <ProviderCard key={provider.id} provider={provider} />
      ))}
    </div>
  );
};

export default ProviderGrid;
