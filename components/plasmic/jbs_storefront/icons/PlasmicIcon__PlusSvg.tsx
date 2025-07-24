/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlusSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlusSvgIcon(props: PlusSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 2"}>
        <path
          d={"M6 1v10M1 6h10"}
          data-name={"Layer 1"}
          fill={"none"}
          stroke={"currentColor"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          strokeWidth={"2"}
        ></path>
      </g>
    </svg>
  );
}

export default PlusSvgIcon;
/* prettier-ignore-end */
