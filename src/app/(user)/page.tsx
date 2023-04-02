import { PostsList } from '@/components/PostsList';
import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import { client } from '../../../lib/sanity.client';
import PreviewSuspense from '../../components/sanity/PreviewSuspense';

export default async function Home() {
   const query = groq`
   *[_type=="post"]{
      mainImage,
      slug,
      publishedAt,
      title
   } | order(publishedAt desc)
`;

   const thePreviewData = previewData();

   if (thePreviewData) {
      return (
         <PreviewSuspense
            fallback={
               <div>
                  <p>Loading Preview Data...</p>
               </div>
            }
            children={undefined}
         ></PreviewSuspense>
      );
   }

   const Posts = await client.fetch(query);

   console.log(Posts);



   return (
      <>
         <main className=" w-full py-12">
            <PostsList posts={Posts} />
         </main>
      </>
   );
}
