/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WhatsappSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WhatsappSvgrepoComSvgIcon(
  props: WhatsappSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 01-1.49-.92 5.25 5.25 0 01-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 00.18-.31.38.38 0 000-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 00-.5.23 2.1 2.1 0 00-.65 1.55A3.59 3.59 0 005 8.2 8.32 8.32 0 008.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 001.17.07 1.93 1.93 0 001.26-.88 1.67 1.67 0 00.11-.88c-.05-.07-.17-.12-.36-.21z"
        }
      ></path>

      <path
        d={
          "M13.29 2.68A7.36 7.36 0 008 .5a7.44 7.44 0 00-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 003.55.9H8a7.44 7.44 0 005.29-12.72zM8 14.12a6.12 6.12 0 01-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 019.6-7.65 6.12 6.12 0 011.81 4.37A6.19 6.19 0 018 14.12z"
        }
      ></path>
    </svg>
  );
}

export default WhatsappSvgrepoComSvgIcon;
/* prettier-ignore-end */
