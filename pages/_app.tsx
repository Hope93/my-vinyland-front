import { AppProps } from "next/app";
import { AppWrapper } from "../context/app-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default MyApp;
