import { groq } from 'next-sanity';
import { client } from '../lib/sanity.client';

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
   const GetQuery = query
      ? groq`
*[_type == "post" && title match "**${query}**"].length`
      : groq`
*[_type=="post"].length`;

   console.log(GetQuery);

   const posts: CardProps[] = await client.fetch(GetQuery);

   const val = Math.ceil([...posts].length / lengthElementPage);

   return val;
}

async function GetCardPropsSearch({
   query,
   page,
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

   console.log(PageMin, pageMax,page);

   const posts: CardProps[] = await client.fetch(GetQuery);

   return posts;
}

export async function FetchPosts({
   lengthElementPage = 12,
   query = '',
   page = 1,
}: PostFetchProps) {

  const PageValidate = page ? page : 1

   const post = await GetCardPropsSearch({ query,page: PageValidate, lengthElementPage });

   const pagesLength = await GetCardPropsLength({
      query,
      page,
      lengthElementPage,
   });

   console.log(
      { post: post, pagesLength: pagesLength },
      { query, PageValidate, lengthElementPage },
   );

   return { post: post, pagesLength: pagesLength };
}
