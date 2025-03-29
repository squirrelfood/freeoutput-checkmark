
export interface Provider {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  tosUrl: string;
  freeOutput: boolean;
  tosHighlights: TosHighlight[];
}

export interface TosHighlight {
  text: string;
  section: string;
  supports: boolean; // Whether this highlights supports the free output claim
}
