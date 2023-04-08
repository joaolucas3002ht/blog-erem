"use client"

import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';

export function ButtonBack() {
   const router = useRouter();

   return (
      <button
         onClick={() => {
            router.back();
         }}
         className="ml-1 rounded-md text-lg flex gap-2 items-center w-min hover:text-[#005aae] "
      >
         <BiArrowBack /> Voltar
      </button>
   );
}
