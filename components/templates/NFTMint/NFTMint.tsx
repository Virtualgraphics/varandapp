
import {useState } from 'react'
import type { NextPage } from "next";
import { FC, useEffect } from 'react';
import Image from 'next/image'
import React from 'react';






const NFTMint = () => {
 
  
      return (


        <div className="justify-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          
  
            <div className="m-auto py-2">
            <Image
            className="m-auto w-144 py-2"
            src="/assets/varan_logoTYPE.svg"
            alt="Varan Logo"
            width={1260}
            height={750}
          />
            </div>

          
            <hr className="w-full  border-yellow-200" />
            <p className="text-base font-bold text-yellow-200 lg:text-2xl  md:text-lg sm:px-4 py-8 font-Josefin">
           Claim your SAVAGE VARAN SOCIETY NFTs below and play the Savage Varan Games. 
            </p>

<div className="m-auto w-full h-144">

<div className="bg-indigo-900/20 rounded-3xl max-w-sm  m-auto" >

<Image
              className="rounded-3xl pb-5 "
              src="/assets/varan_collection.jpg"
              alt="nft"
              width={1260}
              height={750}
            />



      )
     
    <div className='py-7'>
     <button className="bg-blue-500 hover:bg-blue-700 text-white w-40 h-10 font-bold  px-4 rounded-xl mt-1"
        > Mint NFT </button>
      </div>
         </div>



              </div>
</div>

<div className=" pt-20 w-4/5 justify-center mx-auto">
        <h1 className=" text-green-800 font-bold text-2xl">
              Get started with your tokens and use them for all activities across the island:
            </h1></div>

<div className="py-2  justify-items-center">
      <div className="w-4/5 m-auto grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 mt-10 sm:grid-cols-2">
        <div className="duration-300 transform bg-lime-200 border-l-4 border-white hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">The doctor said</h6>
            <p className="text-sm text-green-900">
              Sportacus andrew weatherall goose Refined gentlemen super mario
              des lynam alpha trion zap rowsdower.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-lime-200 border-l-4 border-white hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Skate ipsum dolor</h6>
            <p className="text-sm text-green-900">
              Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-lime-200 border-l-4 border-white hover:-translate-y-2 rounded-2xl">
          <div className="h-full p-5  rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Baseball ipsum dolor
            </h6>
            <p className="text-sm text-geen-900">
              Bro ipsum dolor sit amet gaper backside single track, manny Bike
              epic clipless. Schraeder drop gondy.
            </p>
          </div>
        </div>
        </div>
        <div className=" pt-14 w-4/5 justify-center m-auto">
        <h1 className=" text-green-800 font-semibold text-lg">
              For support or technical problems, please contact us on our Discord or send an email to info(at)savagevaransociety.com
            </h1></div>
      </div>
 </div>
 

      );
    };

 
  export default NFTMint;