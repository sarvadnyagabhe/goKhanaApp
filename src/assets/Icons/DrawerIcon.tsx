import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const DrawerIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="#000"
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
  </Svg>
);
export default DrawerIcon;
