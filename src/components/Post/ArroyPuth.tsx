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

   return (
      <div className=" mx-auto w-min  flex justify-center items-center flex-row gap-2 text-black dark:text-white ">
         {currentPage > 1 ? (
            <button
               className="w-6"
               onClick={() => {
                  router.push(
                     `${pathname}?${createQueryString(
                        'page',
                        `${currentPage - 1}`,
                     )}`,
                  );
               }}
               aria-label='botão para retroceder página'
            >
               <BiLeftArrowAlt size={24} />
            </button>
         ) : (
            <div className="w-6"> </div>
         )}
         {pagesLength > 1 ? (
            <div className="w-4 flex justify-center text-lg">{currentPage}</div>
         ) : (
            <div className="w-6"> </div>
         )}
         {currentPage < pagesLength ? (
            <button
               className="w-6"
               onClick={() => {
                  router.push(
                     `${pathname}?${createQueryString(
                        'page',
                        `${currentPage + 1}`,
                     )}`,
                  );
               }}
               aria-label='botão para avançar página'
            >
               <BiRightArrowAlt size={24} />
            </button>
         ) : (
            <div className="w-6"> </div>
         )}
      </div>
   );
}