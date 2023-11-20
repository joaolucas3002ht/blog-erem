'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
   BiChevronDown,
   BiChevronUp,
   BiHomeAlt2,
   BiMenu,
   BiMenuAltRight,
   BiNews,
} from 'react-icons/bi';
import { LuFolderPlus, LuHome } from 'react-icons/lu';
import { SocialValues } from '../../../../public/SocialValues';
import { MidiaMenu } from './MidiaMenu';

export function NavMenu() {
   const [Toggle, setToggle] = useState<boolean>(false);
   const [ElementULToggle, setElementULToggle] = useState<boolean>(false);

   return (
      <>
         <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className=" hover:bg-white hover:bg-opacity-20 dark:hover:bg-black dark:hover:bg-opacity-25 text-slate-50  text-3xl font-medium rounded-lg p-[4px] text-center focus:outline-none focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-600"
            onClick={() => {
               setToggle((e) => !e);
               setElementULToggle(false);
            }}
            aria-label="botão para abrir e fechar o menu"
            aria-expanded={Toggle}
            aria-hidden={Toggle}
         >
            {Toggle ? <BiMenuAltRight /> : <BiMenu />}
         </button>
         {Toggle && (
            <div
               id="dropdown"
               className="z-10 rounded-lg w-56 absolute right-2 top-[105%] bg-black/30 shadow-md backdrop-blur-[2px]"
            >
               <ul
                  className="py-2 flex flex-col text-sm text-white dark:text-white z-10"
                  aria-labelledby="dropdownDefaultButton"
               >
                  <li>
                     <Link
                        href="/"
                        onClick={() => setToggle((e) => !e)}
                        className="transition-colors flex items-center gap-2 px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                     >
                        <LuHome size={18} /> Home
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/post"
                        onClick={() => setToggle((e) => !e)}
                        className="transition-colors flex items-center gap-2 px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                     >
                        <BiNews size={18} /> Posts
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
                     <MidiaMenu
                        toggle={ElementULToggle}
                        SocialValues={SocialValues}
                     />
                  </li>
                  <li>
                     <a
                        href="/studio/"
                        target="_blank"
                        onClick={() => setToggle((e) => !e)}
                        className="transition-colors flex items-center gap-2 px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                     >
                        <LuFolderPlus size={18} /> Studio
                     </a>
                  </li>
               </ul>
            </div>
         )}
      </>
   );
}
