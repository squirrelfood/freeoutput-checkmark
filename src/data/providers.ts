
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
    tosUrl: "https://www.anthropic.com/terms-of-use",
    freeOutput: false,
    tosHighlights: [
      {
        text: "Subject to your compliance with our Terms [...]",
        section: "4. Inputs, Outputs, and Materials",
        supports: false
      },
      {
        text: "[...] we assign to you all of our right, title, and interest—if any—in Outputs.",
        section: "4. Inputs, Outputs, and Materials",
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
    id: "stability-ai",
    name: "Stability AI",
    logo: "https://images.squarespace-cdn.com/content/v1/6213c340453c3f502425776e/cfbf5bc5-47d4-4f4a-b133-23bd12a7d7c2/favicon.ico?format=100w",
    description: "Stability AI is the company behind Stable Diffusion, a popular text-to-image model.",
    website: "https://stability.ai",
    tosUrl: "https://stability.ai/terms-of-use",
    freeOutput: false,
    tosHighlights: [
      {
        text: "Unless otherwise expressly indicated by Stability, all content displayed or made available on the Site, including without limitation, text, images, illustrations, designs, logos, domain names, service marks, software, scripts, and the selection, compilation and arrangement of any of the foregoing is owned by Stability, its affiliates, licensors and/or other third parties (“Site Content”). The Site and all Site Content are protected by copyright, trade dress, trademark, moral rights, and other intellectual property laws in the United States, the United Kingdom, and other international jurisdictions. All such rights are reserved.",
        section: "Your Rights to Use the Site; Our Content and Intellectual Property Rights",
        supports: false
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
        text: "You own all Assets You create with the Services to the fullest extent possible under applicable law.",
        section: "4. Content Rights",
        supports: true
      },
      {
        text: "There are some exceptions: [...] Your ownership is subject to any obligations imposed by this Agreement and the rights of any third-parties.",
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
        text: "Commercial Use: Subject to the Content Section below, unless otherwise expressly authorized herein or in the Service, you agree not to display, distribute, license, perform, publish, reproduce, duplicate, copy, create derivative works from, modify, sell, resell, grant access to, transfer, or otherwise use or exploit any portion of the Service, and any Output, for any commercial purposes.",
        section: "Conditions of Access and Use",
        supports: false
      },
      {
        text: "Subject to your compliance with these Terms of Service [...]",
        section: "Intellectual Property Rights",
        supports: false
      }
    ]
  }
];
