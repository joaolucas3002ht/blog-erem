'use client';

import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';

export function ButtonBack() {
   const Router = useRouter();

   return (
      <button
         onClick={() => {
            Router.back();
         }}
         className="ml-1 rounded-md text-lg flex gap-2 items-center w-min hover:text-[#005aae] "
      >
         <BiArrowBack /> Voltar
      </button>
   );
}
