'use client'; // Error components must be Client components

import { ButtonBack } from '@/components/ButtonBack';

export default function Error() {
   return (
      <div className="w-full h-full flex flex-col gap-5 justify-center items-center ">
         <h1 className="font-semibold text-6xl text-sky-700"> 404</h1>

         <p className="text-lg text-black dark:text-white">
            Esta página não pôde ser encontrada.
         </p>

         <ButtonBack className="dark:text-white" />
      </div>
   );
}
