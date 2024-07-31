// src/components/Button.tsx

import React, {ReactElement, ReactNode} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
  StyleProp,
  View,
  TextInput,
} from 'react-native';
import MagicText from '../MagicText';
type ButtonProps = {
  title: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  showIcon?: ReactNode | ReactElement;
  iconStyle?: StyleProp<TextStyle>;
};
const CustomButton = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  showIcon,
  iconStyle,
}: ButtonProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      {showIcon && <View style={iconStyle}>{showIcon}</View>}
      {title && <MagicText style={[styles.text, textStyle]}>{title}</MagicText>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default CustomButton;
