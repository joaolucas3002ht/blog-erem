import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

interface MidiaMenuProps {
   toggle: boolean;
}

export function MidiaMenu({ toggle }: MidiaMenuProps) {
   return (
      <div
         className={` ${
            toggle ? 'h-[72px]' : 'h-0'
         }  w-full transition-all duration-300 bg-white/[35%] overflow-hidden`}
      >
         <ul
            className={` ${toggle ? '' : 'hidden'}
                 w-full flex flex-col justify-center `}
         >
            <li>
               <a
                  className=" flex items-center gap-2 px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-500 dark:hover:text-white"
                  target={'_blank'}
                  href={'https://www.instagram.com/eremantonioinacio/'}
               >
                  <IoLogoInstagram size={20} /> Instagram
               </a>
            </li>
            <li>
               <a
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-500 dark:hover:text-white"
                  target={'_blank'}
                  href={'https://www.facebook.com/antonio.inacio.52012548'}
               >
                  <IoLogoFacebook size={20} /> Facebook
               </a>
            </li>
         </ul>
      </div>
   );
}


