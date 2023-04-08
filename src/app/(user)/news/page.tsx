import { PostsList } from '@/components/News/PostsList';
import { RenderClient } from '@/components/News/RenderClient';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
{
   /* @ ts-expect-error */
}

import { Suspense, useCallback } from 'react';

export default function Home() {
   function SearchBarFallback() {
      return <>placeholder</>;
   }

   return (
      <>
         <main className=" w-full py-12">
            <Suspense fallback={<SearchBarFallback />}>
               <RenderClient />
            </Suspense>
         </main>
      </>
   );
}

// const searchParams = useSearchParams();

// const search = searchParams?.get('search');

// const page = searchParams?.get('page');

// console.log(NextPage());

// function NextPage() {
//    // const router = useRouter();
//    const searchParams = useSearchParams()!;

//    console.log(searchParams);

//    const createQueryString = useCallback(
//       (name: string, value: string) => {
//          const params = new URLSearchParams(searchParams);
//          params.set(name, value);

//          return params.toString();
//       },
//       [searchParams],
//    );
// }
