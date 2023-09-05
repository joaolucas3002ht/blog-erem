import { ReactNode } from 'react';
import { BiNews } from 'react-icons/bi';
import { HiPhone } from 'react-icons/hi2';
import { IoLogoFacebook, IoLogoInstagram, IoMail } from 'react-icons/io5';
import { LuMail, LuInstagram, LuFacebook, LuPhone, LuFolderPlus, LuHome } from 'react-icons/lu';

export interface SocialValuesProps {
   icon: ReactNode;
   name: string;
   href: string;
}

export const SocialValues: SocialValuesProps[] = [
   {
      name: 'Facebook',
      icon: <LuFacebook />,
      href: 'https://www.facebook.com/antonio.inacio.52012548',
   },
   {
      name: 'Instagram',
      icon: <LuInstagram />,
      href: 'https://www.instagram.com/eremantonioinacio/',
   },
   {
      name: 'Email',
      icon: <LuMail />,
      href: 'mailto:valec.antonioinacio@gmail.com',
   },
   {
      name: 'Telefone',
      icon: <LuPhone />,
      href: 'tel:+558136452908',
   },
];

export const MenuElements = {
   Home: {
      name: 'Home',
      icon: <LuHome />,
      href: '/',
   },
   Posts: {
      name: 'Posts',
      icon: <BiNews />,
      href: '/post',
   },
   Studio: {
      name: 'Studio',
      icon: <LuFolderPlus />,
      href: '/studio',
   },
};


export const CopyrightText = {
   text: `© ${new Date().getFullYear()} EREM Antônio Inácio, Inc.`,
   href: '/',
};
