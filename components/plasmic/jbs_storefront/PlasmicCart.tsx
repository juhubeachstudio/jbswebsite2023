/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: heL2P6rJiLNgtnBJPb6i1m
// Component: q3NSBnBYzH

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

import FullPage from "../../FullPage"; // plasmic-import: VpRM2nIn0R/component
import Section from "../../Section"; // plasmic-import: GMAR4VOl00/component
import Cart2 from "../../Cart2"; // plasmic-import: 4iMp3co2mNSz/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_jbs_storefront.module.css"; // plasmic-import: heL2P6rJiLNgtnBJPb6i1m/projectcss
import sty from "./PlasmicCart.module.css"; // plasmic-import: q3NSBnBYzH/css

createPlasmicElementProxy;

export type PlasmicCart__VariantMembers = {};
export type PlasmicCart__VariantsArgs = {};
type VariantPropType = keyof PlasmicCart__VariantsArgs;
export const PlasmicCart__VariantProps = new Array<VariantPropType>();

export type PlasmicCart__ArgsType = {};
type ArgPropType = keyof PlasmicCart__ArgsType;
export const PlasmicCart__ArgProps = new Array<ArgPropType>();

export type PlasmicCart__OverridesType = {
  root?: Flex__<"div">;
  fullPage?: Flex__<typeof FullPage>;
  section?: Flex__<typeof Section>;
  cart2?: Flex__<typeof Cart2>;
};

export interface DefaultCartProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCart__RenderFunc(props: {
  variants: PlasmicCart__VariantsArgs;
  args: PlasmicCart__ArgsType;
  overrides: PlasmicCart__OverridesType;
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

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <FullPage
            data-plasmic-name={"fullPage"}
            data-plasmic-override={overrides.fullPage}
            className={classNames("__wab_instance", sty.fullPage)}
          >
            <Section
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              className={classNames("__wab_instance", sty.section)}
            >
              <Cart2
                data-plasmic-name={"cart2"}
                data-plasmic-override={overrides.cart2}
                className={classNames("__wab_instance", sty.cart2)}
              />
            </Section>
          </FullPage>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "fullPage", "section", "cart2"],
  fullPage: ["fullPage", "section", "cart2"],
  section: ["section", "cart2"],
  cart2: ["cart2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  fullPage: typeof FullPage;
  section: typeof Section;
  cart2: typeof Cart2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCart__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCart__VariantsArgs;
    args?: PlasmicCart__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCart__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCart__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicCart__ArgProps,
          internalVariantPropNames: PlasmicCart__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCart__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCart";
  } else {
    func.displayName = `PlasmicCart.${nodeName}`;
  }
  return func;
}

export const PlasmicCart = Object.assign(
  // Top-level PlasmicCart renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    fullPage: makeNodeComponent("fullPage"),
    section: makeNodeComponent("section"),
    cart2: makeNodeComponent("cart2"),

    // Metadata about props expected for PlasmicCart
    internalVariantProps: PlasmicCart__VariantProps,
    internalArgProps: PlasmicCart__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCart;
/* prettier-ignore-end */
