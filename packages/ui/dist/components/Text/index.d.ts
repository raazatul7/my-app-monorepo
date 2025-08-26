import React from 'react';
import { TextStyle } from 'react-native';
export type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'button';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type TextWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export interface TextProps {
    variant?: TextVariant;
    color?: string;
    align?: TextAlign;
    weight?: TextWeight;
    style?: TextStyle;
    children: React.ReactNode;
}
export declare const Text: React.FC<TextProps>;
export default Text;
//# sourceMappingURL=index.d.ts.map