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
  ImageRequireSource,
  ImageURISource,
} from 'react-native';
import MagicText from '../MagicText';

type FoodCardProps = {
  title: string;
  subtitle?: string;
  image?: ImageRequireSource | ImageURISource;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  imageStyle?: ImageStyle;
  subtitle2?: string;
};

const FoodCardComponent = ({
  title,
  subtitle,
  image,
  onPress,
  containerStyle,
  titleStyle,
  subtitleStyle,
  imageStyle,
  subtitle2,
}: FoodCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.cardContainer, containerStyle]}>
      {image && <Image source={image} style={[styles.image, imageStyle]} />}
      {title && (
        <MagicText style={[styles.title, titleStyle]} numberOfLines={1}>
          {title}
        </MagicText>
      )}
      {subtitle && subtitle2 && (
        <MagicText style={[styles.subtitle, subtitleStyle]}>
          {subtitle}
          {subtitle2}
        </MagicText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 90,
    width: 330,
    borderRadius: 8,
    marginHorizontal: 15,
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    // width: '100%',
    // height: 40,
    // width: 40,
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

export default FoodCardComponent;
