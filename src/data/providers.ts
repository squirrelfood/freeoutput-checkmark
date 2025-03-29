
import { Provider } from "../types/providers";

// JSON is good enough for this project. A database is not needed.
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
        text: "As between you and OpenAI, and to the extent permitted by applicable law, you (a) retain your ownership rights in Input and (b) own the Output. We hereby assign to you all our right, title, and interest, if any, in and to Output.",
        section: "Content",
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
    tosUrl: "https://www.anthropic.com/legal/consumer-terms",
    freeOutput: false,
    tosHighlights: [
      {
        text: "Subject to your compliance with our Terms [...]",
        section: "4. Inputs, Outputs, and Materials",
        supports: false
      }
    ]
  },
  {
    id: "google-gemini",
    name: "Google (Gemini)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Google-gemini-icon.svg/512px-Google-gemini-icon.svg.png?20240826133250",
    description: "Google's Gemini (formerly Bard) is a conversational AI service powered by Google's LLM models.",
    website: "https://gemini.google.com",
    tosUrl: "https://policies.google.com/terms",
    freeOutput: true,
    tosHighlights: [
      {
        text: "Some of our services allow you to generate original content. Google won’t claim ownership over that content.",
        section: "Your content",
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
        text: "Your ownership is subject to any obligations imposed by this Agreement [...]",
        section: "4. Content Rights",
        supports: false
      }
    ]
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    logo: "https://avatars.githubusercontent.com/u/148330874?s=200&v=4",
    description: "DeepSeek is a conversational AI service that provides Open Source models.",
    website: "https://www.deepseek.com/",
    tosUrl: "https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html",
    freeOutput: true,
    tosHighlights: [
      {
        text: "We assign any rights, title, and interests—if any—in the Outputs of the Services to you.",
        section: "4. Inputs and Outputs",
        supports: true
      }
    ]
  },
  {
    id: "suno",
    name: "Suno AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Suno_logo_July_2024.svg/220px-Suno_logo_July_2024.svg.png",
    description: "Suno is an AI music creation program designed to generate realistic songs.",
    website: "https://suno.com/",
    tosUrl: "https://suno.com/terms/",
    freeOutput: false,
    tosHighlights: [
      {
        text: "Subject to your compliance with these Terms of Service [...]",
        section: "Intellectual Property Rights",
        supports: false
      }
    ]
  },
  {
    id: "mistral",
    name: "Mistral AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mistral_AI_logo_%282025%E2%80%93%29.svg/512px-Mistral_AI_logo_%282025%E2%80%93%29.svg.png",
    description: "Mistral is a French AI startup, specializing in open-weight LLMs",
    website: "https://mistral.ai/",
    tosUrl: "https://mistral.ai/terms",
    freeOutput: true,
    tosHighlights: [
      {
        text: "To the extent permitted by applicable law, you (i) retain all ownership rights in Input and (ii) own all Output. We assign to you all right, title, and interest, if any, in and to Output that we may have.",
        section: "3. Your User Data",
        supports: true
      }
    ]
  },
];
