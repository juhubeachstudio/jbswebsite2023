// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ScheduleValue = "override";
export const ScheduleContext = React.createContext<ScheduleValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useSchedule() {
  return React.useContext(ScheduleContext);
}

export default ScheduleContext;
/* prettier-ignore-end */
