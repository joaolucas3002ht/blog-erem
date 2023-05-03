import { Card } from '@/components/Card/Card';
import { FetchPosts } from '../../../../../utils/FetchPosts';
import Link from 'next/link';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

export const dynamic = 'force-dynamic';

export default async function Home({
   searchParams,
}: {
   params: { [key: string]: string };
   searchParams?: { [key: string]: string | string[] | undefined };
}) {
   const getSearch = searchParams?.['search'];

   const page = searchParams?.['page'];

   const search = typeof getSearch !== 'string' ? getSearch?.[0] : getSearch;

   const query = search ?? '';

   const NumberPage = Number(page);

   const currentPage = NumberPage ? NumberPage : 1;

   const lengthElementPage = 12;

   const res = await FetchPosts({
      query,
      page: currentPage,
      lengthElementPage,
   });

   const { post, pagesLength } = res;

   const searchParam = search ? `search=${search}` : ``;
   const pageParam = currentPage > 1 ? `page=${currentPage - 1}` : ``;
   const pageNextParam =
      currentPage < pagesLength ? `page=${currentPage + 1}` : ``;

   return (
      <div className="w-full py-12 flex flex-col gap-6 max-w-7xl m-auto relative h-full">
         <div className=" w-full h-full flex justify-center items-center flex-wrap gap-4">
            {post?.map((e) => {
               return (
                  <Card
                     key={e?.slug.current}
                     title={e?.title}
                     slug={e?.slug.current}
                     publishedAt={e?.publishedAt}
                     mainImage={e?.mainImage}
                  />
               );
            })}
         </div>

         <div className="relative bottom-0 ">
            <div className=" mx-auto w-min  flex justify-center items-center flex-row gap-2 text-black dark:text-white ">
               {currentPage > 1 ? (
                  <Link
                     className="w-6"
                     href={`/post?${searchParam}${
                        searchParam && pageParam ? '&' : ''
                     }${pageParam}`}
                     aria-label="botão para retroceder página"
                  >
                     <BiLeftArrowAlt size={24} />
                  </Link>
               ) : (
                  <div className="w-6"> </div>
               )}
               {pagesLength > 1 ? (
                  <div className="w-4 flex justify-center text-lg">
                     {currentPage}
                  </div>
               ) : (
                  <div className="w-6"> </div>
               )}
               {currentPage < pagesLength ? (
                  <Link
                     href={`/post?${searchParam}${
                        searchParam && pageNextParam ? '&' : ''
                     }${pageNextParam}`}
                     className="w-6"
                     aria-label="botão para avançar página"
                  >
                     <BiRightArrowAlt size={24} />
                  </Link>
               ) : (
                  <div className="w-6"> </div>
               )}
            </div>
         </div>
      </div>
   );
}
