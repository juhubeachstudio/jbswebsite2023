/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Facebook176SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Facebook176SvgrepoComSvgIcon(
  props: Facebook176SvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-5 0 20 20"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.821 20v-9h2.733L10 7H6.821V5.052C6.821 4.022 6.848 3 8.287 3h1.458V.14c0-.043-1.253-.14-2.52-.14C4.58 0 2.924 1.657 2.924 4.7V7H0v4h2.923v9h3.898z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Facebook176SvgrepoComSvgIcon;
/* prettier-ignore-end */
