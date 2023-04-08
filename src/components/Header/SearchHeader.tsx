import {
   usePathname,
   useRouter,
   useSearchParams,
   redirect,
} from 'next/navigation';
import React, { FormEvent, useCallback, useState } from 'react';

export function SearchHeader() {
   const [search, setSearch] = useState<string>('');

   const router = useRouter();
   const searchParams = useSearchParams()!;

   const createQueryString = useCallback(
      (name: string, value: string) => {
         const params = new URLSearchParams(searchParams);
         params.set(name, value);
         params.set("page","1")

         return params.toString();
      },
      [searchParams],
   );

   async function SubmitSearch(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const editeSearch = search.trim();

      const Query = editeSearch
         ? `news/?${createQueryString('search', editeSearch)}`
         : '';

      router.push(Query);
   }

   return (
      <form action="" name="formSearch" onSubmit={(e) => SubmitSearch(e)}>
         <input
            type="search"
            name="search"
            id="search"
            results={5}
            className="w-[min(600px,50vw)] h-9 px-2 bg-gray-100 dark:bg-[#23272F]  rounded-full dark:text-white cancel-button"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
         />
      </form>
   );
}
