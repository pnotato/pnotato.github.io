export interface Project {
  id: string;
  label: string;
  image: string;
  link: string;
  description: string;
  internalTags: string[];
  externalTags: string[];
}

export interface ProjectCollection {
  projects: Project[];
}

