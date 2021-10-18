import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src="/images/home/tokenIcon.png" width="24px" color="text" style={{"marginRight":"8px"}} />
  );
};

export default Icon;
