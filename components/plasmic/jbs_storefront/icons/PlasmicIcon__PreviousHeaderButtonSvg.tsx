// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PreviousHeaderButtonSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PreviousHeaderButtonSvgIcon(
  props: PreviousHeaderButtonSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      viewBox={"0 0 37 51"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 2"}>
        <g opacity={".98"} data-name={"Layer 1"}>
          <image
            width={"37"}
            height={"51"}
            xlinkHref={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAzCAYAAAAQEcGFAAAACXBIWXMAAAsSAAALEgHS3X78AAADR0lEQVRYR82Y6ZLaMBCEWxCO3eT9HzVhAaP80DRqjyVZNibZrpoy4GO/nVNyiDHiu2k3d8H/0LeE+jF3wasKIQT9Hjvy5S1QAjICsnMA2nCbQjkYNSrSQghVsM2gDIi2M9PfCPSg1cA2gRIgwuzN+B3IQHdk7xXBXoZyQHukZ6oRakAGukFC6R75GlQB6GB2NCNURAK62a0ayuC9tRqqAnQEcAJwts8Hu+YB4Gq3Dma+CJ5aBVUBIgztZOeABMHjHg0gYAXUDNCHGT21Q/YSq5Hapk91AH3a8YT8bM2jh9gzyVdXXyfQp/3GXBqQAAYkuLuZQk081jWQVwBpxV0BfNnxar8Rdl1HXwB0xrjabkgwF7EJVKmjNz21EigiA/0xu9h3hrDqJaABNQP0iSkQQ0ag32aEutq5ppeASvg6gVj6BGLILpgC0UuzQEA7pwLKQD/xRiCgANXwEoEIRSAOWs2h1UBA3VM68Y/IXvqFXPr0EActK01zaLbSShpBiZfoKQ9FO9gtV0zLnz1pVGm9QEC9+jR8BNOByzHCFsAQ0rgSiFgIBJTDF+SoYAcxAunEjxVbrK4xgwy6E9NVJj/znKbBYpWgohw50Qexh53XnDuJqTd3SKm6CK5WfQRirnCYfiH9QW4K9siFoB3bh2/wS96WRlAxxmj/FKEIxKaoHjgiheeA1Ld08ivQcxncC1bzlPfSBdPdSUT22hnt5F4ENoESbxGMS1mfxPoMBaupG6w1+9h/AlIu1arpA9mL58J5alRALbAilPPWvXCJh+NwZqdXlUJ6RwOs6qlCGIH5vuPBfCP1hdDvKUrACMW8aEnBFKZkxbcvs2v0lWBM/hOmc9FvHPjc0c2zWggWkXKMDVYXiWy+XEEE4IV3CQvAGDI2V2A6K7W9TNQNBXSBEWhAbhXMH2C8VtPVyLKc8poBU6g78raLq1OtPmALT1EVMC3zAQnCv+TgEvlZfShoFRRQBHueQobibIzIc9RvSPubZ48cGB/OvnTHeIDrJmO0S17cp+ZUGEkKxbYAZA8y37RXjfQyFDABI9SAadmPujkqORUK83C1ZNkbnFHRWXEgbwpFOTivKgz1FiiV3zS0YKi3Q61R777vn+ovD+8d0f8z56MAAAAASUVORK5CYII="
            }
            style={{
              mixBlendMode: 'multiply"',
            }}
            opacity={".31"}
          ></image>

          <path
            d={"M23.36 7.61L8.1 22.67 23.33 38"}
            fill={"none"}
            stroke={"currentColor"}
            strokeMiterlimit={"10"}
            strokeWidth={"2"}
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default PreviousHeaderButtonSvgIcon;
/* prettier-ignore-end */
