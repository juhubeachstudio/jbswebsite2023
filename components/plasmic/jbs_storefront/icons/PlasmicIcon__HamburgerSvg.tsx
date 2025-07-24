/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HamburgerSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HamburgerSvgIcon(props: HamburgerSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 9.86 8.68"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.03 1.3C5.75.89 7 1.06 7.98 1.12c1.17.07 1.87.12 1.88-.46 0-.64-1-.72-2.66-.63C3.64.23 1.24.01.5.16c-.5.1-.67.65-.3.99.29.27.99.24 1.83.15zm0 3.65c3.72-.41 4.97-.24 5.95-.18 1.17.07 1.87.12 1.88-.46 0-.64-1-.72-2.66-.63-3.55.2-5.95-.02-6.7.13-.5.1-.67.66-.3 1 .29.27.99.24 1.83.15zm5.8 2.42c-3.72.41-4.97.24-5.95.18C.71 7.49 0 7.44 0 8.01c0 .64 1 .72 2.66.63 3.55-.2 5.95.02 6.7-.13.5-.1.67-.65.3-.99-.29-.27-.99-.24-1.83-.15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HamburgerSvgIcon;
/* prettier-ignore-end */
