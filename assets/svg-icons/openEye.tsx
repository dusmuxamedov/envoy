import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const OpenEye = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#9A9999"
        d="M12 18.175c6.117 0 10.245-4.934 10.245-6.464 0-1.521-4.135-6.456-10.245-6.456-6.027 0-10.246 4.935-10.246 6.456 0 1.53 4.212 6.464 10.246 6.464Zm.008-2.35a4.141 4.141 0 0 1-4.136-4.106c-.008-2.305 1.838-4.114 4.136-4.114a4.103 4.103 0 0 1 4.128 4.114c0 2.23-1.846 4.106-4.128 4.106Zm0-2.577c.843 0 1.544-.693 1.544-1.53 0-.843-.7-1.544-1.544-1.544-.86 0-1.552.701-1.552 1.545 0 .836.693 1.53 1.552 1.53Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default OpenEye;
