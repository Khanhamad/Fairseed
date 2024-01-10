import Untitled from '../assets/Logo.png'
import * as React from 'react';
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import someImage from '../constants/images'; 
import { OutlineIconName } from '@heroicons/react/outline';
import images from '../constants/images';

  
  
  
  
  const  Navbar = ({headerBackgroundImage})=> {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
//  console.log(classes);

// const Navbar = ({ headerBackgroundImage }) => {
  const navbarStyle = {
    backdropFilter: 'blur(10px)', 
  };



 
  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent z-10 " style={{ backgroundColor: '#8EC5FC',
    }}>
      <nav className=" navbar mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8 " aria-label="Global" style={navbarStyle}>
        <div className="flex lg:flex ">
          <a href="#" >
            <span className="sr-only">FairSeed </span>
            <img className="h-20% w-20% py-0.1em px-0.1em" src={Untitled} alt="FairSeed" title="FairSeed" />
          </a>
          </div>
        
       
        
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end " > */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button style={{fontFamily:'Satoshi Variable'}} className="flex py-3 items-center gap-x-1 text-sm font-semibold !font-['Satoshi Variable'] leading-6 text-gray-900">
              Get Involved
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M16.6927 8.44219L10.4427 14.6922C10.3846 14.7503 10.3157 14.7964 10.2398 14.8279C10.164 14.8593 10.0826 14.8755 10.0005 14.8755C9.91836 14.8755 9.83703 14.8593 9.76115 14.8279C9.68528 14.7964 9.61635 14.7503 9.5583 14.6922L3.3083 8.44219C3.2208 8.35478 3.16119 8.24337 3.13704 8.12207C3.11288 8.00076 3.12526 7.87502 3.1726 7.76076C3.21995 7.64649 3.30013 7.54884 3.403 7.48017C3.50587 7.41151 3.62681 7.3749 3.75049 7.375H16.2505C16.3742 7.3749 16.4951 7.41151 16.598 7.48017C16.7009 7.54884 16.781 7.64649 16.8284 7.76076C16.8757 7.87502 16.8881 8.00076 16.8639 8.12207C16.8398 8.24337 16.7802 8.35478 16.6927 8.44219Z" fill="url(#paint0_linear_126_1927)"/>
  <defs>
    <linearGradient id="paint0_linear_126_1927" x1="3.125" y1="14.8755" x2="11.5086" y2="9.72552" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF9F0A"/>
      <stop offset="1" stop-color="#FF375F"/>
    </linearGradient>
  </defs>
</svg>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {/*  second button */}

          <Popover className="relative">
            <Popover.Button style={{fontFamily:'Satoshi Variable'}} className="flex py-3 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Our impact
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M16.6927 8.44219L10.4427 14.6922C10.3846 14.7503 10.3157 14.7964 10.2398 14.8279C10.164 14.8593 10.0826 14.8755 10.0005 14.8755C9.91836 14.8755 9.83703 14.8593 9.76115 14.8279C9.68528 14.7964 9.61635 14.7503 9.5583 14.6922L3.3083 8.44219C3.2208 8.35478 3.16119 8.24337 3.13704 8.12207C3.11288 8.00076 3.12526 7.87502 3.1726 7.76076C3.21995 7.64649 3.30013 7.54884 3.403 7.48017C3.50587 7.41151 3.62681 7.3749 3.75049 7.375H16.2505C16.3742 7.3749 16.4951 7.41151 16.598 7.48017C16.7009 7.54884 16.781 7.64649 16.8284 7.76076C16.8757 7.87502 16.8881 8.00076 16.8639 8.12207C16.8398 8.24337 16.7802 8.35478 16.6927 8.44219Z" fill="url(#paint0_linear_126_1927)"/>
  <defs>
    <linearGradient id="paint0_linear_126_1927" x1="3.125" y1="14.8755" x2="11.5086" y2="9.72552" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF9F0A"/>
      <stop offset="1" stop-color="#FF375F"/>
    </linearGradient>
  </defs>
</svg>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>


          {/* third button */}
          <Popover className="relative">
            <Popover.Button style={{fontFamily:'Satoshi Variable'}} className="flex py-3 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 ">
              About us
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M16.6927 8.44219L10.4427 14.6922C10.3846 14.7503 10.3157 14.7964 10.2398 14.8279C10.164 14.8593 10.0826 14.8755 10.0005 14.8755C9.91836 14.8755 9.83703 14.8593 9.76115 14.8279C9.68528 14.7964 9.61635 14.7503 9.5583 14.6922L3.3083 8.44219C3.2208 8.35478 3.16119 8.24337 3.13704 8.12207C3.11288 8.00076 3.12526 7.87502 3.1726 7.76076C3.21995 7.64649 3.30013 7.54884 3.403 7.48017C3.50587 7.41151 3.62681 7.3749 3.75049 7.375H16.2505C16.3742 7.3749 16.4951 7.41151 16.598 7.48017C16.7009 7.54884 16.781 7.64649 16.8284 7.76076C16.8757 7.87502 16.8881 8.00076 16.8639 8.12207C16.8398 8.24337 16.7802 8.35478 16.6927 8.44219Z" fill="url(#paint0_linear_126_1927)"/>
  <defs>
    <linearGradient id="paint0_linear_126_1927" x1="3.125" y1="14.8755" x2="11.5086" y2="9.72552" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF9F0A"/>
      <stop offset="1" stop-color="#FF375F"/>
    </linearGradient>
  </defs>
</svg>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* Fourth button */}
          <button>
          <div style={{background: 'linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)', borderRadius: 6,padding: 6, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
            <div style={{color: 'white', fontSize: 18, fontFamily: 'Satoshi Variable', fontWeight: '700', wordWrap: 'break-word'}}>Start a Campaign</div>
        </div>
          </button>
          

          
            <div className="flex space-x-5">
              
                <button className="px-4 text-black bg-transparent rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
                <Box sx={{ display: 'flex', gap: 2,paddingTop: 1.4}}>
                <Avatar alt="Remy Sharp" src={images.Avatar}/>
                </Box>
            </div>
          </Popover.Group>


        {/* </div> */}

        
        
     
                      {/* open={mobileMenuOpen} onClose={setMobileMenuOpen max-w-[1365px] */}
      <Dialog as="div" className="lg:hidden max-w-[1365px]" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-20% w-auto py-0.1em px-0.1em" src={Untitled} alt="FairSeed" title="FairSeed" />
            </a>

            

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 font-['Satoshi Variable']">
                        Get Involved
                        <ChevronDownIcon
                          className={(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 font-['Satoshi Variable']"
                >
                  Our Impact
                </a>
                
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 font-['Satoshi Variable']"
                >
                  About us
                </a>
              {/* </div> */}
              {/* <div className="py-2" style={{ backgroundColor: '#FBAB7E', backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 50%)', height: '100px', width: '50px' }}> */}
                <a
                  href="#"
                  className="-mx-3 w-full block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 font-['Satoshi Variable']"
                  style={{ backgroundColor: '#FBAB7E', backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 50%)', height: '100px', width: '50px' }}
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        
        </Dialog.Panel>
      </Dialog>
      </nav>  
    </header>
    
    
  )
}


  


export default Navbar;