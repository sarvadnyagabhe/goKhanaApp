import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const FoodCard = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M302.69-590.77v-253.85q0-6.53 4.48-10.96 4.48-4.42 11.11-4.42 5.87 0 10.53 4.42 4.65 4.43 4.65 10.96v253.85h81.92v-253.85q0-6.53 4.49-10.96 4.48-4.42 11.12-4.42 6.63 0 10.89 4.42 4.27 4.43 4.27 10.96v253.35q0 52.35-33.03 88.08-33.04 35.73-79.66 40.57v347.24q0 6.53-4.85 10.96-4.86 4.42-11.12 4.42-6.26 0-10.53-4.42-4.27-4.43-4.27-10.96v-347.24q-47.38-4.84-80.42-40.57-33.04-35.73-33.04-88.08v-253.35q0-6.53 4.49-10.96 4.48-4.42 11.11-4.42 6.63 0 10.9 4.42 4.27 4.43 4.27 10.96v253.85h82.69ZM678.46-420H610.5q-12.08 0-19.94-7.96-7.87-7.96-7.87-19.73v-244.23q0-79.77 31.35-123.93Q645.38-860 680.62-860q13.67 0 21.14 8.59 7.47 8.59 7.47 23.1v712.93q0 6.53-4.48 10.96-4.49 4.42-11.12 4.42-6.63 0-10.9-4.42-4.27-4.43-4.27-10.96V-420Z" />
  </Svg>
);
export default FoodCard;
