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
export declare const defaultConfig: AppConfig;
export declare function loadConfig(): AppConfig;
export declare function isModuleEnabled(moduleName: string): boolean;
export declare function getEnabledModules(): string[];
//# sourceMappingURL=index.d.ts.map