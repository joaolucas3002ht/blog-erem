'use client';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { useCallback, useContext } from 'react';

interface ArroyPuthProps {
   pagesLength: number;
   currentPage: number;
}

export function ArroyPuth({
   currentPage = 1,
   pagesLength = 1,
}: ArroyPuthProps) {
   const router = useRouter();
   const pathname = usePathname();

   const searchParams = useSearchParams();

   const createQueryString = useCallback(
      (name: string, value: string) => {
         const params = new URLSearchParams(searchParams!);
         params.set(name, value);

         return params.toString();
      },
      [searchParams],
   );

}
