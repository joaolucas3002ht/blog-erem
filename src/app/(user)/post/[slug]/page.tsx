import { ImageCover } from '@/components/ImageCover';
import dayjs from 'dayjs';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../../../lib/sanity.client';
import urlFor from '../../../../../lib/urlFor';
import { dateFormat } from '../../../../../utils/dateFormat';

// 'use client'
interface PostProps {
   params: {
      slug: string;
   };
}

interface PostProps {
   _createdAt: string;
   _id: string;
   _rev: string;
   _type: string;
   _updatedAt: string;
   body: {
      _key: string;
      _type: string;
      children: {
         _key: string;
         _type: string;
         marks: string[];
         text: string;
      };
      level: number;
      listItem: string;
      markDefs: never[];
      style: string;
   }[];
   mainImage: {
      _type: string;
      asset: {
         _ref: string;
         _type: string;
      };
      crop?: any;
      hotspot?: any;
   };
   publishedAt: Date;
   slug: {
      _type: string;
      current: string;
   };
   title: string;
}
[];

export default async function Post({ params }: PostProps) {
   console.log(params.slug);

   const query = groq`
   *[_type == "post" && slug.current == "${params.slug}"][0]{...}`;

   const value: PostProps = await client.fetch(query);

   const { publishedAt, mainImage, title, ...rest } = value;

   const date = dateFormat(publishedAt);

   const cal = (48 * 56.25) / 100;

   return (
      <main className="min-h-screen h-full  max-w-[49rem] w-full text-slate-100 m-auto flex flex-col gap-4 py-4 px-[min(3%_,_1rem)]">
         {mainImage ? (
            <div
               className={`w-[min(100vw_,_100%)] h-[min(56.25vw_,_27rem)] relative mx-auto rounded-2xl overflow-hidden`}
            >
               <Image
                  src={urlFor(mainImage).url()}
                  className="min-h-full min-w-full object-cover object-center"
                  alt={''}
                  fill
               />
            </div>
         ) : (
            <div></div>
         )}

         <section className="">
            <h1 className="text-4xl text-slate-50 capitalize">{title}</h1>
            <p>{date}</p>
         </section>
      </main>
   );
}