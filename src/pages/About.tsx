
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About FreeOutput</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            FreeOutput was created to help users understand their rights regarding AI-generated content. 
            With the proliferation of AI tools, it's critical to know whether you actually own the content these tools produce for you.
          </p>
          <p className="text-gray-700">
            We believe in transparency around AI usage rights. By clearly showing which providers assign full copyright to users 
            and which don't, we help you make informed decisions about which tools to use for your projects.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">How We Evaluate</h2>
          <p className="text-gray-700 mb-4">
            For each AI provider, we carefully review their Terms of Service or Terms of Use to determine whether they:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Assign full copyright ownership of AI-generated content to the user</li>
            <li>Retain some rights to use or license the content</li>
            <li>Place restrictions on commercial usage</li>
            <li>Have ambiguous terms that could impact your ownership rights</li>
          </ul>
          <p className="text-gray-700">
            We highlight the specific sections of these documents so you can verify our classifications and understand the nuances of each provider's terms.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            FreeOutput is for informational purposes only and does not constitute legal advice. 
            Terms of service can change, so we recommend always verifying the current terms of any AI provider you use.
          </p>
          <p className="text-gray-700">
            If you notice any outdated information or have suggestions for improvements, please contact us.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
