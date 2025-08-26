import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import available screens from shared packages
import { DashboardScreen } from '@myapp/features-dashboard';
import { ScannerScreen } from '@myapp/features-scanner';
import { ProfileScreen } from '@myapp/features-profile';

// Import client configuration
import { getClientConfig } from '../../config/client-config';

// Get client ID from environment or use default
const CLIENT_ID = process.env.CLIENT_ID || 'default';

const Stack = createStackNavigator();

export default function App(): JSX.Element {
  // Load client configuration
  const clientConfig = getClientConfig(CLIENT_ID);
  
  // Get enabled modules from client config
  const enabledModules = Object.entries(clientConfig.modules)
    .filter(([_, moduleConfig]) => moduleConfig.enabled)
    .map(([name]) => name);

  // Define available screens mapping
  const availableScreens: Record<string, React.ComponentType<any>> = {
    dashboard: DashboardScreen,
    scanner: ScannerScreen,
    profile: ProfileScreen,
  };

  // Build the navigator using only the screens enabled in the config
  const screensToRender = enabledModules.map(moduleName => {
    const ScreenComponent = availableScreens[moduleName];
    if (!ScreenComponent) {
      console.warn(`Screen component for module '${moduleName}' not found`);
      return null;
    }
    
    return (
      <Stack.Screen
        key={moduleName}
        name={moduleName}
        component={ScreenComponent}
        options={{
          title: moduleName.charAt(0).toUpperCase() + moduleName.slice(1),
          headerShown: true,
        }}
      />
    );
  }).filter(Boolean);

  return (
    <NavigationContainer>
      <Stack.Navigator>{screensToRender}</Stack.Navigator>
    </NavigationContainer>
  );
}
