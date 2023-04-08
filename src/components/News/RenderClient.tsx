import { PostsList } from '@/components/News/PostsList';
import { Suspense } from 'react';

export function RenderClient() {
   return (
      <>
         <main className=" w-full h-full">
               {/* @ts -expect-error */}
               <PostsList />
         </main>
      </>
   );
}
