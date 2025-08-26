import { jsx as _jsx } from "react/jsx-runtime";
import { Text as RNText, StyleSheet } from 'react-native';
// Text component
export const Text = ({ variant = 'body', color, align = 'left', weight, style, children, ...props }) => {
    // Get text styles based on variant
    const textStyles = [
        styles.base,
        styles[variant],
        {
            color: color || styles[variant].color,
            textAlign: align,
            fontWeight: weight || styles[variant].fontWeight,
        },
        style,
    ];
    return (_jsx(RNText, { style: textStyles, ...props, children: children }));
};
// Styles
const styles = StyleSheet.create({
    base: {
    // Base text styles
    },
    // Variant styles
    h1: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 40,
        color: '#000000',
    },
    h2: {
        fontSize: 28,
        fontWeight: '600',
        lineHeight: 36,
        color: '#000000',
    },
    h3: {
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 32,
        color: '#000000',
    },
    body: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        color: '#000000',
    },
    caption: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#8E8E93',
    },
    button: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        color: '#000000',
    },
});
export default Text;
//# sourceMappingURL=index.js.map