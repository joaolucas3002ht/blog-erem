// import Link from 'next/link';
// // import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
"use client"

import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

// import { HiArrowUturnLeft } from 'react-icons/hi2';

// export function NavBar(props: any) {
//    return (
//       <div>
//          <div className="flex items-center justify-center px-2 w-full text-xl ">
//             <Link href="/" className="flex items-center gap-1 text-orange-500">
//                <HiArrowUturnLeft />
//                Go to Website
//             </Link>
//          </div>
//       </div>
//    );
// }

export function Test() {
   console.log(NextPage());

   function NextPage() {
      // const router = useRouter();
      const searchParams = useSearchParams()!;

      console.log(searchParams);

      const createQueryString = useCallback(
         (name: string, value: string) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
         },
         [searchParams],
      );
   }
}


