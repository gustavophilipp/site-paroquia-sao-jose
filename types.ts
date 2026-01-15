export interface Community {
  id: string;
  name: string;
  schedule: string[];
  address: string;
  mapLink: string;
  image: string;
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}