import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';
import { LinkMidiaMenu } from './LinkMidiaMenu';

interface MidiaMenuProps {
   toggle: boolean;
}

export function MidiaMenu({ toggle }: MidiaMenuProps) {
   const LinksValues = [
      {
         children: (
            <>
               <IoLogoFacebook size={20} /> Facebook
            </>
         ),
         href: 'https://www.facebook.com/antonio.inacio.52012548',
      },
      {
         children: (
            <>
               <IoLogoInstagram size={20} /> Instagram
            </>
         ),
         href: 'https://www.instagram.com/eremantonioinacio/',
      },
   ];

   return (
      <div
         className={`w-full transition-all duration-300 bg-white/[35%] overflow-hidden `}
         style={{
            height: `${toggle ? LinksValues.length * 2.25 + 'rem' : '0rem'}`,
         }}
      >
         <ul
            className={` ${toggle ? '' : 'hidden'}
                 w-full flex flex-col justify-center `}
         >
            {LinksValues?.map(({ children, href }, index) => (
               <LinkMidiaMenu href={href} children={children} />
            ))}
         </ul>
      </div>
   );
}
