// Core configuration system for the monorepo

export interface ModuleConfig {
  enabled: boolean;
  permissions?: string[];
  settings?: Record<string, any>;
}

export interface AppConfig {
  name: string;
  version: string;
  modules: Record<string, ModuleConfig>;
  theme: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
    fontFamily: string;
  };
  api: {
    baseUrl: string;
    timeout: number;
    retryAttempts: number;
  };
}

// Default configuration
export const defaultConfig: AppConfig = {
  name: 'My App',
  version: '1.0.0',
  modules: {
    dashboard: {
      enabled: true,
      settings: {
        defaultView: 'overview',
        refreshInterval: 30000,
      },
    },
    scanner: {
      enabled: true,
      permissions: ['camera'],
      settings: {
        scanMode: 'auto',
        enableFlash: false,
      },
    },
    profile: {
      enabled: true,
      settings: {
        editable: true,
        showStats: true,
      },
    },
  },
  theme: {
    primaryColor: '#007AFF',
    backgroundColor: '#F2F2F7',
    textColor: '#000000',
    fontFamily: 'System',
  },
  api: {
    baseUrl: 'https://api.example.com',
    timeout: 30000,
    retryAttempts: 3,
  },
};

// Configuration loader
export function loadConfig(): AppConfig {
  // In a real app, this would load from environment variables, API, or file system
  const envConfig = process.env.APP_CONFIG;
  
  if (envConfig) {
    try {
      const parsed = JSON.parse(envConfig);
      return { ...defaultConfig, ...parsed };
    } catch (error) {
      console.warn('Failed to parse environment config, using default:', error);
    }
  }
  
  return defaultConfig;
}

// Module checker
export function isModuleEnabled(moduleName: string): boolean {
  const config = loadConfig();
  return config.modules[moduleName]?.enabled ?? false;
}

// Get enabled modules
export function getEnabledModules(): string[] {
  const config = loadConfig();
  return Object.entries(config.modules)
    .filter(([_, moduleConfig]) => moduleConfig.enabled)
    .map(([name]) => name);
}
