'use client';

import { Card } from '../Card';
import { useEffect, useState } from 'react';

import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { ArroyPuth } from './ArroyPuth';
import { FetchPosts } from '../../../utils/FetchPosts';
import { CardLoading } from '../CardLoading';

interface CardProps {
   title: string;
   publishedAt: Date;
   slug: {
      _type: string;
      current: string;
   };
   mainImage: {
      _type: string;
      asset: {
         _ref: string;
         _type: string;
      };
      crop?: any;
      hotspot?: any;
   };
}

interface PostProps {
   query: string;
   page: string;
}

interface PostFetchProps {
   params: ReadonlyURLSearchParams;
}


export function PostsList() {
   const [Loading, setLoading] = useState<boolean>(false);
   const [post, setPost] = useState<CardProps[]>([]);
   const [pagesLength, setPagesLength] = useState<number>(1);
   const searchParams = useSearchParams();

   const search = searchParams?.get('search');

   const page = searchParams?.get('page');

   const query = search ?? '';

   const NumberPage = Number(page);

   const currentPage = NumberPage ? NumberPage : 1;

   const lengthElementPage = 12;

   useEffect(() => {
      const Fetch = async () => {
         setLoading(false);
         const res = await FetchPosts({
            query,
            page: currentPage,
            lengthElementPage,
         });

         const { post, pagesLength } = res;

         setLoading(true);
         setPost(post);
         setPagesLength(pagesLength);
      };

      Fetch();
   }, [query, page]);

   return (
      <div className="w-full flex flex-col gap-6 max-w-7xl m-auto relative h-full">
         <div className=" w-full h-full flex justify-center items-center flex-wrap gap-4">
            {Loading
               ? post?.map((e) => {
                    return (
                       <Card
                          key={e.slug.current}
                          title={e.title}
                          slug={e.slug.current}
                          publishedAt={e.publishedAt}
                          mainImage={e.mainImage}
                       />
                    );
                 })
               : Array.from({ length: lengthElementPage }, (v, i) => i).map(
                    (v, i) => <CardLoading key={i} />,
                 )}
         </div>

         <div className="relative bottom-0 ">
            <ArroyPuth pagesLength={pagesLength} currentPage={currentPage} />
         </div>
      </div>
   );
}


// interface PostProps {
//    _createdAt: string;
//    _id: string;
//    _rev: string;
//    _type: string;
//    _updatedAt: string;
//    body: {
//       _key: string;
//       _type: string;
//       children: {
//          _key: string;
//          _type: string;
//          marks: string[];
//          text: string;
//       };
//       level: number;
//       listItem: string;
//       markDefs: never[];
//       style: string;
//    }[];
//    mainImage: {
//       _type: string;
//       asset: {
//          _ref: string;
//          _type: string;
//       };
//       crop?: any;
//       hotspot?: any;
//    };
//    publishedAt: string;
//    slug: {
//       _type: string;
//       current: string;
//    };
//    title: string;
// }
// [];

