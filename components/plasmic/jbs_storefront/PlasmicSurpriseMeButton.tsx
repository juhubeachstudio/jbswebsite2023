/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: heL2P6rJiLNgtnBJPb6i1m
// Component: cuLrZTUy4Zrk

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

import { useScreenVariants as useScreenVariants_6Hzia3M7Np4Ulu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 6hzia3m7Np4ulu/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_jbs_storefront.module.css"; // plasmic-import: heL2P6rJiLNgtnBJPb6i1m/projectcss
import sty from "./PlasmicSurpriseMeButton.module.css"; // plasmic-import: cuLrZTUy4Zrk/css

createPlasmicElementProxy;

export type PlasmicSurpriseMeButton__VariantMembers = {};
export type PlasmicSurpriseMeButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicSurpriseMeButton__VariantsArgs;
export const PlasmicSurpriseMeButton__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSurpriseMeButton__ArgsType = {
  onClick?: (event: any) => void;
};
type ArgPropType = keyof PlasmicSurpriseMeButton__ArgsType;
export const PlasmicSurpriseMeButton__ArgProps = new Array<ArgPropType>(
  "onClick"
);

export type PlasmicSurpriseMeButton__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultSurpriseMeButtonProps {
  onClick?: (event: any) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSurpriseMeButton__RenderFunc(props: {
  variants: PlasmicSurpriseMeButton__VariantsArgs;
  args: PlasmicSurpriseMeButton__ArgsType;
  overrides: PlasmicSurpriseMeButton__OverridesType;
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

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_6Hzia3M7Np4Ulu()
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
        sty.root
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={
          hasVariant(globalVariants, "screen", "mobileOnly") ? "150px" : "200px"
        }
        loading={"lazy"}
        onClick={args.onClick}
        src={{
          src: "/plasmic/jbs_storefront/images/asset81Png.png",
          fullWidth: 686,
          fullHeight: 543,
          aspectRatio: undefined
        }}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSurpriseMeButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSurpriseMeButton__VariantsArgs;
    args?: PlasmicSurpriseMeButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSurpriseMeButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSurpriseMeButton__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSurpriseMeButton__ArgProps,
          internalVariantPropNames: PlasmicSurpriseMeButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSurpriseMeButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSurpriseMeButton";
  } else {
    func.displayName = `PlasmicSurpriseMeButton.${nodeName}`;
  }
  return func;
}

export const PlasmicSurpriseMeButton = Object.assign(
  // Top-level PlasmicSurpriseMeButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicSurpriseMeButton
    internalVariantProps: PlasmicSurpriseMeButton__VariantProps,
    internalArgProps: PlasmicSurpriseMeButton__ArgProps
  }
);

export default PlasmicSurpriseMeButton;
/* prettier-ignore-end */
