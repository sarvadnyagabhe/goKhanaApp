import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const FoodcourtIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    fill="#5f6368"
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="m168.59-133.85-35.38-35.38 412.56-412.56q-21.05-47.8-9.36-96.79 11.69-48.98 54.44-91.57 42.02-41.62 103.41-55.39 61.38-13.77 101.87 26.46 40.64 40.64 26.33 101.62-14.31 60.97-57.41 104.74-40.44 41-88.88 53.23-48.45 12.23-94.61-7.33l-69.79 69.79 308.05 307.8-35.38 35.38-308.06-306.87-307.79 306.87ZM292.28-478 177.31-592.72q-47.9-48.15-50.45-113.66-2.55-65.52 40.91-117.47l234.97 235.39L292.28-478Z" />
  </Svg>
);
export default FoodcourtIcon;
