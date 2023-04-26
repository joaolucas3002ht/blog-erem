import { PostsList } from '@/components/Post/PostsList';

/* @ ts-expect-error */

export default function Home() {
   return (
      <>
         <main className=" w-full py-12">
            <PostsList />
         </main>
      </>
   );
}
