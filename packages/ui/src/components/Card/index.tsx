import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  ViewProps,
} from 'react-native';

// Card variants
export type CardVariant = 'default' | 'elevated' | 'outlined' | 'flat';

// Card sizes
export type CardSize = 'small' | 'medium' | 'large';

// Card props interface
export interface CardProps extends ViewProps {
  variant?: CardVariant;
  size?: CardSize;
  padding?: 'none' | 'small' | 'medium' | 'large';
  children: React.ReactNode;
  style?: ViewStyle;
}

// Card component
export const Card: React.FC<CardProps> = ({
  variant = 'default',
  size = 'medium',
  padding = 'medium',
  children,
  style,
  ...props
}) => {
  // Get card styles based on variant, size, and padding
  const paddingKey = `padding${padding.charAt(0).toUpperCase() + padding.slice(1)}` as keyof typeof styles;
  const cardStyle = [
    styles.base,
    styles[variant],
    styles[size],
    styles[paddingKey],
    style,
  ];

  return (
    <View style={cardStyle} {...props}>
      {children}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  base: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  
  // Variant styles
  default: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  elevated: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  outlined: {
    borderWidth: 1,
    borderColor: '#E5E5EA',
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  flat: {
    backgroundColor: '#F2F2F7',
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  
  // Size styles
  small: {
    borderRadius: 8,
  },
  medium: {
    borderRadius: 12,
  },
  large: {
    borderRadius: 16,
  },
  
  // Padding styles
  paddingNone: {
    padding: 0,
  },
  paddingSmall: {
    padding: 12,
  },
  paddingMedium: {
    padding: 16,
  },
  paddingLarge: {
    padding: 20,
  },
});

export default Card;
