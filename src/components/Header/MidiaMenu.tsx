import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';
import { LinkMidiaMenu } from './LinkMidiaMenu';
import { ReactNode } from 'react';
import { SocialValuesProps } from '../../../public/SocialValues';

interface MidiaMenuProps {
   toggle: boolean;
   SocialValues: SocialValuesProps[];
}

export function MidiaMenu({ toggle, SocialValues = [] }: MidiaMenuProps) {
   const SocialValuesLength =
      SocialValues.length >= 0 ? SocialValues.length : 0;

   return (
      <div
         className={`w-full transition-all duration-300 bg-white/[35%] overflow-hidden `}
         style={{
            height: `${toggle ? SocialValuesLength * 2.25 + 'rem' : '0rem'}`,
         }}
      >
         <ul
            className={` ${toggle ? '' : 'hidden'}
                 w-full flex flex-col justify-center `}
         >
            {SocialValues?.map(
               ({ icon = '', name = '', href }: SocialValuesProps, index) => (
                  <LinkMidiaMenu href={href} key={index}>
                     <span className="text-xl">{icon}</span>
                     {name}
                  </LinkMidiaMenu>
               ),
            )}
         </ul>
      </div>
   );
}

{
   /* <div
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
</div>; */
}
