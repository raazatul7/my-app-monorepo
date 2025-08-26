import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, } from 'react-native';
// Button component
export const Button = ({ title, onPress, variant = 'primary', size = 'medium', disabled = false, loading = false, fullWidth = false, style, textStyle, leftIcon, rightIcon, }) => {
    // Get button styles based on variant and size
    const buttonStyle = [
        styles.base,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        style,
    ];
    // Get text styles based on variant and size
    const buttonTextStyle = [
        styles.text,
        styles[`${variant}Text`],
        styles[`${size}Text`],
        disabled && styles.disabledText,
        textStyle,
    ];
    return (_jsx(TouchableOpacity, { style: buttonStyle, onPress: onPress, disabled: disabled || loading, activeOpacity: 0.8, children: loading ? (_jsx(ActivityIndicator, { size: "small", color: variant === 'outline' || variant === 'ghost' ? '#007AFF' : '#FFFFFF' })) : (_jsxs(_Fragment, { children: [leftIcon && _jsx(_Fragment, { children: leftIcon }), _jsx(Text, { style: buttonTextStyle, children: title }), rightIcon && _jsx(_Fragment, { children: rightIcon })] })) }));
};
// Styles
const styles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    // Variant styles
    primary: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    secondary: {
        backgroundColor: '#F2F2F7',
        borderColor: '#F2F2F7',
    },
    outline: {
        backgroundColor: 'transparent',
        borderColor: '#007AFF',
    },
    ghost: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    danger: {
        backgroundColor: '#FF3B30',
        borderColor: '#FF3B30',
    },
    // Size styles
    small: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        minHeight: 32,
    },
    medium: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        minHeight: 44,
    },
    large: {
        paddingHorizontal: 20,
        paddingVertical: 14,
        minHeight: 56,
    },
    // Width styles
    fullWidth: {
        width: '100%',
    },
    // State styles
    disabled: {
        opacity: 0.5,
    },
    // Text styles
    text: {
        fontWeight: '600',
        textAlign: 'center',
    },
    // Variant text styles
    primaryText: {
        color: '#FFFFFF',
    },
    secondaryText: {
        color: '#000000',
    },
    outlineText: {
        color: '#007AFF',
    },
    ghostText: {
        color: '#007AFF',
    },
    dangerText: {
        color: '#FFFFFF',
    },
    // Size text styles
    smallText: {
        fontSize: 14,
    },
    mediumText: {
        fontSize: 16,
    },
    largeText: {
        fontSize: 18,
    },
    // Disabled text style
    disabledText: {
        color: '#8E8E93',
    },
});
export default Button;
