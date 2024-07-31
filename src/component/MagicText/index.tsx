// @flow
import React from 'react';
import {TextProps, Text, View} from 'react-native';

type MagicTextPropType = {} & TextProps;

const MagicText = ({style, ...props}: MagicTextPropType) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={style} {...props}></Text>
    </View>
  );
};

export default MagicText;
