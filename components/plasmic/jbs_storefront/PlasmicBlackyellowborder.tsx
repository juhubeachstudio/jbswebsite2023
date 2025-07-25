/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: heL2P6rJiLNgtnBJPb6i1m
// Component: qeyEUvMFwY

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

import Marquee from "react-fast-marquee"; // plasmic-import: m9EkGU-jS0/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_jbs_storefront.module.css"; // plasmic-import: heL2P6rJiLNgtnBJPb6i1m/projectcss
import sty from "./PlasmicBlackyellowborder.module.css"; // plasmic-import: qeyEUvMFwY/css

createPlasmicElementProxy;

export type PlasmicBlackyellowborder__VariantMembers = {};
export type PlasmicBlackyellowborder__VariantsArgs = {};
type VariantPropType = keyof PlasmicBlackyellowborder__VariantsArgs;
export const PlasmicBlackyellowborder__VariantProps =
  new Array<VariantPropType>();

export type PlasmicBlackyellowborder__ArgsType = { play?: boolean };
type ArgPropType = keyof PlasmicBlackyellowborder__ArgsType;
export const PlasmicBlackyellowborder__ArgProps = new Array<ArgPropType>(
  "play"
);

export type PlasmicBlackyellowborder__OverridesType = {
  root?: Flex__<"div">;
  marquee?: Flex__<typeof Marquee>;
  freeBox?: Flex__<"div">;
};

export interface DefaultBlackyellowborderProps {
  play?: boolean;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBlackyellowborder__RenderFunc(props: {
  variants: PlasmicBlackyellowborder__VariantsArgs;
  args: PlasmicBlackyellowborder__ArgsType;
  overrides: PlasmicBlackyellowborder__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          play: false
        },
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
        sty.root
      )}
    >
      <Marquee
        data-plasmic-name={"marquee"}
        data-plasmic-override={overrides.marquee}
        autoFill={true}
        play={args.play}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        />
      </Marquee>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "marquee", "freeBox"],
  marquee: ["marquee", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  marquee: typeof Marquee;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlackyellowborder__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlackyellowborder__VariantsArgs;
    args?: PlasmicBlackyellowborder__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlackyellowborder__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBlackyellowborder__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicBlackyellowborder__ArgProps,
          internalVariantPropNames: PlasmicBlackyellowborder__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBlackyellowborder__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlackyellowborder";
  } else {
    func.displayName = `PlasmicBlackyellowborder.${nodeName}`;
  }
  return func;
}

export const PlasmicBlackyellowborder = Object.assign(
  // Top-level PlasmicBlackyellowborder renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    marquee: makeNodeComponent("marquee"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicBlackyellowborder
    internalVariantProps: PlasmicBlackyellowborder__VariantProps,
    internalArgProps: PlasmicBlackyellowborder__ArgProps
  }
);

export default PlasmicBlackyellowborder;
/* prettier-ignore-end */
