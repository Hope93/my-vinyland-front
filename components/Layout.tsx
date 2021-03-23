import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  headerTitle: string
  children: JSX.Element[]
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
