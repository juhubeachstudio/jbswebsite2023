// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SlideLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SlideLeftIcon(props: SlideLeftIconProps) {
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
          "M768 903.232L717.568 960 256 512 717.568 64 768 120.768 364.928 512z"
        }
        fill={"currentColor"}
        style={{
          darkreaderInlineFill: '#000000"',
        }}
      ></path>
    </svg>
  );
}

export default SlideLeftIcon;
/* prettier-ignore-end */
