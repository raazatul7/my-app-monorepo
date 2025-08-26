import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
    dashboard: undefined;
    scanner: undefined;
    profile: undefined;
};
type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'dashboard'>;
interface DashboardScreenProps {
    navigation: DashboardScreenNavigationProp;
}
export declare const DashboardScreen: React.FC<DashboardScreenProps>;
export {};
//# sourceMappingURL=DashboardScreen.d.ts.map