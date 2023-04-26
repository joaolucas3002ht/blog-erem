import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';
import { LinkMidiaMenu } from './LinkMidiaMenu';
import { ReactNode } from 'react';
import { SocialValuesProps } from '../../../../public/SocialValues';

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
