import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";
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
    <Footer />
  </>
);

export default Layout;
