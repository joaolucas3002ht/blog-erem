'use client';
import { ImSpinner2 } from 'react-icons/im';

export default function Loading() {
   return (
      <div className="flex justify-center items-center h-full w-full">
         <ImSpinner2
            size={36}
            className="text-4xl text-black/90 dark:text-white/90 animate-spin"
         />
      </div>
   );
}
