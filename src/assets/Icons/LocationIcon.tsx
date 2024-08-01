import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const LocationIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="black"
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M480.07-485.39q29.85 0 51.04-21.26 21.2-21.26 21.2-51.11 0-29.85-21.26-51.05Q509.79-630 479.93-630q-29.85 0-51.04 21.26-21.2 21.26-21.2 51.12 0 29.85 21.26 51.04 21.26 21.19 51.12 21.19ZM480-179.46q117.38-105.08 179.65-201.58 62.27-96.5 62.27-169.04 0-109.38-69.5-179.84-69.5-70.46-172.42-70.46-102.92 0-172.42 70.46-69.5 70.46-69.5 179.84 0 72.54 62.27 169.04 62.27 96.5 179.65 201.58Zm0 79.84Q329-230.46 253.54-343.15q-75.46-112.7-75.46-206.93 0-138.46 89.57-224.19Q357.23-860 480-860t212.35 85.73q89.57 85.73 89.57 224.19 0 94.23-75.46 206.93Q631-230.46 480-99.62Zm0-458.07Z" />
  </Svg>
);
export default LocationIcon;