import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
    dashboard: undefined;
    scanner: undefined;
    profile: undefined;
};
type ScannerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'scanner'>;
interface ScannerScreenProps {
    navigation: ScannerScreenNavigationProp;
}
export declare const ScannerScreen: React.FC<ScannerScreenProps>;
export {};
//# sourceMappingURL=ScannerScreen.d.ts.map