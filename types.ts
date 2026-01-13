
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  icon: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export type Language = 'ar' | 'en';
