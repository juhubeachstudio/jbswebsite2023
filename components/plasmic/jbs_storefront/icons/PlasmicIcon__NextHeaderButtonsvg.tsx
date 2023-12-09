// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NextHeaderButtonsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NextHeaderButtonsvgIcon(props: NextHeaderButtonsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      viewBox={"0 0 36 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 2"}>
        <g opacity={".98"} data-name={"Layer 1"}>
          <image
            width={"36"}
            height={"50"}
            xlinkHref={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAyCAYAAAA0j3keAAAACXBIWXMAAAsSAAALEgHS3X78AAADFklEQVRYR82Z7Y6bMBBFj0mWpn3/Z91moeD+sC8ejA0kkCgjjZIgBGfvfMI67z2fZM3WCe+269YJzjlnf/sXS+pq1zcgM6BoHl4DV1QowuQu83Ixnwm2ADIwjXEd88bH6N45dxrUDCiDucTPKwkKEsgQfQTGs6BKIbPqfMVzrgRACAD/MoeToCagLG+kzBX4RQJzJKAuus2vw1A1hSzUFwGqjcc80LMMpewQVK0PCeoSz2kJUApbSwI6FaoGZC9kk1wqjaSkL/UpeBJqAvLe+5hHeVmPJEAlOmwDwRNQuUJ5n1EV9QR1xniehVkDggehSiETzECqJlv6grFqbdluqBlQDBssgZrMHQGmISi3pRLshFpLaoXMtgHbqyDBnKbUAihTyVpJBcGcBlVUaAWqZgqfhVpL+CpUdUE7AKUw5jC+4Atb3Rh3QNkbOwLMhSVQCaa4tmyusDugICV9QxrG+cqiqtXK4uP3mW0CQRHKVpvGigZxa45pGA+E5iqfKjZXaRcQFHsUhIteCCAdQZ2RBOTiuS1pIK+OnN1AsIBy1EMB4aZQ7vI272Y51PBh9hBQtnPLlT/5X2/Vk4K5ivv7UG4ZjPKmzVxLm25qV92OcmhntguoAGO3yFt0Adnc6oC/0X/ibwvkH+5DFWUE8if6LR67wrRz9wSQbxJQz1ylha0CbcD8Nn4jXUs9506AEdCdFLaRgjqwArQDxqqjzjySYKTONwUYKlYEegJGeVNTRuGa8qe2fizKfqWachjNLDW3wzBQ70MC0nzK8+YlMJCFbKW8b8btNFeYfjgBBsoKlYDUc/JecyoMLJPaGVfIFDaNBkgj4Yd5rzkEAwYohgvmQHI7n/r42ZHK+xQYqPchl77OHhy7eGwg3Pxu/DAM1IG099qHRQhqqaqkkGbUYRgoAwlmJD3XQ7iZktlOcc2twzBggLyftkELo9ANrL/SOwUG6gqNBJieFDqb2Mqpwfw+DAMZkFFJq4HCp8rzxicQToIBym/yTce2LvOZb77ReMQ+7l8LVaDphAQGvAbC2ibQu+2hx6B32H8raynPpM29vQAAAABJRU5ErkJggg=="
            }
            style={{
              mixBlendMode: 'multiply"',
            }}
            opacity={".31"}
          ></image>

          <path
            d={"M6.77 6.73L22 21.79 6.79 37.11"}
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

export default NextHeaderButtonsvgIcon;
/* prettier-ignore-end */
