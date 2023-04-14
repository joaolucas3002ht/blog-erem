'use client';

import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import {
   createContext,
   ReactNode,
   useCallback,
   useContext,
   useState,
} from 'react';

export const valueContext = createContext<{
   searchParams?: ReadonlyURLSearchParams;
   createQueryString?: (name: string, value: string) => string;
}>({});

export function SearchParamsFoncs({ children }: { children: ReactNode }) {
   const searchParams = useSearchParams();

   const searchParamsFoncs = {
      createQueryString: useCallback(
         (name: string, value: string) => {
            const params = new URLSearchParams(searchParams!);
            params.set(name, value);

            return params.toString();
         },
         [searchParams],
      ),
      searchParams: searchParams!,
   };

   const [Context, useCon] = useState(searchParamsFoncs);

   return (
      <valueContext.Provider value={Context}>
         <>{children}</>
      </valueContext.Provider>
   );
}
