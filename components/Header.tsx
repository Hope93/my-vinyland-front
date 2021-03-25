
import Navigation from "./Navigation";
import Cart from "./Cart";

type HeaderProps = {
  pageTitle: string;
};

const InternalTitle = ({ pageTitle }: { pageTitle: string }) => (
  <h1>{pageTitle}</h1>
);

// optional prop for search form if it's the right page
const Header = ({ pageTitle }: HeaderProps) => {
  return (
    <>
      <header>
        <Navigation />
        <Cart />
        <InternalTitle pageTitle={pageTitle} />
      </header>
    </>
  );
};

export default Header;
