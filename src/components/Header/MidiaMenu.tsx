import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import {
   IoLogoFacebook,
   IoLogoInstagram,
} from 'react-icons/io5';

interface MidiaMenuProps {
   toggle: boolean;
}

export function MidiaMenu({ toggle }: MidiaMenuProps) {
   return (
      <div
         className={` ${
            toggle ? 'h-[144px]' : 'h-0'
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

<div
   id="accordion-flush"
   data-accordion="collapse"
   data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
   data-inactive-classes="text-gray-500 dark:text-gray-400"
>
   <h2 id="accordion-flush-heading-1">
      <button
         type="button"
         className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
         data-accordion-target="#accordion-flush-body-1"
         aria-expanded="true"
         aria-controls="accordion-flush-body-1"
      >
         <span>What is Flowbite?</span>
         <BiChevronDown size={20} />
      </button>
   </h2>
   <div
      id="accordion-flush-body-1"
      className="hidden"
      aria-labelledby="accordion-flush-heading-1"
   >
      <p></p>
   </div>
   <h2 id="accordion-flush-heading-2">
      <button
         type="button"
         className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
         data-accordion-target="#accordion-flush-body-2"
         aria-expanded="false"
         aria-controls="accordion-flush-body-2"
      >
         <span>Is there a Figma file available?</span>
         <BiChevronDown size={20} />
      </button>
   </h2>
   <div
      id="accordion-flush-body-2"
      className="hidden"
      aria-labelledby="accordion-flush-heading-2"
   >
      <p></p>
   </div>
   <h2 id="accordion-flush-heading-3">
      <button
         type="button"
         className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
         data-accordion-target="#accordion-flush-body-3"
         aria-expanded="false"
         aria-controls="accordion-flush-body-3"
      >
         <span>What are the differences between Flowbite and Tailwind UI?</span>
         <BiChevronDown size={20} />
      </button>
   </h2>
   <div
      id="accordion-flush-body-3"
      className="hidden"
      aria-labelledby="accordion-flush-heading-3"
   >
      <p></p>
   </div>
</div>;
