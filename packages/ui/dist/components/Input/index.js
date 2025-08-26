var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { View, TextInput, Text, StyleSheet, } from 'react-native';
// Input component
export const Input = (_a) => {
    var { label, placeholder, type = 'text', size = 'medium', state = 'default', error, helperText, leftIcon, rightIcon, containerStyle, inputStyle, labelStyle, errorStyle, helperStyle, onFocus, onBlur } = _a, props = __rest(_a, ["label", "placeholder", "type", "size", "state", "error", "helperText", "leftIcon", "rightIcon", "containerStyle", "inputStyle", "labelStyle", "errorStyle", "helperStyle", "onFocus", "onBlur"]);
    const [isFocused, setIsFocused] = useState(false);
    // Determine current state
    const currentState = error ? 'error' : isFocused ? 'focused' : state;
    // Handle focus events
    const handleFocus = (e) => {
        setIsFocused(true);
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    };
    const handleBlur = (e) => {
        setIsFocused(false);
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    };
    // Get container styles
    const containerStyles = [
        styles.container,
        styles[`${size}Container`],
        containerStyle,
    ].filter(Boolean);
    // Get input styles
    const inputStyles = [
        styles.input,
        styles[`${size}Input`],
        styles[`${currentState}Input`],
        leftIcon && styles.inputWithLeftIcon,
        rightIcon && styles.inputWithRightIcon,
        inputStyle,
    ].filter(Boolean);
    // Get label styles
    const labelStyles = [
        styles.label,
        styles[`${size}Label`],
        labelStyle,
    ].filter(Boolean);
    return (_jsxs(View, { style: containerStyles, children: [label && (_jsx(Text, { style: labelStyles, children: label })), _jsxs(View, { style: styles.inputContainer, children: [leftIcon && (_jsx(View, { style: styles.leftIcon, children: leftIcon })), _jsx(TextInput, Object.assign({ style: inputStyles, placeholder: placeholder, placeholderTextColor: "#8E8E93", onFocus: handleFocus, onBlur: handleBlur }, props)), rightIcon && (_jsx(View, { style: styles.rightIcon, children: rightIcon }))] }), (error || helperText) && (_jsx(Text, { style: [
                    styles.helperText,
                    error ? styles.errorText : styles.helperTextDefault,
                    error ? errorStyle : helperStyle,
                ], children: error || helperText }))] }));
};
// Styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    // Size container styles
    smallContainer: {
        marginBottom: 12,
    },
    mediumContainer: {
        marginBottom: 16,
    },
    largeContainer: {
        marginBottom: 20,
    },
    // Label styles
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 8,
    },
    smallLabel: {
        fontSize: 14,
        marginBottom: 6,
    },
    mediumLabel: {
        fontSize: 16,
        marginBottom: 8,
    },
    largeLabel: {
        fontSize: 18,
        marginBottom: 10,
    },
    // Input container
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
    },
    // Input styles
    input: {
        flex: 1,
        color: '#000000',
        fontSize: 16,
    },
    // Size input styles
    smallInput: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 14,
    },
    mediumInput: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 16,
    },
    largeInput: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        fontSize: 18,
    },
    // State input styles
    defaultInput: {
        borderColor: '#E5E5EA',
    },
    focusedInput: {
        borderColor: '#007AFF',
    },
    errorInput: {
        borderColor: '#FF3B30',
    },
    successInput: {
        borderColor: '#34C759',
    },
    // Icon input styles
    inputWithLeftIcon: {
        paddingLeft: 8,
    },
    inputWithRightIcon: {
        paddingRight: 8,
    },
    // Icon container styles
    leftIcon: {
        paddingLeft: 12,
        paddingRight: 8,
    },
    rightIcon: {
        paddingRight: 12,
        paddingLeft: 8,
    },
    // Helper text styles
    helperText: {
        fontSize: 14,
        marginTop: 4,
    },
    helperTextDefault: {
        color: '#8E8E93',
    },
    errorText: {
        color: '#FF3B30',
    },
});
export default Input;
