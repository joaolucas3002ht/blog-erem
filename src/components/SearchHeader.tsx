'use client';

import React, { FormEvent } from 'react';

export function SearchHeader() {
   async function SubmitSearch(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      console.log('oi');
   }

   return (
      <form action="" name="formSearch" onSubmit={(e) => SubmitSearch(e)}>
         <input
            type="search"
            name="search"
            id="search"
            results={5}
            className="w-[min(600px,50vw)] h-9 px-2 bg-gray-100 dark:bg-[#23272F]  rounded-full dark:text-white cancel-button"
         />
      </form>
   );
}
