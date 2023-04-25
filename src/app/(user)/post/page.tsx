import { RenderClient } from '@/components/Post/RenderClient';

/* @ ts-expect-error */

export default function Home() {
   return (
      <>
         <main className=" w-full py-12">
            <RenderClient />
         </main>
      </>
   );
}
