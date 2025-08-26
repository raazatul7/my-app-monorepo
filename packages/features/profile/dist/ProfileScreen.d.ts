import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
    dashboard: undefined;
    scanner: undefined;
    profile: undefined;
};
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'profile'>;
interface ProfileScreenProps {
    navigation: ProfileScreenNavigationProp;
}
export declare const ProfileScreen: React.FC<ProfileScreenProps>;
export {};
//# sourceMappingURL=ProfileScreen.d.ts.map