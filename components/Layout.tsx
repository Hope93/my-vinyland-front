import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: JSX.Element[]
};

const Layout = (props: LayoutProps) => (
  <>
    <SEO />
    <Header />
    {props.children}
    <Footer />
  </>
);

export default Layout;
