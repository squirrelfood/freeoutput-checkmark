
import { CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Provider } from "../types/providers";

interface ProviderCardProps {
  provider: Provider;
}

const ProviderCard = ({ provider }: ProviderCardProps) => {
  return (
    <Link to={`/provider/${provider.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
        <div className="relative p-4">
          <div className="absolute top-2 right-2">
            {provider.freeOutput ? (
              <CheckCircle className="text-success h-8 w-8" />
            ) : (
              <XCircle className="text-error h-8 w-8" />
            )}
          </div>
          <div className="h-16 flex items-center justify-center mb-4">
            <img
              src={provider.logo}
              alt={`${provider.name} logo`}
              className="h-full object-contain rounded-xl size-16"
            />
          </div>
          <h3 className="text-lg font-medium text-center mb-2">{provider.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-3">
            {provider.description}
          </p>
          <div className="mt-4 text-center">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              provider.freeOutput 
                ? "bg-green-100 text-green-800" 
                : "bg-red-100 text-red-800"
            }`}>
              {provider.freeOutput ? "Free Output" : "Restricted Output"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProviderCard;
