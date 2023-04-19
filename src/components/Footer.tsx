import Link from 'next/link';
import { SocialValues } from '../../public/SocialValues';

export function Footer() {
   return (
      <footer className="w-full border-t-2 border-slate-500/60">
         <div className="max-w-7xl w-full h-fit py-8 px-6 text-white flex justify-around items-center flex-wrap m-auto gap-3">
            <Link href={'/'} className="w-fit">
               © 2023 EREM Antonio Inacio, Inc.
            </Link>
            <div className="flex flex-row gap-[min(5vw,1.5rem)]">
               {SocialValues.map(({ href, icon, name }, index) => (
                  <a
                     href={href}
                     aria-label={name}
                     key={index}
                     title={name}
                     className="text-[1.725rem]"
                  >
                     {icon}
                  </a>
               ))}
            </div>
         </div>
      </footer>
   );
}
