import "../styles/Svg-tree.css";
import "../styles/Drawer.css";
import "../styles/LoginModal.css";
import "../styles/Auth.css";
import "../styles/globals.css";
import "../styles/Dashboard.css";

import type { AppProps } from "next/app";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
