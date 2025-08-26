import React from 'react';
import { ViewStyle, TextStyle, TextInputProps } from 'react-native';
export type InputType = 'text' | 'email' | 'password' | 'number' | 'phone';
export type InputSize = 'small' | 'medium' | 'large';
export type InputState = 'default' | 'focused' | 'error' | 'success';
export interface InputProps extends Omit<TextInputProps, 'style'> {
    label?: string;
    placeholder?: string;
    type?: InputType;
    size?: InputSize;
    state?: InputState;
    error?: string;
    helperText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    labelStyle?: TextStyle;
    errorStyle?: TextStyle;
    helperStyle?: TextStyle;
}
export declare const Input: React.FC<InputProps>;
export default Input;
//# sourceMappingURL=index.d.ts.map