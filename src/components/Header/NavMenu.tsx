'use client';
import { truncate } from 'fs';
import Link from 'next/link';
import { useState } from 'react';
import {
   BiMenuAltRight,
   BiMenu,
   BiHomeAlt2,
   BiNews,
   BiChevronDown,
   BiChevronUp,
} from 'react-icons/bi';
import { HiFolderPlus } from 'react-icons/hi2';
import { RxShare2 } from 'react-icons/rx';
import { MidiaMenu } from './MidiaMenu';

export function NavMenu() {
   const [Toggle, setToggle] = useState<boolean>(false);
   const [ElementULToggle, setElementULToggle] = useState<boolean>(false);

   return (
      <>
         <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className=" hover:bg-white hover:bg-opacity-20 dark:hover:bg-black dark:hover:bg-opacity-25 text-slate-50  text-3xl font-medium rounded-lg   p-[4px] text-center focus:outline-none focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-600"
            onClick={() => {
               setToggle(!Toggle);
               setElementULToggle(false);
            }}
            aria-expanded={Toggle}
         >
            {Toggle ? <BiMenuAltRight /> : <BiMenu />}
         </button>
         {Toggle && (
            <div
               id="dropdown"
               className="z-10  rounded-lg w-56 absolute right-2 top-[105%] bg-black bg-opacity-[30%] dark:bg-opacity-30 shadow-md backdrop-blur-[2px]"
            >
               <ul
                  className="py-2 flex flex-col text-sm text-white dark:text-white"
                  aria-labelledby="dropdownDefaultButton"
               >
                  <li>
                     <Link
                        href="/"
                        className="transition-colors flex items-center gap-2 px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                     >
                        <BiHomeAlt2 size={18} /> Home
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/news"
                        className="transition-colors flex items-center gap-2 px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                     >
                        <BiNews size={18} /> News
                     </Link>
                  </li>
                  <li>
                     <button
                        onClick={() => setElementULToggle(!ElementULToggle)}
                        className="transition-colors flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        aria-expanded={ElementULToggle}
                     >
                        {ElementULToggle ? (
                           <BiChevronDown size={20} />
                        ) : (
                           <BiChevronUp size={20} />
                        )}
                        Media
                     </button>
                     {/* <MidiaMenu toggle={ElementULToggle} /> */}
                  </li>
                  <li>
                     <a
                        href="/studio/"
                        target="_blank"
                        className="transition-colors flex items-center gap-2 px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                     >
                        <HiFolderPlus size={18} /> Studio
                     </a>
                  </li>
               </ul>
            </div>
         )}
      </>
   );
}
