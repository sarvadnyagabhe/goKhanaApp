import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const LetIconArrow = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#000"
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
  </Svg>
);
export default LetIconArrow;
