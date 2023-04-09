// import { Test } from '@/components/Test';
import PortableTextRender from '@/components/sanity/PortableTextRender';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../../../lib/sanity.client';
import urlFor from '../../../../../lib/urlFor';
import { dateFormat } from '../../../../../utils/dateFormat';
import { ButtonBack } from '@/components/ButtonBack';

interface PostProps {
   params: {
      slug: string;
   };
}

interface PostFetchProps {
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
   const query = groq`
   *[_type == "post" && slug.current == "${params.slug}"][0]{...}`;

   const value: PostFetchProps = await client.fetch(query);

   const { publishedAt, mainImage, title, body, ...rest } = value;

   const date = dateFormat(publishedAt);

   return (
      <main className="min-h-screen h-full max-w-[49rem] w-full text-black dark:text-slate-100  m-auto flex flex-col gap-4 py-4 px-[min(3%_,_1rem)]">
         {/* <div className=' flex flex-col gap-4 max-w-7xl m-auto '> */}
         {/* @ts -expect-error */}
         <ButtonBack/>

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
            <h1 className="text-4xl font-semibold text-slate-50 capitalize">
               {title}
            </h1>
            <p>{date}</p>
            <div className="relative z-0 py-10">
               <PortableTextRender content={body} />
            </div>
         </section>
      </main>
   );
}
