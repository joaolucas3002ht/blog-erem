import { groq } from 'next-sanity';
import { NextRequest, NextResponse } from 'next/server';
import { headers, previewData } from 'next/headers';
import { client } from '../../../../lib/sanity.client';

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

interface PostFetchProps {
   query: string;
   page: number;
   lengthElementPage: number;
}

async function GetCardPropsLength({
   query,
   lengthElementPage,
}: PostFetchProps) {
   const numberElementFromPage = 4;
   const currentPage =
      //  page ? Number(page) :
      1;

   const GetQuery = query
      ? groq`
*[_type == "post" && title match "**${query}**"].length`
      : groq`
*[_type=="post"].length`;

   const posts: CardProps[] = await client.fetch(GetQuery);

   const val = Math.ceil([...posts].length / lengthElementPage);

   return val;
}

async function GetCardPropsSearch({
   query,
   page = 1,
   lengthElementPage,
}: PostFetchProps) {
   const pageMax = page * lengthElementPage;
   const PageMin = (page - 1) * lengthElementPage;

   const GetQuery = query
      ? groq`*[_type=="post" && title match "**${query}**"][${PageMin}...${pageMax}]{
   mainImage,
   slug,
   publishedAt,
   title
} | order(publishedAt desc)`
      : groq`*[_type=="post"][${PageMin}...${pageMax}]{
   mainImage,
   slug,
   publishedAt,
   title
} | order(publishedAt desc)`;

   const posts: CardProps[] = await client.fetch(GetQuery);

   return posts;
}

export async function POST(request: Request) {
   const lengthElementPage = 8;

   const query = '';
   const page = 1;

   const post = await GetCardPropsSearch({ query, page, lengthElementPage });

   const pagesLength = await GetCardPropsLength({
      query,
      page,
      lengthElementPage,
   });

   return NextResponse.json({
      post: post,
      pagesLength: pagesLength,
   });
}
