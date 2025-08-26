// Profile feature types

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  department: string;
  joinDate: string;
  lastActive: string;
  totalScans: number;
  successRate: number;
}

export interface ProfileSection {
  id: string;
  title: string;
  items: ProfileMenuItem[];
}

export interface ProfileMenuItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
  action: string;
  badge?: string;
  badgeColor?: string;
}
