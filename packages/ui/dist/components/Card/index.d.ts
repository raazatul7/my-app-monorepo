import React from 'react';
import { ViewStyle, ViewProps } from 'react-native';
export type CardVariant = 'default' | 'elevated' | 'outlined' | 'flat';
export type CardSize = 'small' | 'medium' | 'large';
export interface CardProps extends ViewProps {
    variant?: CardVariant;
    size?: CardSize;
    padding?: 'none' | 'small' | 'medium' | 'large';
    children: React.ReactNode;
    style?: ViewStyle;
}
export declare const Card: React.FC<CardProps>;
export default Card;
//# sourceMappingURL=index.d.ts.map