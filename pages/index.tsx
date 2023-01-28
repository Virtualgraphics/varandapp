import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
import { Network } from "@thirdweb-dev/sdk/solana";
import { Default } from '../components/layouts/Default';
import { Home } from '../components/templates/home';



const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const HomePage: NextPage = () => {
  return (
  
    
    <Default pageName="SAVAGE VARAN SOCIETY">

    <Home />
  

    </Default>
  



  );
};


export default HomePage;
