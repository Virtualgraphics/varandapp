import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const navigation = [
  { name: 'HOME', href:'/', current: true },
  { name: 'GAMES', href: 'games', current: false },
  { name: 'CARTOON', href: 'cartoon', current: false },
  { name: 'WEBTOON', href: 'webtoon', current: false },
  { name: 'NFTs', href: 'nftmint', current: false },
  { name: 'TOKENS', href: 'token', current: false },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-lime-900 fixed top-0 z-30 w-full border-b-2 border-b-lime-200/30">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="z-30 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <Image
              className=" h-7 w-auto lg:h20 sm:w-auto justfy-left"
              src="/assets/varan_logoTYPE.svg"
              alt="Sky Godz Logo"
              width={1260}
              height={750}
            />
                  
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-green-500/30 text-white' : 'text-gray-300 hover:bg-green-500/30 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                  <div>
                  
                  <WalletMultiButton />

                  </div>
                  
                
              </div>
            </div>
          </div>

          
        </>
      )}
    </Disclosure>
  )
}