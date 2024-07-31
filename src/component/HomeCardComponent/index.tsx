// src/components/Card.tsx

import React, {ReactElement, ReactNode} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import MagicText from '../MagicText';

type FoodCardProps = {
  title: string;
  subtitle?: string;
  Icon?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  imageStyle?: ImageStyle;
  innercontainerStyle?: ViewStyle;
};

const HomeCardComponent = ({
  title,
  subtitle,
  Icon,
  onPress,
  containerStyle,
  titleStyle,
  subtitleStyle,
  imageStyle,
  innercontainerStyle,
}: FoodCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.cardContainer, containerStyle]}>
      <View style={[styles.SmallContainer, innercontainerStyle]}></View>
      {Icon && (
        <Image source={{uri: Icon}} style={[styles.image, imageStyle]} />
      )}
      <View style={styles.textContainer}>
        <MagicText style={[styles.title, titleStyle]} numberOfLines={1}>
          {title}
        </MagicText>
        {subtitle && (
          <MagicText style={[styles.subtitle, subtitleStyle]}>
            {subtitle}
          </MagicText>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: 150,
    borderRadius: 8,
    elevation: 20,
    margin: 10,
    marginTop: 20,
  },
  SmallContainer: {
    height: 70,
    width: 70,
    borderRadius: 15,
    marginTop: 15,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 50,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
  },
});

export default HomeCardComponent;
