import Link from 'next/link'
import Image from 'next/image'

const Intro = () => {
    return (
      <div className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className=" max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-4xl">
          
          <p className="text-base font-bold text-blue-800 md:text-lg lg:text-2xl">
          The greedy banker Malcom Butch Buggeridge is planning to build a massive resort
           hotel on Komodo island and is about to evicted the Varans. 
           But there is massive treasure hidden on the island. Help the Varans to find the treasure to buy the island back.
          </p>
        </div>
        <div className="grid gap-12 row-gap-5 lg:grid-cols-3">
          <div className=''>
          <Image
              className="object-cover w-full h-56 mb-6 rounded-full shadow-3xl sm:h-96 shadow-lg"
              src="/assets/varan_intro01.jpg"
              alt="Main Image"
              width={1260}
              height={750}
            />
            <h5 className=" text-blue-800 mb-2 text-xl font-bold leading-none sm:text-2xl">
              GAMES
            </h5>
            <p className="text-green-800 font-bold">
            Play a top down online game as a Varan and search 
            the island for the treasure while fighting against 
            Butchs evil henchmen and earn tokens.
            </p>
            <Link href="/games">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
  Find out more
</button></Link>
          </div>
          <div>
          <Image
              className="object-cover w-full h-56 mb-6 rounded-full shadow-3xl sm:h-96 shadow-lg"
              src="/assets/varan_intro02.jpg"
              alt="Main Image"
              width={1260}
              height={750}
            />
            <h5 className="text-blue-800 mb-2 text-xl font-bold leading-none sm:text-2xl">
             CARTOONS
            </h5>
            <p className="text-green-800 font-bold">
            Watch the story of the Savage Varans in short cartoon episodes, 
            get clues and pledge tokens on how the story will continue.
            </p>
           
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
 Coming soon
</button>
          </div>
          <div>
          <Image
              className="object-cover w-full h-56 mb-6 rounded-full shadow-3xl sm:h-96 shadow-lg"
              src="/assets/varan_intro03.jpg"
              alt="Main Image"
              width={1260}
              height={750}
            />
            <h5 className="text-blue-800 mb-2 text-xl font-bold leading-none sm:text-2xl">
              WEBTOONS
            </h5>
            <p className="text-green-800 font-bold">
            Get entertained by short and fun comic strips of the 
            Savage Varans crazy island life and find the necessary 
            clues that will lead you to the treasure.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
  Coming soon
</button>
          </div>
        </div>
      </div>
    );
  };

  export default Intro;