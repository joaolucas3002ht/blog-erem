import React from 'react';
import { CarouselImage } from './CarouselImage';
import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
import urlFor from '../../../../lib/urlFor';

export interface ImageFetch {
   _type: string;
   alt: string;
   _id: string;
   _updatedAt: Date;
   image: Image;
   mainImage?: Image;
   _createdAt: Date;
   _rev: string;
}

export interface Image {
   hotspot?: Hotspot;
   _type: string;
   asset: Asset;
   crop?: Crop;
}

export interface Asset {
   _type: string;
   _ref: string;
}

export interface Crop {
   right: number;
   top: number;
   left: number;
   bottom: number;
   _type: string;
}

export interface Hotspot {
   height: number;
   _type: string;
   width: number;
   x: number;
   y: number;
}

export async function FetchCarouselImage() {
   const Groq = groq`*[_type=="main"] | order(createdAt desc)`;

   const Posts = await client.fetch(Groq);

   const val: ImageFetch[] = Posts;

   const ClassBg = val.map(({ image, alt }) => {
      return {
         src: urlFor(image.asset._ref).url(),
         alt: alt ? alt : 'sem texto alternativo',
      };
   });

   return (
      <>
         <CarouselImage CarouselImage={ClassBg} />
      </>
   );
}
// [
//    {
//       src: 'https://picsum.photos/640',
//    },
//    {
//       src: 'https://picsum.photos/624',
//    },
//    {
//       src: 'https://picsum.photos/720',
//    },
//    {
//       src: 'https://picsum.photos/756',
//    },
//    {
//       src: 'https://picsum.photos/656',
//    },
//    {
//       src: 'https://picsum.photos/560',
//    },
// ];
