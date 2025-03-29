
import { TosHighlight } from "../types/providers";

interface HighlightedTextProps {
  highlight: TosHighlight;
}

const HighlightedText = ({ highlight }: HighlightedTextProps) => {
  return (
    <div className={`p-4 rounded-md mb-4 ${
      highlight.supports ? "bg-green-50 border-l-4 border-green-500" : "bg-red-50 border-l-4 border-red-500"
    }`}>
      <h4 className="font-medium mb-2">{highlight.section}</h4>
      <blockquote className="text-gray-700 italic">"{highlight.text}"</blockquote>
      <div className="mt-2 text-sm">
        <span className={`inline-flex items-center px-2 py-1 rounded-full font-medium ${
          highlight.supports ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        }`}>
          {highlight.supports ? "Supports Free Output" : "Restricts Output Rights"}
        </span>
      </div>
    </div>
  );
};

export default HighlightedText;
