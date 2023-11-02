// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MinussvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MinussvgIcon(props: MinussvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 12 2"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 2"}>
        <path
          fill={"none"}
          stroke={"currentColor"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          strokeWidth={"2"}
          d={"M1 1h10"}
          data-name={"Layer 1"}
        ></path>
      </g>
    </svg>
  );
}

export default MinussvgIcon;
/* prettier-ignore-end */
