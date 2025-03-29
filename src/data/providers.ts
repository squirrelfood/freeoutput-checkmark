
import { Provider } from "../types/providers";

// This is mock data - in a real app, this would come from a database or API
export const providers: Provider[] = [
  {
    id: "openai",
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
    description: "OpenAI is an AI research and deployment company, creator of ChatGPT and GPT models.",
    website: "https://openai.com",
    tosUrl: "https://openai.com/policies/terms-of-use",
    freeOutput: true,
    tosHighlights: [
      {
        text: "As between the parties and to the extent permitted by applicable law, you own your Content and Output. Subject to your compliance with these Terms, OpenAI hereby assigns to you all its right, title and interest in and to Output.",
        section: "3. Content",
        supports: true
      },
      {
        text: "This means that you can use Content to create Output for yourself or others, and you can use Output for any purpose, including commercial purposes such as creating revenue...",
        section: "3. Content",
        supports: true
      }
    ]
  },
  {
    id: "anthropic",
    name: "Anthropic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/Anthropic.png",
    description: "Anthropic is an AI safety company that develops Claude, a conversational AI assistant.",
    website: "https://www.anthropic.com",
    tosUrl: "https://www.anthropic.com/terms-of-use",
    freeOutput: true,
    tosHighlights: [
      {
        text: "You own the content you create through your use of our services. You also own the content you provide to us and the output you generate using our services.",
        section: "Your Content",
        supports: true
      }
    ]
  },
  {
    id: "meta-llama",
    name: "Meta (Llama)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/288px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png?20230731184236",
    description: "Meta's Llama models are open source large language models available for commercial and research use.",
    website: "https://ai.meta.com",
    tosUrl: "https://ai.meta.com/llama/use-policy/",
    freeOutput: true,
    tosHighlights: [
      {
        text: "You own the content that you create with the Llama 2 model, including the right to distribute, sell, or give away the content you create.",
        section: "Usage Policy",
        supports: true
      }
    ]
  },
  {
    id: "google-gemini",
    name: "Google (Gemini)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Google-gemini-icon.svg/512px-Google-gemini-icon.svg.png?20240826133250",
    description: "Google's Gemini (formerly Bard) is a conversational AI service powered by Google's LLM models.",
    website: "https://gemini.google.com",
    tosUrl: "https://policies.google.com/terms/generative-ai/use",
    freeOutput: false,
    tosHighlights: [
      {
        text: "Google does not claim ownership of Your Content. This includes content that you create using Google technology (like translations, Bard responses, or images made with the Imagen API).",
        section: "Your Content",
        supports: true
      },
      {
        text: "But when you share, submit, or upload Your Content, you grant Google and those we work with a license to use Your Content...",
        section: "Your Content",
        supports: false
      }
    ]
  },
  {
    id: "stability-ai",
    name: "Stability AI",
    logo: "https://images.squarespace-cdn.com/content/v1/6213c340453c3f502425776e/cfbf5bc5-47d4-4f4a-b133-23bd12a7d7c2/favicon.ico?format=100w",
    description: "Stability AI is the company behind Stable Diffusion, a popular text-to-image model.",
    website: "https://stability.ai",
    tosUrl: "https://stability.ai/terms-of-use",
    freeOutput: true,
    tosHighlights: [
      {
        text: "Your Rights. You own your data, prompts, and the underlying content you already own plus any AI-generated outputs you create with the Services.",
        section: "8. Intellectual Property Rights",
        supports: true
      }
    ]
  },
  {
    id: "midjourney",
    name: "Midjourney",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/480px-Midjourney_Emblem.png",
    description: "Midjourney is an AI image generation service accessible through Discord.",
    website: "https://www.midjourney.com",
    tosUrl: "https://docs.midjourney.com/docs/terms-of-service",
    freeOutput: false,
    tosHighlights: [
      {
        text: "Subject to the above license grant to the Company, you own all Assets you create with the Services.",
        section: "4. Intellectual Property",
        supports: false
      },
      {
        text: "You hereby grant Company a perpetual, worldwide, non-exclusive, sublicensable no-charge, royalty-free, irrevocable copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, sublicense...",
        section: "4. Intellectual Property",
        supports: false
      }
    ]
  }
];
