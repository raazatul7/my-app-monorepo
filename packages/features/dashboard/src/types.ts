// Dashboard feature types

export interface DashboardStats {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: string;
  color: string;
}

export interface RecentActivity {
  id: string;
  type: 'scan' | 'user' | 'error' | 'update';
  title: string;
  description: string;
  timestamp: string;
  status: 'success' | 'error' | 'info';
}

export interface QuickAction {
  id: string;
  title: string;
  icon: string;
  action: string;
}
