import Link from 'next/link'
import Image from 'next/image'



const Hero = () => {
    return (

      <>
      <div className="bg-lime-400/30 px-4 py-10 mx-auto sm:max-w-xl md:max-w-full mt-none lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 rounded-3xl mt-10" >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">

          <h5 className="mb-4 text-2xl font-extrabold leading-none text-blue-800 font-Bowlby" >
          Chill and Earn with the Savage Varans
              
            </h5>
            
            <h1 className="mb-4 text-4xl font-extrabold leading-none text-yellow-300 font-Bowlby" >
            Treasure Hunt on Komodo Island
              <br className="hidden md:block" /> </h1>

              
            <p className="mb-6 font-bold text-green-900 text-2xl">
            Chill and Earn and hang with the Savage Varans on their tropical island.  
            Play games, watch cartoons and read comics to get clues to find the hidden 
            treasure of the Calypso.
            </p>
            <hr className="mb-5 border-yellow-300" />
          
<div className='grid gap-0 grid-cols-2 align-middle self-auto mt-10'>
         
<div className='w-40 '>
<Link href="/nftmint">
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Get started</button>
            </Link>
     
</div>

<Link href="/nftmint">
<button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Mint NFT</button>
            </Link>


           </div>

           </div>


          <div className='shadow-2xl' >
            <Image
              className="object-cover w-full h-56 rounded-3xl shadow-3xl sm:h-96 shadow-lg"
              src="/assets/treasure_frontIMAGE.jpg"
              alt="Main Image"
              width={1260}
              height={750}
            />


          </div>
        </div>
      </div>

      </>
    );
  };

  export default Hero;