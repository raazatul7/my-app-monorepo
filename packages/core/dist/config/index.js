// Core configuration system for the monorepo
// Default configuration
export const defaultConfig = {
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
export function loadConfig() {
    // In a real app, this would load from environment variables, API, or file system
    const envConfig = process.env.APP_CONFIG;
    if (envConfig) {
        try {
            const parsed = JSON.parse(envConfig);
            return { ...defaultConfig, ...parsed };
        }
        catch (error) {
            console.warn('Failed to parse environment config, using default:', error);
        }
    }
    return defaultConfig;
}
// Module checker
export function isModuleEnabled(moduleName) {
    const config = loadConfig();
    return config.modules[moduleName]?.enabled ?? false;
}
// Get enabled modules
export function getEnabledModules() {
    const config = loadConfig();
    return Object.entries(config.modules)
        .filter(([_, moduleConfig]) => moduleConfig.enabled)
        .map(([name]) => name);
}
