import SEO from "../seo";
import Header from "../header";
import React from "react";

type LayoutProps = {
  headerTitle: string
  children: React.ReactNode
};

const Layout = (props: LayoutProps) => (
  <>
    <SEO />
    <Header pageTitle={props.headerTitle} />
    {props.children}
  </>
);

export default Layout;
