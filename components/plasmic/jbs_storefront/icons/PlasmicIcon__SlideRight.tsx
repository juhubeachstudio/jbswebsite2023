// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SlideRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SlideRightIcon(props: SlideRightIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1024 1024"}
      className={classNames("plasmic-default__svg", className, "icon")}
      version={"1.1"}
      fill={"currentColor"}
      style={{
        darkreaderInlineFill: '#000000"',

        ...(style || {}),
      }}
      height={"1em"}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M256 120.768L306.432 64 768 512 306.432 960 256 903.232 659.072 512z"
        }
        fill={"currentColor"}
        style={{
          darkreaderInlineFill: '#000000"',
        }}
      ></path>
    </svg>
  );
}

export default SlideRightIcon;
/* prettier-ignore-end */
