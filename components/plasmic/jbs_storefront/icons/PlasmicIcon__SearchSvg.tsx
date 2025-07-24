/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SearchSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SearchSvgIcon(props: SearchSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 10.76 10.67"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.24 10.35C8.9 11.67 8.09 8.52 6.98 7.72c-3.13 2.41-8.21.66-6.71-4.79C1.89-2.93 12.05.88 8.11 6.63c.69.96 3.88 1.99 2.13 3.72zM1.13 4.57c.21 4.12 5.93 4.5 6.45-.17S.92.45 1.13 4.57z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SearchSvgIcon;
/* prettier-ignore-end */
