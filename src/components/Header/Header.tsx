'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NavMenu } from './Menu/NavMenu';
import { SearchHeader } from './SearchHeader';

export function Header() {
   return (
      <>
         <section className="h-[clamp(3.5rem_,_10vw_,_4.5rem)] w-full relative">
            <div className="absolute grid grid-rows-1 grid-cols-[_auto_,_12%_,_12%_,_12%_] left-0 right-0 w-full h-full">
               <div className="h-full  bg-blue-800"></div>
               <div className="h-full  bg-green-800"></div>
               <div className="h-full  bg-red-700"></div>
               <div className="h-full  bg-yellow-500"></div>
            </div>
         </section>

         <div className="h-[clamp(3.5rem_,_10vw_,_4.5rem)] w-full bg-black/30 shadow-md backdrop-blur-[2px] fixed top-0 left-0 z-20" />

         <header className="h-[clamp(3.5rem_,_10vw_,_4.5rem)] w-full fixed top-0 left-0 z-50 flex items-center justify-center ">
            <nav className="max-w-6xl w-full h-full flex items-center justify-between px-[min(1rem_,_3%)] relative">
               <Link
                  href={'/'}
                  className="text-white w-[clamp(3rem_,_10vw_,_3.5rem)] h-[clamp(3rem_,_10vw_,_3.5rem)] relative rounded-[50%]"
               >
                  <Image
                     src={'/favicon.svg'}
                     height={80}
                     width={80}
                     alt="brasão da EREM Antonio Inacio "
                  />
               </Link>
               <SearchHeader />
               <div className='z-10'>
                  <NavMenu />
               </div>
            </nav>
         </header>
      </>
   );
}
