import { PostsList } from '@/components/Post/PostsList';
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
