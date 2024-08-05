import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const AccountIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    fill="white"
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M480-492.72q-57.75 0-96.44-38.69t-38.69-96.56q0-57.88 38.69-96.44 38.69-38.56 96.44-38.56t96.44 38.56q38.69 38.56 38.69 96.44 0 57.87-38.69 96.56-38.69 38.69-96.44 38.69ZM180-187.69v-80.26q0-31.28 16.71-55.58 16.7-24.29 43.8-37.34 61.88-28.41 121.06-42.74 59.18-14.34 118.42-14.34t118.23 14.54q58.98 14.54 120.69 42.72 27.81 13.03 44.45 37.24Q780-299.23 780-267.95v80.26H180Zm50.26-50.26h499.48v-30q0-14.46-8.93-27.45-8.94-12.99-23.58-20.6-56.56-27.62-109.34-39.65-52.78-12.04-107.89-12.04t-108.43 12.04Q318.26-343.62 262.36-316q-14.64 7.61-23.37 20.6-8.73 12.99-8.73 27.45v30ZM480-542.97q35.97 0 60.42-24.45 24.45-24.45 24.45-60.43 0-35.97-24.45-60.42-24.45-24.45-60.42-24.45t-60.42 24.45q-24.45 24.45-24.45 60.42 0 35.98 24.45 60.43 24.45 24.45 60.42 24.45Zm0-84.88Zm0 389.9Z" />
  </Svg>
);
export default AccountIcon;
