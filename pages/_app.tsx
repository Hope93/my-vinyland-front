import { AppProps } from "next/app";
import { AppWrapper } from "../context/app-context";
import '../styles/tailwind.css'
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
