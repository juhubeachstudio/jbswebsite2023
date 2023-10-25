// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LikesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LikesvgIcon(props: LikesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 11.57 10.03"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.53 3.76c-.38 3.18-5.05 6.27-5.77 6.27C4.39 10.03-.2 6.79 0 3.76S4.17-1.87 5.66 1.8c1.7-2.47 6.41-2.56 5.87 1.96z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LikesvgIcon;
/* prettier-ignore-end */
