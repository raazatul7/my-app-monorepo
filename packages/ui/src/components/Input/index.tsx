import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';

// Input types
export type InputType = 'text' | 'email' | 'password' | 'number' | 'phone';

// Input sizes
export type InputSize = 'small' | 'medium' | 'large';

// Input states
export type InputState = 'default' | 'focused' | 'error' | 'success';

// Input props interface
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

// Input component
export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  size = 'medium',
  state = 'default',
  error,
  helperText,
  leftIcon,
  rightIcon,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  helperStyle,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // Determine current state
  const currentState = error ? 'error' : isFocused ? 'focused' : state;

  // Handle focus events
  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  // Get container styles
  const containerStyles = [
    styles.container,
    styles[`${size}Container` as keyof typeof styles],
    containerStyle,
  ].filter(Boolean) as ViewStyle[];

  // Get input styles
  const inputStyles = [
    styles.input,
    styles[`${size}Input` as keyof typeof styles],
    styles[`${currentState}Input` as keyof typeof styles],
    leftIcon && styles.inputWithLeftIcon,
    rightIcon && styles.inputWithRightIcon,
    inputStyle,
  ].filter(Boolean) as TextStyle[];

  // Get label styles
  const labelStyles = [
    styles.label,
    styles[`${size}Label` as keyof typeof styles],
    labelStyle,
  ].filter(Boolean) as TextStyle[];

  return (
    <View style={containerStyles}>
      {label && (
        <Text style={labelStyles}>{label}</Text>
      )}
      
      <View style={styles.inputContainer}>
        {leftIcon && (
          <View style={styles.leftIcon}>{leftIcon}</View>
        )}
        
        <TextInput
          style={inputStyles}
          placeholder={placeholder}
          placeholderTextColor="#8E8E93"
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {rightIcon && (
          <View style={styles.rightIcon}>{rightIcon}</View>
        )}
      </View>
      
      {(error || helperText) && (
        <Text style={[
          styles.helperText,
          error ? styles.errorText : styles.helperTextDefault,
          error ? errorStyle : helperStyle,
        ]}>
          {error || helperText}
        </Text>
      )}
    </View>
  );
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
