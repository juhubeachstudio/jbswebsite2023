/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: heL2P6rJiLNgtnBJPb6i1m
// Component: J2WSooeINI37

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
import DocumentPage from "../../DocumentPage"; // plasmic-import: gApc9GaJbE-W/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_jbs_storefront.module.css"; // plasmic-import: heL2P6rJiLNgtnBJPb6i1m/projectcss
import sty from "./PlasmicCancellationAndRefundPolicy.module.css"; // plasmic-import: J2WSooeINI37/css

createPlasmicElementProxy;

export type PlasmicCancellationAndRefundPolicy__VariantMembers = {};
export type PlasmicCancellationAndRefundPolicy__VariantsArgs = {};
type VariantPropType = keyof PlasmicCancellationAndRefundPolicy__VariantsArgs;
export const PlasmicCancellationAndRefundPolicy__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCancellationAndRefundPolicy__ArgsType = {};
type ArgPropType = keyof PlasmicCancellationAndRefundPolicy__ArgsType;
export const PlasmicCancellationAndRefundPolicy__ArgProps =
  new Array<ArgPropType>();

export type PlasmicCancellationAndRefundPolicy__OverridesType = {
  root?: Flex__<"div">;
  fullPage?: Flex__<typeof FullPage>;
  documentPage?: Flex__<typeof DocumentPage>;
  freeBox?: Flex__<"div">;
  ul?: Flex__<"ul">;
};

export interface DefaultCancellationAndRefundPolicyProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCancellationAndRefundPolicy__RenderFunc(props: {
  variants: PlasmicCancellationAndRefundPolicy__VariantsArgs;
  args: PlasmicCancellationAndRefundPolicy__ArgsType;
  overrides: PlasmicCancellationAndRefundPolicy__OverridesType;
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
            <DocumentPage
              data-plasmic-name={"documentPage"}
              data-plasmic-override={overrides.documentPage}
              className={classNames("__wab_instance", sty.documentPage)}
              slot={
                <Stack__
                  as={"div"}
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__iga0T
                    )}
                  >
                    {"We do not allow the cancelling of orders."}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qsrxd
                    )}
                  >
                    {"We also do not offer refunds or returns, only exchanges."}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xrn1
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>
                        {
                          "In the event of you placing an incorrect order or filling the wrong address\n"
                        }
                      </React.Fragment>
                      {
                        <ul
                          data-plasmic-name={"ul"}
                          data-plasmic-override={overrides.ul}
                          className={classNames(
                            projectcss.all,
                            projectcss.ul,
                            sty.ul
                          )}
                        >
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li___33U7M
                            )}
                          >
                            {"If you\u2019ve ordered the wrong size, \n"}
                          </li>
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li__ea7Ol
                            )}
                          >
                            {
                              "If we\u2019ve accidentally sent you the wrong size"
                            }
                          </li>
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li___1DpWn
                            )}
                          >
                            {
                              "If the product you\u2019ve received is damaged in any way "
                            }
                          </li>
                        </ul>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mX4Dd
                    )}
                  >
                    {
                      "please let us know via email you may reach out to us by email with \u201cTHERE\u2019S A MISTAKE IN MY ORDER\u201d in the subject line and we will reach out to you and sort it out."
                    }
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___9Rxl2
                    )}
                  >
                    {
                      "If you would like to edit a customisation that you\u2019ve provided or if you\u2019d like to give a slightly more detailed description of a customisation,"
                    }
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___32Tih
                    )}
                  >
                    {
                      "please notify us via email, please let us know via email with \u201cMY CUSTOMISED ORDER\u201d in the subject line and we will reach out to you and sort it out"
                    }
                  </div>
                </Stack__>
              }
            />
          </FullPage>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "fullPage", "documentPage", "freeBox", "ul"],
  fullPage: ["fullPage", "documentPage", "freeBox", "ul"],
  documentPage: ["documentPage", "freeBox", "ul"],
  freeBox: ["freeBox", "ul"],
  ul: ["ul"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  fullPage: typeof FullPage;
  documentPage: typeof DocumentPage;
  freeBox: "div";
  ul: "ul";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCancellationAndRefundPolicy__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCancellationAndRefundPolicy__VariantsArgs;
    args?: PlasmicCancellationAndRefundPolicy__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicCancellationAndRefundPolicy__VariantsArgs,
    ReservedPropsType
  > &
    // Specify args directly as props
    Omit<PlasmicCancellationAndRefundPolicy__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicCancellationAndRefundPolicy__ArgProps,
          internalVariantPropNames:
            PlasmicCancellationAndRefundPolicy__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCancellationAndRefundPolicy__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCancellationAndRefundPolicy";
  } else {
    func.displayName = `PlasmicCancellationAndRefundPolicy.${nodeName}`;
  }
  return func;
}

export const PlasmicCancellationAndRefundPolicy = Object.assign(
  // Top-level PlasmicCancellationAndRefundPolicy renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    fullPage: makeNodeComponent("fullPage"),
    documentPage: makeNodeComponent("documentPage"),
    freeBox: makeNodeComponent("freeBox"),
    ul: makeNodeComponent("ul"),

    // Metadata about props expected for PlasmicCancellationAndRefundPolicy
    internalVariantProps: PlasmicCancellationAndRefundPolicy__VariantProps,
    internalArgProps: PlasmicCancellationAndRefundPolicy__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCancellationAndRefundPolicy;
/* prettier-ignore-end */
