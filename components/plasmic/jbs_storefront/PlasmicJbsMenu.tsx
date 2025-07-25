/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: heL2P6rJiLNgtnBJPb6i1m
// Component: NFEkw9xPSE

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: yEsI5slGwPm/component

import { useScreenVariants as useScreenVariants_6Hzia3M7Np4Ulu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 6hzia3m7Np4ulu/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_jbs_storefront.module.css"; // plasmic-import: heL2P6rJiLNgtnBJPb6i1m/projectcss
import sty from "./PlasmicJbsMenu.module.css"; // plasmic-import: NFEkw9xPSE/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: ew07hyuAC0c/icon
import HamburgerSvgIcon from "./icons/PlasmicIcon__HamburgerSvg"; // plasmic-import: QybYSQyE3W/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: 3r4KXWygi9v/icon

createPlasmicElementProxy;

export type PlasmicJbsMenu__VariantMembers = {
  revealMenu: "revealMenu";
  revealSubMenu: "revealSubMenu";
};
export type PlasmicJbsMenu__VariantsArgs = {
  revealMenu?: SingleBooleanChoiceArg<"revealMenu">;
  revealSubMenu?: SingleBooleanChoiceArg<"revealSubMenu">;
};
type VariantPropType = keyof PlasmicJbsMenu__VariantsArgs;
export const PlasmicJbsMenu__VariantProps = new Array<VariantPropType>(
  "revealMenu",
  "revealSubMenu"
);

export type PlasmicJbsMenu__ArgsType = {};
type ArgPropType = keyof PlasmicJbsMenu__ArgsType;
export const PlasmicJbsMenu__ArgProps = new Array<ArgPropType>();

export type PlasmicJbsMenu__OverridesType = {
  root?: Flex__<"div">;
  svg?: Flex__<"svg">;
  homeMenuItem?: Flex__<"div">;
};

export interface DefaultJbsMenuProps {
  revealMenu?: SingleBooleanChoiceArg<"revealMenu">;
  revealSubMenu?: SingleBooleanChoiceArg<"revealSubMenu">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicJbsMenu__RenderFunc(props: {
  variants: PlasmicJbsMenu__VariantsArgs;
  args: PlasmicJbsMenu__ArgsType;
  overrides: PlasmicJbsMenu__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "revealMenu",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.revealMenu
      },
      {
        path: "revealSubMenu",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.revealSubMenu
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_6Hzia3M7Np4Ulu()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootrevealMenu]: hasVariant($state, "revealMenu", "revealMenu"),
          [sty.rootrevealSubMenu]: hasVariant(
            $state,
            "revealSubMenu",
            "revealSubMenu"
          )
        }
      )}
    >
      <Button
        className={classNames("__wab_instance", sty.button__df7Kl, {
          [sty.buttonrevealMenu__df7KlxT6MH]: hasVariant(
            $state,
            "revealMenu",
            "revealMenu"
          ),
          [sty.buttonrevealSubMenu__df7KlBjo1Y]: hasVariant(
            $state,
            "revealSubMenu",
            "revealSubMenu"
          )
        })}
        color={"redJbs"}
        onClick={async event => {
          const $steps = {};

          $steps["updateRevealSubMenu"] = true
            ? (() => {
                const actionArgs = { vgroup: "revealMenu", operation: 2 };
                return (({ vgroup, value }) => {
                  if (typeof value === "string") {
                    value = [value];
                  }

                  const oldValue = $stateGet($state, vgroup);
                  $stateSet($state, vgroup, !oldValue);
                  return !oldValue;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateRevealSubMenu"] != null &&
            typeof $steps["updateRevealSubMenu"] === "object" &&
            typeof $steps["updateRevealSubMenu"].then === "function"
          ) {
            $steps["updateRevealSubMenu"] = await $steps["updateRevealSubMenu"];
          }

          $steps["updateRevealSubMenu2"] = true
            ? (() => {
                const actionArgs = { vgroup: "revealSubMenu", operation: 6 };
                return (({ vgroup, value }) => {
                  if (typeof value === "string") {
                    value = [value];
                  }

                  $stateSet($state, vgroup, false);
                  return false;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateRevealSubMenu2"] != null &&
            typeof $steps["updateRevealSubMenu2"] === "object" &&
            typeof $steps["updateRevealSubMenu2"].then === "function"
          ) {
            $steps["updateRevealSubMenu2"] = await $steps[
              "updateRevealSubMenu2"
            ];
          }
        }}
        size={"minimal"}
      >
        <HamburgerSvgIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </Button>
      <Button
        className={classNames("__wab_instance", sty.button__zu9X, {
          [sty.buttonrevealMenu__zu9XxT6MH]: hasVariant(
            $state,
            "revealMenu",
            "revealMenu"
          ),
          [sty.buttonrevealSubMenu__zu9XBjo1Y]: hasVariant(
            $state,
            "revealSubMenu",
            "revealSubMenu"
          )
        })}
        color={
          hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
        }
        link={`/`}
        shape={"sharp"}
        size={"minimal"}
      >
        <div
          data-plasmic-name={"homeMenuItem"}
          data-plasmic-override={overrides.homeMenuItem}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.homeMenuItem
          )}
        >
          {"HOME"}
        </div>
      </Button>
      <Button
        className={classNames("__wab_instance", sty.button__v8Y8, {
          [sty.buttonrevealMenu__v8Y8XT6MH]: hasVariant(
            $state,
            "revealMenu",
            "revealMenu"
          ),
          [sty.buttonrevealSubMenu__v8Y8Bjo1Y]: hasVariant(
            $state,
            "revealSubMenu",
            "revealSubMenu"
          )
        })}
        color={
          hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
        }
        link={`/about`}
        shape={"sharp"}
        size={"minimal"}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__aV3Bq
          )}
        >
          {"ABOUT"}
        </div>
      </Button>
      <div
        className={classNames(projectcss.all, sty.freeBox__wjmov, {
          [sty.freeBoxrevealMenu__wjmovxT6MH]: hasVariant(
            $state,
            "revealMenu",
            "revealMenu"
          ),
          [sty.freeBoxrevealSubMenu__wjmovBjo1Y]: hasVariant(
            $state,
            "revealSubMenu",
            "revealSubMenu"
          )
        })}
      >
        <Button
          className={classNames("__wab_instance", sty.button__lZ0WF, {
            [sty.buttonrevealMenu__lZ0WFxT6MH]: hasVariant(
              $state,
              "revealMenu",
              "revealMenu"
            ),
            [sty.buttonrevealSubMenu__lZ0WFBjo1Y]: hasVariant(
              $state,
              "revealSubMenu",
              "revealSubMenu"
            )
          })}
          color={
            hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
          }
          onClick={async event => {
            const $steps = {};

            $steps["updateRevealSubMenu"] = true
              ? (() => {
                  const actionArgs = { vgroup: "revealSubMenu", operation: 2 };
                  return (({ vgroup, value }) => {
                    if (typeof value === "string") {
                      value = [value];
                    }

                    const oldValue = $stateGet($state, vgroup);
                    $stateSet($state, vgroup, !oldValue);
                    return !oldValue;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateRevealSubMenu"] != null &&
              typeof $steps["updateRevealSubMenu"] === "object" &&
              typeof $steps["updateRevealSubMenu"].then === "function"
            ) {
              $steps["updateRevealSubMenu"] = await $steps[
                "updateRevealSubMenu"
              ];
            }
          }}
          shape={"sharp"}
          size={"minimal"}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__kfRf6
            )}
          >
            {"SHOP"}
          </div>
        </Button>
        <div
          className={classNames(projectcss.all, sty.freeBox__o2Iiw, {
            [sty.freeBoxrevealMenu__o2IiWxT6MH]: hasVariant(
              $state,
              "revealMenu",
              "revealMenu"
            ),
            [sty.freeBoxrevealSubMenu__o2IiwBjo1Y]: hasVariant(
              $state,
              "revealSubMenu",
              "revealSubMenu"
            )
          })}
        >
          <Button
            alignment={"leftAligned"}
            className={classNames("__wab_instance", sty.button__cQnou, {
              [sty.buttonrevealMenu__cQnoUxT6MH]: hasVariant(
                $state,
                "revealMenu",
                "revealMenu"
              ),
              [sty.buttonrevealSubMenu__cQnouBjo1Y]: hasVariant(
                $state,
                "revealSubMenu",
                "revealSubMenu"
              )
            })}
            color={
              hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
            }
            link={`/categories`}
            onClick={async event => {
              const $steps = {};

              $steps["updateRevealSubMenu"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "revealSubMenu",
                      operation: 2
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = $stateGet($state, vgroup);
                      $stateSet($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateRevealSubMenu"] != null &&
                typeof $steps["updateRevealSubMenu"] === "object" &&
                typeof $steps["updateRevealSubMenu"].then === "function"
              ) {
                $steps["updateRevealSubMenu"] = await $steps[
                  "updateRevealSubMenu"
                ];
              }
            }}
            size={"compact"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__aqLhj
              )}
            >
              {"VIEW CATEGORIES"}
            </div>
          </Button>
          <Button
            alignment={"leftAligned"}
            className={classNames("__wab_instance", sty.button___7ZQk5, {
              [sty.buttonrevealMenu___7ZQk5XT6MH]: hasVariant(
                $state,
                "revealMenu",
                "revealMenu"
              ),
              [sty.buttonrevealSubMenu___7ZQk5Bjo1Y]: hasVariant(
                $state,
                "revealSubMenu",
                "revealSubMenu"
              )
            })}
            color={
              hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
            }
            link={`/category/${"all"}`}
            onClick={async event => {
              const $steps = {};

              $steps["updateRevealSubMenu"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "revealSubMenu",
                      operation: 2
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = $stateGet($state, vgroup);
                      $stateSet($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateRevealSubMenu"] != null &&
                typeof $steps["updateRevealSubMenu"] === "object" &&
                typeof $steps["updateRevealSubMenu"].then === "function"
              ) {
                $steps["updateRevealSubMenu"] = await $steps[
                  "updateRevealSubMenu"
                ];
              }
            }}
            size={"compact"}
          >
            {"ALL"}
          </Button>
          <Button
            alignment={"leftAligned"}
            className={classNames("__wab_instance", sty.button__ydw9F, {
              [sty.buttonrevealMenu__ydw9FxT6MH]: hasVariant(
                $state,
                "revealMenu",
                "revealMenu"
              ),
              [sty.buttonrevealSubMenu__ydw9FBjo1Y]: hasVariant(
                $state,
                "revealSubMenu",
                "revealSubMenu"
              )
            })}
            color={
              hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
            }
            link={`/category/${"caps"}`}
            onClick={async event => {
              const $steps = {};

              $steps["updateRevealSubMenu"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "revealSubMenu",
                      operation: 2
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = $stateGet($state, vgroup);
                      $stateSet($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateRevealSubMenu"] != null &&
                typeof $steps["updateRevealSubMenu"] === "object" &&
                typeof $steps["updateRevealSubMenu"].then === "function"
              ) {
                $steps["updateRevealSubMenu"] = await $steps[
                  "updateRevealSubMenu"
                ];
              }
            }}
            size={"compact"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fWbw9
              )}
            >
              {"AASHIQ CAPS"}
            </div>
          </Button>
          <Button
            alignment={"leftAligned"}
            className={classNames("__wab_instance", sty.button__jaHHp, {
              [sty.buttonrevealMenu__jaHHpxT6MH]: hasVariant(
                $state,
                "revealMenu",
                "revealMenu"
              ),
              [sty.buttonrevealSubMenu__jaHHpBjo1Y]: hasVariant(
                $state,
                "revealSubMenu",
                "revealSubMenu"
              )
            })}
            color={
              hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
            }
            link={`/category/${"flower-hat"}`}
            onClick={async event => {
              const $steps = {};

              $steps["updateRevealSubMenu"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "revealSubMenu",
                      operation: 2
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = $stateGet($state, vgroup);
                      $stateSet($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateRevealSubMenu"] != null &&
                typeof $steps["updateRevealSubMenu"] === "object" &&
                typeof $steps["updateRevealSubMenu"].then === "function"
              ) {
                $steps["updateRevealSubMenu"] = await $steps[
                  "updateRevealSubMenu"
                ];
              }
            }}
            size={"compact"}
          >
            {"FLOWER HATS"}
          </Button>
          <Button
            alignment={"leftAligned"}
            className={classNames("__wab_instance", sty.button___6Vtfj, {
              [sty.buttonrevealMenu___6VtfjxT6MH]: hasVariant(
                $state,
                "revealMenu",
                "revealMenu"
              ),
              [sty.buttonrevealSubMenu___6VtfjBjo1Y]: hasVariant(
                $state,
                "revealSubMenu",
                "revealSubMenu"
              )
            })}
            color={
              hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
            }
            link={`/category/${"bucket-hats"}`}
            onClick={async event => {
              const $steps = {};

              $steps["updateRevealSubMenu"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "revealSubMenu",
                      operation: 2
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = $stateGet($state, vgroup);
                      $stateSet($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateRevealSubMenu"] != null &&
                typeof $steps["updateRevealSubMenu"] === "object" &&
                typeof $steps["updateRevealSubMenu"].then === "function"
              ) {
                $steps["updateRevealSubMenu"] = await $steps[
                  "updateRevealSubMenu"
                ];
              }
            }}
            size={"compact"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wpJat
              )}
            >
              {"BUCKET HATS"}
            </div>
          </Button>
          <Button
            alignment={"leftAligned"}
            className={classNames("__wab_instance", sty.button__e4Kzw, {
              [sty.buttonrevealMenu__e4KzWxT6MH]: hasVariant(
                $state,
                "revealMenu",
                "revealMenu"
              ),
              [sty.buttonrevealSubMenu__e4KzwBjo1Y]: hasVariant(
                $state,
                "revealSubMenu",
                "revealSubMenu"
              )
            })}
            color={
              hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
            }
            link={`/category/${"collars"}`}
            onClick={async event => {
              const $steps = {};

              $steps["updateRevealSubMenu"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "revealSubMenu",
                      operation: 2
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = $stateGet($state, vgroup);
                      $stateSet($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateRevealSubMenu"] != null &&
                typeof $steps["updateRevealSubMenu"] === "object" &&
                typeof $steps["updateRevealSubMenu"].then === "function"
              ) {
                $steps["updateRevealSubMenu"] = await $steps[
                  "updateRevealSubMenu"
                ];
              }
            }}
            size={"compact"}
          >
            {"COLLARS"}
          </Button>
          <Button
            alignment={"leftAligned"}
            className={classNames("__wab_instance", sty.button__xZk2H, {
              [sty.buttonrevealMenu__xZk2HxT6MH]: hasVariant(
                $state,
                "revealMenu",
                "revealMenu"
              ),
              [sty.buttonrevealSubMenu__xZk2HBjo1Y]: hasVariant(
                $state,
                "revealSubMenu",
                "revealSubMenu"
              )
            })}
            color={
              hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
            }
            link={`/category/${"bags"}`}
            onClick={async event => {
              const $steps = {};

              $steps["updateRevealSubMenu"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "revealSubMenu",
                      operation: 2
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = $stateGet($state, vgroup);
                      $stateSet($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateRevealSubMenu"] != null &&
                typeof $steps["updateRevealSubMenu"] === "object" &&
                typeof $steps["updateRevealSubMenu"].then === "function"
              ) {
                $steps["updateRevealSubMenu"] = await $steps[
                  "updateRevealSubMenu"
                ];
              }
            }}
            size={"compact"}
          >
            {"BAGS"}
          </Button>
          <Button
            alignment={"leftAligned"}
            className={classNames("__wab_instance", sty.button__ctUk7, {
              [sty.buttonrevealMenu__ctUk7XT6MH]: hasVariant(
                $state,
                "revealMenu",
                "revealMenu"
              ),
              [sty.buttonrevealSubMenu__ctUk7Bjo1Y]: hasVariant(
                $state,
                "revealSubMenu",
                "revealSubMenu"
              )
            })}
            color={
              hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
            }
            link={`/category/${"chakhna"}`}
            onClick={async event => {
              const $steps = {};

              $steps["updateRevealSubMenu"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "revealSubMenu",
                      operation: 2
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = $stateGet($state, vgroup);
                      $stateSet($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateRevealSubMenu"] != null &&
                typeof $steps["updateRevealSubMenu"] === "object" &&
                typeof $steps["updateRevealSubMenu"].then === "function"
              ) {
                $steps["updateRevealSubMenu"] = await $steps[
                  "updateRevealSubMenu"
                ];
              }
            }}
            size={"compact"}
          >
            {"CHAKHNA"}
          </Button>
          <Button
            alignment={"leftAligned"}
            className={classNames("__wab_instance", sty.button__zSoiz, {
              [sty.buttonrevealMenu__zSoizxT6MH]: hasVariant(
                $state,
                "revealMenu",
                "revealMenu"
              ),
              [sty.buttonrevealSubMenu__zSoizBjo1Y]: hasVariant(
                $state,
                "revealSubMenu",
                "revealSubMenu"
              )
            })}
            color={
              hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
            }
            link={`/category/${"pet-stuff"}`}
            onClick={async event => {
              const $steps = {};

              $steps["updateRevealSubMenu"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "revealSubMenu",
                      operation: 2
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = $stateGet($state, vgroup);
                      $stateSet($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateRevealSubMenu"] != null &&
                typeof $steps["updateRevealSubMenu"] === "object" &&
                typeof $steps["updateRevealSubMenu"].then === "function"
              ) {
                $steps["updateRevealSubMenu"] = await $steps[
                  "updateRevealSubMenu"
                ];
              }
            }}
            size={"compact"}
          >
            {"PET STUFF"}
          </Button>
          <Button
            alignment={"leftAligned"}
            className={classNames("__wab_instance", sty.button___9WiLd, {
              [sty.buttonrevealMenu___9WiLdxT6MH]: hasVariant(
                $state,
                "revealMenu",
                "revealMenu"
              ),
              [sty.buttonrevealSubMenu___9WiLdBjo1Y]: hasVariant(
                $state,
                "revealSubMenu",
                "revealSubMenu"
              )
            })}
            color={
              hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
            }
            link={`/category/${"decor"}`}
            onClick={async event => {
              const $steps = {};

              $steps["updateRevealSubMenu"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "revealSubMenu",
                      operation: 2
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = $stateGet($state, vgroup);
                      $stateSet($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateRevealSubMenu"] != null &&
                typeof $steps["updateRevealSubMenu"] === "object" &&
                typeof $steps["updateRevealSubMenu"].then === "function"
              ) {
                $steps["updateRevealSubMenu"] = await $steps[
                  "updateRevealSubMenu"
                ];
              }
            }}
            size={"compact"}
          >
            {"DECOR"}
          </Button>
          <Button
            alignment={"leftAligned"}
            className={classNames("__wab_instance", sty.button__llNb, {
              [sty.buttonrevealMenu__llNbxT6MH]: hasVariant(
                $state,
                "revealMenu",
                "revealMenu"
              ),
              [sty.buttonrevealSubMenu__llNbBjo1Y]: hasVariant(
                $state,
                "revealSubMenu",
                "revealSubMenu"
              )
            })}
            color={
              hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
            }
            link={`/category/${"giftsss"}`}
            onClick={async event => {
              const $steps = {};

              $steps["updateRevealSubMenu"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "revealSubMenu",
                      operation: 2
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = $stateGet($state, vgroup);
                      $stateSet($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateRevealSubMenu"] != null &&
                typeof $steps["updateRevealSubMenu"] === "object" &&
                typeof $steps["updateRevealSubMenu"].then === "function"
              ) {
                $steps["updateRevealSubMenu"] = await $steps[
                  "updateRevealSubMenu"
                ];
              }
            }}
            size={"compact"}
          >
            {"GIFTSSS"}
          </Button>
          <Button
            alignment={"leftAligned"}
            className={classNames("__wab_instance", sty.button__yguV, {
              [sty.buttonrevealMenu__yguVxT6MH]: hasVariant(
                $state,
                "revealMenu",
                "revealMenu"
              ),
              [sty.buttonrevealSubMenu__yguVBjo1Y]: hasVariant(
                $state,
                "revealSubMenu",
                "revealSubMenu"
              )
            })}
            color={
              hasVariant($state, "revealMenu", "revealMenu") ? "red" : "redJbs"
            }
            link={`/category/${"mystery-boxes"}`}
            onClick={async event => {
              const $steps = {};

              $steps["updateRevealSubMenu"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "revealSubMenu",
                      operation: 2
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = $stateGet($state, vgroup);
                      $stateSet($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateRevealSubMenu"] != null &&
                typeof $steps["updateRevealSubMenu"] === "object" &&
                typeof $steps["updateRevealSubMenu"].then === "function"
              ) {
                $steps["updateRevealSubMenu"] = await $steps[
                  "updateRevealSubMenu"
                ];
              }
            }}
            size={"compact"}
          >
            {"MYSTERY BOX"}
          </Button>
        </div>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "homeMenuItem"],
  svg: ["svg"],
  homeMenuItem: ["homeMenuItem"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  homeMenuItem: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicJbsMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicJbsMenu__VariantsArgs;
    args?: PlasmicJbsMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicJbsMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicJbsMenu__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
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
          internalArgPropNames: PlasmicJbsMenu__ArgProps,
          internalVariantPropNames: PlasmicJbsMenu__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicJbsMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicJbsMenu";
  } else {
    func.displayName = `PlasmicJbsMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicJbsMenu = Object.assign(
  // Top-level PlasmicJbsMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    homeMenuItem: makeNodeComponent("homeMenuItem"),

    // Metadata about props expected for PlasmicJbsMenu
    internalVariantProps: PlasmicJbsMenu__VariantProps,
    internalArgProps: PlasmicJbsMenu__ArgProps
  }
);

export default PlasmicJbsMenu;
/* prettier-ignore-end */
