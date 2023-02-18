import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import '../styles/index.css';
import styles from "../styles/Home.module.css";




// Change the network to the one you want to use: "mainnet-beta", "testnet", "devnet", "localhost" or your own RPC endpoint


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain="binance-testnet">
     
        <Component {...pageProps} />
     
    </ThirdwebProvider>
  );
}

export default MyApp;
