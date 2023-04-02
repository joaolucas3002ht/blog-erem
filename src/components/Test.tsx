import Link from 'next/link';
// import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

import { HiArrowUturnLeft } from 'react-icons/hi2';

export function NavBar(props: any) {
   return (
      <div>
         <div className="flex items-center justify-center px-2 w-full text-xl ">
            <Link href="/" className="flex items-center gap-1 text-orange-500">
               <HiArrowUturnLeft />
               Go to Website
            </Link>
         </div>
      </div>
   );
}
