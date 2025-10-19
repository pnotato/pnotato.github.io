export interface Project {
  id: string;
  label: string;
  image: string;
  link: string;
  description: string;
  tags: string[];
}

export interface ProjectCollection {
  projects: Project[];
}

