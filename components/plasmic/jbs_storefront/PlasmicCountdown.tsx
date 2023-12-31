// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: heL2P6rJiLNgtnBJPb6i1m
// Component: zowCfpHLJi3H

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import CountdownNumber from "../../CountdownNumber"; // plasmic-import: wHIYrv4suznQ/component
import { Timer } from "@plasmicpkgs/plasmic-basic-components";

import { ScheduleValue, useSchedule } from "./PlasmicGlobalVariant__Schedule"; // plasmic-import: zd5JVdnkSq7D/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_jbs_storefront.module.css"; // plasmic-import: heL2P6rJiLNgtnBJPb6i1m/projectcss
import sty from "./PlasmicCountdown.module.css"; // plasmic-import: zowCfpHLJi3H/css

createPlasmicElementProxy;

export type PlasmicCountdown__VariantMembers = {};
export type PlasmicCountdown__VariantsArgs = {};
type VariantPropType = keyof PlasmicCountdown__VariantsArgs;
export const PlasmicCountdown__VariantProps = new Array<VariantPropType>();

export type PlasmicCountdown__ArgsType = {
  targetTimeUtc?: string;
};
type ArgPropType = keyof PlasmicCountdown__ArgsType;
export const PlasmicCountdown__ArgProps = new Array<ArgPropType>(
  "targetTimeUtc"
);

export type PlasmicCountdown__OverridesType = {
  root?: p.Flex<"div">;
  timer?: p.Flex<typeof Timer>;
};

export interface DefaultCountdownProps {
  targetTimeUtc?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCountdown__RenderFunc(props: {
  variants: PlasmicCountdown__VariantsArgs;
  args: PlasmicCountdown__ArgsType;
  overrides: PlasmicCountdown__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          targetTimeUtc: "2025-12-10T23:26:25.224Z"
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "remainingSeconds",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    schedule: useSchedule()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootglobal_schedule_override]: hasVariant(
            globalVariants,
            "schedule",
            "override"
          )
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___8VMx, {
          [sty.freeBoxglobal_schedule_override___8VMx2BEqj]: hasVariant(
            globalVariants,
            "schedule",
            "override"
          )
        })}
      >
        <CountdownNumber
          className={classNames("__wab_instance", sty.countdownNumber__o8Cya, {
            [sty.countdownNumberglobal_schedule_override__o8Cya2BEqj]:
              hasVariant(globalVariants, "schedule", "override")
          })}
          number={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__z2RhB,
                {
                  [sty.textglobal_schedule_override__z2RhB2BEqj]: hasVariant(
                    globalVariants,
                    "schedule",
                    "override"
                  )
                }
              )}
            >
              {hasVariant(globalVariants, "schedule", "override") ? (
                <React.Fragment>
                  {(() => {
                    try {
                      return Math.floor($state.remainingSeconds / 60 / 60 / 24);
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "42";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {(() => {
                    try {
                      return Math.floor($state.remainingSeconds / 60 / 60 / 24);
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "42";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              )}
            </div>
          }
          unit={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fvzjS,
                {
                  [sty.textglobal_schedule_override__fvzjS2BEqj]: hasVariant(
                    globalVariants,
                    "schedule",
                    "override"
                  )
                }
              )}
            >
              {hasVariant(globalVariants, "schedule", "override") ? "D" : "D"}
            </div>
          }
        />

        <div
          className={classNames(projectcss.all, sty.freeBox__pakFd, {
            [sty.freeBoxglobal_schedule_override__pakFd2BEqj]: hasVariant(
              globalVariants,
              "schedule",
              "override"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__vm7Aa,
              {
                [sty.textglobal_schedule_override__vm7Aa2BEqj]: hasVariant(
                  globalVariants,
                  "schedule",
                  "override"
                )
              }
            )}
          >
            {":"}
          </div>
        </div>
        <CountdownNumber
          className={classNames("__wab_instance", sty.countdownNumber__asVz, {
            [sty.countdownNumberglobal_schedule_override__asVz2BEqj]:
              hasVariant(globalVariants, "schedule", "override")
          })}
          number={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gVncp,
                {
                  [sty.textglobal_schedule_override__gVncp2BEqj]: hasVariant(
                    globalVariants,
                    "schedule",
                    "override"
                  )
                }
              )}
            >
              {hasVariant(globalVariants, "schedule", "override") ? (
                <React.Fragment>
                  {(() => {
                    try {
                      return Math.floor($state.remainingSeconds / 60 / 60) % 24;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "42";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {(() => {
                    try {
                      return Math.floor($state.remainingSeconds / 60 / 60) % 24;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "42";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              )}
            </div>
          }
          unit={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uclA,
                {
                  [sty.textglobal_schedule_override__uclA2BEqj]: hasVariant(
                    globalVariants,
                    "schedule",
                    "override"
                  )
                }
              )}
            >
              {hasVariant(globalVariants, "schedule", "override") ? "H" : "H"}
            </div>
          }
        />

        <div
          className={classNames(projectcss.all, sty.freeBox___1JEmD, {
            [sty.freeBoxglobal_schedule_override___1JEmD2BEqj]: hasVariant(
              globalVariants,
              "schedule",
              "override"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__wnsQu,
              {
                [sty.textglobal_schedule_override__wnsQu2BEqj]: hasVariant(
                  globalVariants,
                  "schedule",
                  "override"
                )
              }
            )}
          >
            {":"}
          </div>
        </div>
        <CountdownNumber
          className={classNames("__wab_instance", sty.countdownNumber__lr4Ec, {
            [sty.countdownNumberglobal_schedule_override__lr4Ec2BEqj]:
              hasVariant(globalVariants, "schedule", "override")
          })}
          number={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__d6Dm,
                {
                  [sty.textglobal_schedule_override__d6Dm2BEqj]: hasVariant(
                    globalVariants,
                    "schedule",
                    "override"
                  )
                }
              )}
            >
              {hasVariant(globalVariants, "schedule", "override") ? (
                <React.Fragment>
                  {(() => {
                    try {
                      return Math.floor($state.remainingSeconds / 60) % 60;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "42";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {(() => {
                    try {
                      return Math.floor($state.remainingSeconds / 60) % 60;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "42";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              )}
            </div>
          }
          unit={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hYnpb,
                {
                  [sty.textglobal_schedule_override__hYnpb2BEqj]: hasVariant(
                    globalVariants,
                    "schedule",
                    "override"
                  )
                }
              )}
            >
              {hasVariant(globalVariants, "schedule", "override") ? "M" : "M"}
            </div>
          }
        />

        <div
          className={classNames(projectcss.all, sty.freeBox__rleSk, {
            [sty.freeBoxglobal_schedule_override__rleSk2BEqj]: hasVariant(
              globalVariants,
              "schedule",
              "override"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__abzYa,
              {
                [sty.textglobal_schedule_override__abzYa2BEqj]: hasVariant(
                  globalVariants,
                  "schedule",
                  "override"
                )
              }
            )}
          >
            {":"}
          </div>
        </div>
        <CountdownNumber
          className={classNames("__wab_instance", sty.countdownNumber___9HtnV, {
            [sty.countdownNumberglobal_schedule_override___9HtnV2BEqj]:
              hasVariant(globalVariants, "schedule", "override")
          })}
          number={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7O2Zg,
                {
                  [sty.textglobal_schedule_override___7O2Zg2BEqj]: hasVariant(
                    globalVariants,
                    "schedule",
                    "override"
                  )
                }
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $state.remainingSeconds % 60;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "42";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          }
          unit={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gmztY,
                {
                  [sty.textglobal_schedule_override__gmztY2BEqj]: hasVariant(
                    globalVariants,
                    "schedule",
                    "override"
                  )
                }
              )}
            >
              {hasVariant(globalVariants, "schedule", "override") ? "S" : "S"}
            </div>
          }
        />
      </p.Stack>
      <Timer
        data-plasmic-name={"timer"}
        data-plasmic-override={overrides.timer}
        className={classNames("__wab_instance", sty.timer, {
          [sty.timerglobal_schedule_override]: hasVariant(
            globalVariants,
            "schedule",
            "override"
          )
        })}
        intervalSeconds={1}
        isRunning={true}
        onTick={async () => {
          const $steps = {};

          $steps["updateRemainingSeconds"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["remainingSeconds"]
                  },
                  operation: 0,
                  value: Math.floor(
                    (new Date($props.targetTimeUtc).getTime() -
                      new Date().getTime()) /
                      1000
                  )
                };
                return (({ variable, value, startIndex, deleteCount }) => {
                  if (!variable) {
                    return;
                  }
                  const { objRoot, variablePath } = variable;

                  p.set(objRoot, variablePath, value);
                  return value;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateRemainingSeconds"] != null &&
            typeof $steps["updateRemainingSeconds"] === "object" &&
            typeof $steps["updateRemainingSeconds"].then === "function"
          ) {
            $steps["updateRemainingSeconds"] = await $steps[
              "updateRemainingSeconds"
            ];
          }
        }}
        runWhileEditing={true}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "timer"],
  timer: ["timer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  timer: typeof Timer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCountdown__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCountdown__VariantsArgs;
    args?: PlasmicCountdown__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCountdown__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCountdown__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCountdown__ArgProps,
          internalVariantPropNames: PlasmicCountdown__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCountdown__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCountdown";
  } else {
    func.displayName = `PlasmicCountdown.${nodeName}`;
  }
  return func;
}

export const PlasmicCountdown = Object.assign(
  // Top-level PlasmicCountdown renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    timer: makeNodeComponent("timer"),

    // Metadata about props expected for PlasmicCountdown
    internalVariantProps: PlasmicCountdown__VariantProps,
    internalArgProps: PlasmicCountdown__ArgProps
  }
);

export default PlasmicCountdown;
/* prettier-ignore-end */
