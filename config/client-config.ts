// Client configuration for different builds
export interface ClientConfig {
  id: string;
  name: string;
  displayName: string;
  modules: {
    dashboard: {
      enabled: boolean;
      defaultView: string;
      widgets: string[];
    };
    scanner: {
      enabled: boolean;
      scanTypes: string[];
      customScanUI: boolean;
    };
    profile: {
      enabled: boolean;
      editable: boolean;
      showStats: boolean;
    };
  };
  branding: {
    primaryColor: string;
    secondaryColor: string;
    logo?: string;
  };
  api: {
    baseUrl: string;
    endpoints: Record<string, string>;
  };
}

// DLF Client Configuration
export const dlfConfig: ClientConfig = {
  id: 'dlf',
  name: 'DLF',
  displayName: 'DLF Client App',
  modules: {
    dashboard: {
      enabled: true,
      defaultView: 'analytics',
      widgets: ['revenue', 'orders', 'inventory', 'performance'],
    },
    scanner: {
      enabled: true,
      scanTypes: ['qr', 'barcode', 'nfc'],
      customScanUI: true,
    },
    profile: {
      enabled: true,
      editable: true,
      showStats: true,
    },
  },
  branding: {
    primaryColor: '#1E40AF',
    secondaryColor: '#3B82F6',
    logo: 'dlf-logo.png',
  },
  api: {
    baseUrl: 'https://api.dlf.com',
    endpoints: {
      auth: '/auth/dlf',
      orders: '/orders/dlf',
      inventory: '/inventory/dlf',
      analytics: '/analytics/dlf',
    },
  },
};

// Default Configuration
export const defaultConfig: ClientConfig = {
  id: 'default',
  name: 'Default App',
  displayName: 'Default App',
  modules: {
    dashboard: {
      enabled: true,
      defaultView: 'overview',
      widgets: ['orders', 'revenue'],
    },
    scanner: {
      enabled: true,
      scanTypes: ['qr', 'barcode'],
      customScanUI: false,
    },
    profile: {
      enabled: true,
      editable: true,
      showStats: true,
    },
  },
  branding: {
    primaryColor: '#007AFF',
    secondaryColor: '#34C759',
  },
  api: {
    baseUrl: 'https://api.example.com',
    endpoints: {
      auth: '/auth',
      orders: '/orders',
      customers: '/customers',
    },
  },
};

// Configuration loader
export function getClientConfig(clientId: string): ClientConfig {
  switch (clientId) {
    case 'dlf':
      return dlfConfig;
    default:
      return defaultConfig;
  }
}
