import { ReactNode } from 'react';
import { HiPhone } from 'react-icons/hi2';
import { IoLogoFacebook, IoLogoInstagram, IoMail } from 'react-icons/io5';

export interface SocialValuesProps {
   icon: ReactNode;
   name: string;
   href: string;
}

export const SocialValues: SocialValuesProps[] = [
   {
      name: 'Facebook',
      icon: <IoLogoFacebook  />,
      href: 'https://www.facebook.com/antonio.inacio.52012548',
   },
   {
      name: 'Instagram',
      icon: <IoLogoInstagram  />,
      href: 'https://www.instagram.com/eremantonioinacio/',
   },
   {
      name: 'Email',
      icon: <IoMail  />,
      href: 'mailto:valec.antonioinacio@gmail.com',
   },
   {
      name: 'Telefone',
      icon: <HiPhone  />,
      href: 'tel:+558136452908',
   },
];
