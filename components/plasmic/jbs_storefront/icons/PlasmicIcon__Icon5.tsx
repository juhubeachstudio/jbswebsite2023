// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 8 8"}
      xmlSpace={"preserve"}
      style={{
        darkreaderInlineFill: '#000000"',

        ...(style || {}),
      }}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M6.941 5.04L3.206 1.304 4.242.268l3.736 3.735z"}></path>

      <path d={"M.024 3.157h6.375V4.84H.024z"}></path>

      <path d={"M7.983 3.997L4.248 7.734 3.212 6.7l3.735-3.74z"}></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
