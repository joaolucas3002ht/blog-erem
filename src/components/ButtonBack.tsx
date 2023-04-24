'use client';

import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes } from 'react';
import { BiArrowBack } from 'react-icons/bi';

export function ButtonBack({
   className = '',
   ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
   const Router = useRouter();

   return (
      <button
         onClick={() => {
            Router.back();
         }}
         className={`ml-1 rounded-md text-lg flex gap-2 items-center w-min hover:text-[#005aae] ${className}`}
         {...rest}
      >
         <BiArrowBack /> Voltar
      </button>
   );
}
