'use client'; // Error components must be Client components

import { ButtonBack } from '@/components/ButtonBack';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
   error,
   reset,
}: {
   error: Error;
   reset: () => void;
}) {
   useEffect(() => {
      // Log the error to an error reporting service
      console.error(error);
   }, [error]);

   return (
      <div className="w-full h-full flex flex-col gap-5 justify-center items-center ">
         <h1 className="font-semibold text-6xl text-sky-700"> 404</h1>

         <p className="text-lg text-black dark:text-white">
            Esta página não pôde ser encontrada.
         </p>

            <ButtonBack className='dark:text-white'/>
      </div>
   );
}
