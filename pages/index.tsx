import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";




const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const Home: NextPage = () => {
  // Here's how to get the thirdweb SDK instance
  // const sdk = useSDK();
  // Here's how to get a nft collection
  // const { program } = useProgram(
  //   your_nft_collection_address,
  //   "nft-collection"
  // );

  return (
  
      <div>
        <div>
          <Image
            src="/thirdweb.svg"
            height={75}
            width={115}
            style={{
              objectFit: "contain",
            }}
            alt="thirdweb"
          />
          <Image
            width={75}
            height={75}
            src="/sol.png"
        
            alt="sol"
          />
        </div>
        <h1 className= "text-xl" >Solana  meet and Greet👋</h1>
        <p className= "text-xl">The quick brown fox ...</p>
          Explore what you can do with thirdweb&rsquo;s brand new{" "}
          <b>
          
          </b>
          .
       

        <WalletMultiButtonDynamic/>
      </div>
   
  );
};

export default Home;
