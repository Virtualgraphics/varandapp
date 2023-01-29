
import { useState } from "react";
import { FC, useEffect } from 'react';
import Image from 'next/image'
import React from 'react';



const Token = () => {
 

  
      return (


        <div className="justify-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          
  
            <div className="m-auto w-96 py-2">
            <Image
            className="m-auto w-96 py-2"
            src="/assets/star_divider.svg"
            alt="Star Divider"
            width={1260}
            height={750}
          />
            </div>

            <h2 className="m-auto mb-4 text-3xl font-bold tracking-tight text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Cinzel py-5">
            SKY GODZ  -TOKENS
            </h2>
            <hr className="w-full  border-yellow-200" />
            <p className="text-base text-white lg:text-lg  md:text-lg sm:px-4 py-8 font-Proza">
           Claim your SKY GODZ LOTUS and STARDUST tokens below and play the Stargazer Games. 
            </p>

<div className="grid grid-cols-2 gap-20 place-content-stretch w-full h-96">

<div className="bg-indigo-900/20  rounded-2xl w-64 drop-shadow-lg " >

<Image
              className="p-10 rounded-full shadow-3xl"
              src="/assets/token_lotus750.jpg"
              alt="Lotus"
              width={1260}
              height={750}
            />

          <h1 className="text-yellow-100 font-bold text-2xl ">LOTUS Token</h1>
          <h2 className="text-white text-md py-2">Claim LOTUS Tokens</h2>

<div className="mt-5 mb-5 max-w-sm">
          <input 
    id="1"
    type="text"  
    placeholder="Enter amount to claim" 
className="flex-grow  h-10 px-2 mb-3 text-black text-base transitiom duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
            
   

    
    />
    </div>
<div className="m-5 w-32 ">
    
          </div>
              </div>


<div className="bg-indigo-900/20  rounded-2xl w-64 drop-shadow-lg">


<Image
              className="p-10 rounded-full"
              src="/assets/token_stardust750.jpg"
              alt="Stardust"
              width={1260}
              height={750}
            />

<h1 className="text-yellow-100 font-bold text-2xl">STARDUST Token</h1>
<h2 className="text-white text-md py-2">Claim STARDUST Tokens</h2>
<div className="mt-5 mb-5 max-w-sm">
          <input 
    id="1"
    type="text"  
    placeholder="Enter amount to claim" 
className="flex-grow  h-10 px-2 mb-3 text-black text-base transitiom duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
            
   
  
    
    />
    </div>
<div className="m-5 w-32">
   
          </div>
              </div>
              </div>
</div>

<div className="py-32  justify-items-center">
      <div className="w-4/5 m-auto grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 mt-10 sm:grid-cols-2">
        <div className="duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-900 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">The doctor said</h6>
            <p className="text-sm text-gray-900">
              Sportacus andrew weatherall goose Refined gentlemen super mario
              des lynam alpha trion zap rowsdower.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Skate ipsum dolor</h6>
            <p className="text-sm text-gray-900">
              Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-blue-400 border-l-4 border-deep-purple-accent-400 hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Baseball ipsum dolor
            </h6>
            <p className="text-sm text-gray-900">
              Bro ipsum dolor sit amet gaper backside single track, manny Bike
              epic clipless. Schraeder drop gondy.
            </p>
          </div>
        </div>
        </div>
        <div className=" pt-14 w-4/5 justify-center mx-auto">
        <h1 className=" text-white text-lg">
              Bro ipsum dolor sit amet gaper backside single track, manny Bike
              epic clipless. Schraeder drop gondy.
            </h1></div>
      </div>
 </div>
 

      );
    };

 
  export default Token;