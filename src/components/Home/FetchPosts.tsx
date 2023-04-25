import { groq } from 'next-sanity';
import React from 'react';
import { client } from '../../../lib/sanity.client';
import { Card } from '../Card/Card';
import { CardLoading } from '../Card/CardLoading';

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

export async function FetchPosts() {
   const Groq = groq`*[_type=="post"][0...8]{
    mainImage,
    slug,
    publishedAt,
    title
 } | order(publishedAt desc)`;

   const Posts: CardProps[] = await client.fetch(Groq);

   return (
      <div className="w-full mx-auto">
         <div className="overflow-x-scroll flex gap-2">
            {Posts.map((e, i) => (
               <div key={i}>
                  <Card
                     key={i}
                     title={e.title}
                     slug={e.slug.current}
                     publishedAt={e.publishedAt}
                     mainImage={e.mainImage}
                  />
               </div>
            ))}
         </div>
      </div>
   );
}
