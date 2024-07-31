import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const QRIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="#000"
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M100-679.23V-860h180.77v60H160v120.77h-60ZM100-100v-180.77h60V-160h120.77v60H100Zm579.23 0v-60H800v-120.77h60V-100H679.23ZM800-679.23V-800H679.23v-60H860v180.77h-60ZM688.85-271.15h54.23v54.23h-54.23v-54.23Zm0-108.47h54.23v54.23h-54.23v-54.23Zm-54.24 54.23h54.24v54.24h-54.24v-54.24Zm-54.23 54.24h54.23v54.23h-54.23v-54.23Zm-54.23-54.24h54.23v54.24h-54.23v-54.24Zm108.46-108.46h54.24v54.23h-54.24v-54.23Zm-54.23 54.23h54.23v54.23h-54.23v-54.23Zm-54.23-54.23h54.23v54.23h-54.23v-54.23Zm216.93-309.23v216.93H526.15v-216.93h216.93ZM433.85-433.85v216.93H216.92v-216.93h216.93Zm0-309.23v216.93H216.92v-216.93h216.93Zm-47.7 478.46v-121.53H264.62v121.53h121.53Zm0-309.23v-121.53H264.62v121.53h121.53Zm309.23 0v-121.53H573.85v121.53h121.53Z" />
  </Svg>
);
export default QRIcon;
