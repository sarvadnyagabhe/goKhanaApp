// src/components/ScreenHeader.tsx

import React, {ReactElement, ReactNode} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  ImageStyle,
  StyleProp,
  TextInput,
} from 'react-native';
import CustomButton from '../CustomButton';
import MagicText from '../MagicText';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  rightIcon1?: ReactNode | ReactElement;
  rightIcon2?: ReactNode | ReactElement;
  rightIcon3?: ReactNode | ReactElement;
  rightIcon4?: ReactNode | ReactElement;
  Icon?: ReactNode | ReactElement;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  leftIconStyle?: StyleProp<ImageStyle>;
  rightIconStyle?: StyleProp<ImageStyle>;
  onPressrightIcon1: () => void;
  onPressrightIcon2: () => void;
  onPressrightIcon3: () => void;
  onPressrightIcon4: () => void;
};
const ScreenHeader = ({
  title,
  subtitle,
  rightIcon1,
  rightIcon2,
  rightIcon3,
  rightIcon4,
  containerStyle,
  titleStyle,
  subtitleStyle,
  leftIconStyle,
  rightIconStyle,
  onPressrightIcon1,
  onPressrightIcon2,
  onPressrightIcon3,
  onPressrightIcon4,
  Icon,
  onPress,
}: ScreenHeaderProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {Icon && (
        <CustomButton
          showIcon={Icon}
          containerStyle={leftIconStyle}
          onPress={onPress}
          textStyle={{
            paddingLeft: 3,
            fontSize: 10,
          }}
          title={'Location data unavailable'}></CustomButton>
      )}

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {rightIcon1 && (
          <CustomButton
            iconStyle={rightIconStyle}
            showIcon={rightIcon1}
            onPress={onPressrightIcon1}
            title={''}></CustomButton>
        )}
        {rightIcon2 && (
          <CustomButton
            showIcon={rightIcon2}
            iconStyle={rightIconStyle}
            onPress={onPressrightIcon2}
            title={''}></CustomButton>
        )}
        {rightIcon3 && (
          <CustomButton
            showIcon={rightIcon3}
            iconStyle={rightIconStyle}
            onPress={onPressrightIcon3}
            title={''}></CustomButton>
        )}
        {rightIcon4 && (
          <CustomButton
            showIcon={rightIcon4}
            iconStyle={rightIconStyle}
            onPress={onPressrightIcon4}
            title={''}></CustomButton>
        )}
        <View>
          <MagicText style={[styles.title, titleStyle]}>{title}</MagicText>
          {subtitle && (
            <MagicText style={[styles.subtitle, subtitleStyle]}>
              {subtitle}
            </MagicText>
          )}
        </View>
      </View>
    </View>
  );
};

// Define default styles for the ScreenHeader component
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    paddingRight: 10,
  },
  searchSection: {
    borderColor: '#d8dce3',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
    marginBottom: 20,
  },
});

export default ScreenHeader;
