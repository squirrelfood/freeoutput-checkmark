
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle, ExternalLink, ArrowLeft } from "lucide-react";
import Layout from "../components/layout/Layout";
import HighlightedText from "../components/HighlightedText";
import { providers } from "../data/providers";

const ProviderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const provider = providers.find((p) => p.id === id);
  
  useEffect(() => {
    if (!provider) {
      navigate("/", { replace: true });
    }
  }, [provider, navigate]);
  
  if (!provider) {
    return null;
  }

  return (
    <Layout>
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to all providers
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <div className="flex-shrink-0 size-24 flex items-center justify-center">
              <img 
                src={provider.logo} 
                alt={`${provider.name} logo`} 
                className="h-full object-contain size-24 rounded-xl"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-3xl font-bold mb-2">{provider.name}</h1>
              <p className="text-gray-600 mb-4">{provider.description}</p>
              <div className="flex flex-wrap gap-4">
                <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${
                  provider.freeOutput 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {provider.freeOutput ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Free Output
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4 mr-1" />
                      Restricted Output
                    </>
                  )}
                </span>
                <a 
                  href={provider.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  Website
                  <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>
                <a 
                  href={provider.tosUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                >
                  Terms of Service
                  <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold mb-4">Terms of Service Highlights</h2>
            <div className="space-y-4">
              {provider.tosHighlights.map((highlight, index) => (
                <HighlightedText key={index} highlight={highlight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProviderDetail;
