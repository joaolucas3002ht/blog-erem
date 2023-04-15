import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';
import { client } from '../../../../lib/sanity.client';
import urlFor from '../../../../lib/urlFor';

interface ImageProps {
   _key: string;
   _type: string;
   asset: {
      _ref: string;
      _type: string;
   };
}

interface NewImageProps extends ImageProps {
   alt: string;
}

export async function GET() {
   const lengthElementPage = 8;

   const res = {
      body: [
         {
            _key: 'c5a4a60d96fe',
            _type: 'block',
            children: [
               {
                  _key: '8fc62bc3f6be',
                  _type: 'span',
                  marks: [],
                  text: 'Teste 3',
               },
            ],
            markDefs: [],
            style: 'h2',
         },
         {
            _key: '350d5e9af9c0',
            _type: 'block',
            children: [
               { _key: '2dacc10b19c6', _type: 'span', marks: [], text: '' },
            ],
            level: 1,
            listItem: 'bullet',
            markDefs: [],
            style: 'normal',
         },
         {
            _key: 'e4428d61ad0d',
            _type: 'image',
            asset: {
               _ref: 'image-2de1203fbe40333ae47e50adbf10cd22aafcc0c0-1920x1080-jpg',
               _type: 'reference',
            },
         },
         {
            _key: '958ea3c56c0d',
            _type: 'block',
            children: [
               {
                  _key: '04f146ece942',
                  _type: 'span',
                  marks: [],
                  text: 'script js',
               },
            ],
            level: 1,
            listItem: 'bullet',
            markDefs: [],
            style: 'normal',
         },
      ],
   };

   const query = groq`
   *[_type == "post" && slug.current == "uiytsf"][0]{body}`;

   const data = res.body.reduce((acc, cur, ind, arr) => {
      const { _type, ...res } = cur;

      if (_type === 'image') {
         const text: any = arr[ind + 1].children?.[0]?.text;

         const imageUrl = urlFor(cur).url();

         const newCur = { _type, ...res };

         const { asset } = newCur;

         const assetType = asset?._type;

         return (acc = [
            ...acc,
            { ...cur, alt: text ? text : 'not information about' },
         ]);
      }
      return acc;
   }, [] as NewImageProps[] | any[]);
   // const yy = await fetch(query);
   // console.log(res);  console.log(data);

   // console.log(urlFor(data[0]).url());

   return NextResponse.json({ body: data });
}

function editImage(objImage: ImageProps) {
   // const text: any = arr[ind + 1].children?.[0]?.text;

   const text = '';

   const imageUrl = urlFor(objImage).url();

   let objImageEdit = objImage;

   objImageEdit['asset']['_ref'] = imageUrl;

   const objAlt = { alt: text ? text : 'not information about' };

   return { ...objImageEdit, ...objAlt };
}

// interface CardProps {
//    title: string;
//    publishedAt: Date;
//    slug: {
//       _type: string;
//       current: string;
//    };
//    mainImage: {
//       _type: string;
//       asset: {
//          _ref: string;
//          _type: string;
//       };
//       crop?: any;
//       hotspot?: any;
//    };
// }

// interface PostFetchProps {
//    query: string;
//    page: number;
//    lengthElementPage: number;
// }

// async function GetCardPropsLength({
//    query,
//    lengthElementPage,
// }: PostFetchProps) {
//    const numberElementFromPage = 4;
//    const currentPage =
//       //  page ? Number(page) :
//       1;

//    const GetQuery = query
//       ? groq`
// *[_type == "post" && title match "**${query}**"].length`
//       : groq`
// *[_type=="post"].length`;

//    const posts: CardProps[] = await client.fetch(GetQuery);

//    const val = Math.ceil([...posts].length / lengthElementPage);

//    return val;
// }

// async function GetCardPropsSearch({
//    query,
//    page = 1,
//    lengthElementPage,
// }: PostFetchProps) {
//    const pageMax = page * lengthElementPage;
//    const PageMin = (page - 1) * lengthElementPage;

//    const GetQuery = query
//       ? groq`*[_type=="post" && title match "**${query}**"][${PageMin}...${pageMax}]{
//    mainImage,
//    slug,
//    publishedAt,
//    title
// } | order(publishedAt desc)`
//       : groq`*[_type=="post"][${PageMin}...${pageMax}]{
//    mainImage,
//    slug,
//    publishedAt,
//    title
// } | order(publishedAt desc)`;

//    const posts: CardProps[] = await client.fetch(GetQuery);

//    return posts;
// }

// "test-2"
// "uiytsf"
// "test"

// {
//    body: [
//       {
//          _key: 'd1ee2efaf171',
//          _type: 'block',
//          children: [
//             {
//                _key: '90e6e7fdf3660',
//                _type: 'span',
//                marks: [],
//                text: 'Lorem Ipsum',
//             },
//          ],
//          markDefs: [],
//          style: 'h2',
//       },
//       {
//          _key: 'e6afc9923c71',
//          _type: 'block',
//          children: [
//             {
//                _key: '10479c9008c70',
//                _type: 'span',
//                marks: ['strong'],
//                text: 'Lorem Ipsum',
//             },
//             {
//                _key: '10479c9008c71',
//                _type: 'span',
//                marks: [],
//                text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
//             },
//          ],
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: 'c54f95ba5c44',
//          _type: 'block',
//          children: [
//             { _key: '812096c60661', _type: 'span', marks: [], text: '' },
//          ],
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: '8b938d370263',
//          _type: 'block',
//          children: [
//             { _key: 'c3bdb7582495', _type: 'span', marks: [], text: 'lorem' },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: '32023ac986de',
//          _type: 'block',
//          children: [
//             {
//                _key: 'a5fd6a6c3d31',
//                _type: 'span',
//                marks: [],
//                text: 'lorem lorem',
//             },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: 'eb6d04dfe777',
//          _type: 'block',
//          children: [
//             {
//                _key: 'f8aaf7ba8e1f',
//                _type: 'span',
//                marks: [],
//                text: 'centure lorem',
//             },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: 'cd5382347e6d',
//          _type: 'block',
//          children: [
//             {
//                _key: '755c1d48f63b',
//                _type: 'span',
//                marks: [],
//                text: 'text lorem ',
//             },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: 'ab04872cf7b1',
//          _type: 'block',
//          children: [
//             {
//                _key: '98a221a674bf',
//                _type: 'span',
//                marks: [],
//                text: 'lorem lorem',
//             },
//          ],
//          markDefs: [],
//          style: 'h2',
//       },
//       {
//          _key: '68a683a6979d',
//          _type: 'block',
//          children: [
//             { _key: '76e8a587a80e', _type: 'span', marks: [], text: '' },
//          ],
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: 'bffb1ff65929',
//          _type: 'image',
//          asset: {
//             _ref: 'image-2de1203fbe40333ae47e50adbf10cd22aafcc0c0-1920x1080-jpg',
//             _type: 'reference',
//          },
//       },
//       {
//          _key: 'b93196f7d203',
//          _type: 'block',
//          children: [
//             { _key: '8868b31ddd34', _type: 'span', marks: [], text: 'eter' },
//          ],
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: '81797b6d52b8',
//          _type: 'block',
//          children: [
//             {
//                _key: '1a520e03ba5f0',
//                _type: 'span',
//                marks: ['strong'],
//                text: 'Lorem Ipsum',
//             },
//             {
//                _key: '1a520e03ba5f1',
//                _type: 'span',
//                marks: [],
//                text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//             },
//          ],
//          markDefs: [],
//          style: 'normal',
//       },
//    ];
// }

// {
//    body: [
//       {
//          _key: 'd1ee2efaf171',
//          _type: 'block',
//          children: [
//             {
//                _key: '90e6e7fdf3660',
//                _type: 'span',
//                marks: [],
//                text: 'Lorem Ipsum',
//             },
//          ],
//          markDefs: [],
//          style: 'h2',
//       },
//       {
//          _key: 'e6afc9923c71',
//          _type: 'block',
//          children: [
//             {
//                _key: '10479c9008c70',
//                _type: 'span',
//                marks: ['strong'],
//                text: 'Lorem Ipsum',
//             },
//             {
//                _key: '10479c9008c71',
//                _type: 'span',
//                marks: [],
//                text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
//             },
//          ],
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: 'c54f95ba5c44',
//          _type: 'block',
//          children: [
//             { _key: '812096c60661', _type: 'span', marks: [], text: '' },
//          ],
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: '8b938d370263',
//          _type: 'block',
//          children: [
//             {
//                _key: 'c3bdb7582495',
//                _type: 'span',
//                marks: [],
//                text: 'lorem',
//             },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: '32023ac986de',
//          _type: 'block',
//          children: [
//             {
//                _key: 'a5fd6a6c3d31',
//                _type: 'span',
//                marks: [],
//                text: 'lorem lorem',
//             },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: 'eb6d04dfe777',
//          _type: 'block',
//          children: [
//             {
//                _key: 'f8aaf7ba8e1f',
//                _type: 'span',
//                marks: [],
//                text: 'centure lorem',
//             },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: 'cd5382347e6d',
//          _type: 'block',
//          children: [
//             {
//                _key: '755c1d48f63b',
//                _type: 'span',
//                marks: [],
//                text: 'text lorem ',
//             },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: 'ab04872cf7b1',
//          _type: 'block',
//          children: [
//             {
//                _key: '98a221a674bf',
//                _type: 'span',
//                marks: [],
//                text: 'lorem lorem',
//             },
//          ],
//          markDefs: [],
//          style: 'h2',
//       },
//       {
//          _key: '68a683a6979d',
//          _type: 'block',
//          children: [
//             { _key: '76e8a587a80e', _type: 'span', marks: [], text: '' },
//          ],
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: 'bffb1ff65929',
//          _type: 'image',
//          asset: {
//             _ref: 'image-2de1203fbe40333ae47e50adbf10cd22aafcc0c0-1920x1080-jpg',
//             _type: 'reference',
//          },
//       },
//       {
//          _key: 'b93196f7d203',
//          _type: 'block',
//          children: [
//             { _key: '8868b31ddd34', _type: 'span', marks: [], text: 'eter' },
//          ],
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: '81797b6d52b8',
//          _type: 'block',
//          children: [
//             {
//                _key: '1a520e03ba5f0',
//                _type: 'span',
//                marks: ['strong'],
//                text: 'Lorem Ipsum',
//             },
//             {
//                _key: '1a520e03ba5f1',
//                _type: 'span',
//                marks: [],
//                text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//             },
//          ],
//          markDefs: [],
//          style: 'normal',
//       },
//    ];
// }

//list
// {
//    body: [
//       {
//          _key: 'c5a4a60d96fe',
//          _type: 'block',
//          children: [
//             { _key: '8fc62bc3f6be', _type: 'span', marks: [], text: 'Teste 3' },
//          ],
//          markDefs: [],
//          style: 'h2',
//       },
//       {
//          _key: '350d5e9af9c0',
//          _type: 'block',
//          children: [
//             { _key: '2dacc10b19c6', _type: 'span', marks: [], text: '' },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: 'e4428d61ad0d',
//          _type: 'image',
//          asset: {
//             _ref: 'image-2de1203fbe40333ae47e50adbf10cd22aafcc0c0-1920x1080-jpg',
//             _type: 'reference',
//          },
//       },
//       {
//          _key: '958ea3c56c0d',
//          _type: 'block',
//          children: [
//             {
//                _key: '04f146ece942',
//                _type: 'span',
//                marks: [],
//                text: 'script js',
//             },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//    ];
// }

//font
// {
//    body: [
//       {
//          _key: 'd1ee2efaf171',
//          _type: 'block',
//          children: [
//             {
//                _key: '90e6e7fdf3660',
//                _type: 'span',
//                marks: [],
//                text: 'Lorem Ipsum',
//             },
//          ],
//          markDefs: [],
//          style: 'h2',
//       },
//       {
//          _key: 'e6afc9923c71',
//          _type: 'block',
//          children: [
//             {
//                _key: '10479c9008c70',
//                _type: 'span',
//                marks: ['strong'],
//                text: 'Lorem Ipsum',
//             },
//             {
//                _key: '10479c9008c71',
//                _type: 'span',
//                marks: [],
//                text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
//             },
//          ],
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: '8b938d370263',
//          _type: 'block',
//          children: [
//             { _key: 'c3bdb7582495', _type: 'span', marks: [], text: 'lorem' },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: '32023ac986de',
//          _type: 'block',
//          children: [
//             {
//                _key: 'a5fd6a6c3d31',
//                _type: 'span',
//                marks: [],
//                text: 'lorem lorem',
//             },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: 'eb6d04dfe777',
//          _type: 'block',
//          children: [
//             {
//                _key: 'f8aaf7ba8e1f',
//                _type: 'span',
//                marks: [],
//                text: 'centure lorem',
//             },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: 'cd5382347e6d',
//          _type: 'block',
//          children: [
//             {
//                _key: '755c1d48f63b',
//                _type: 'span',
//                marks: [],
//                text: 'text lorem ',
//             },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: 'ab04872cf7b1',
//          _type: 'block',
//          children: [
//             {
//                _key: '98a221a674bf',
//                _type: 'span',
//                marks: [],
//                text: 'lorem lorem',
//             },
//          ],
//          markDefs: [],
//          style: 'h2',
//       },
//       {
//          _key: 'bffb1ff65929',
//          _type: 'image',
//          asset: {
//             _ref: 'image-2de1203fbe40333ae47e50adbf10cd22aafcc0c0-1920x1080-jpg',
//             _type: 'reference',
//          },
//       },
//       {
//          _key: 'b93196f7d203',
//          _type: 'block',
//          children: [
//             {
//                _key: '8868b31ddd34',
//                _type: 'span',
//                marks: [],
//                text: 'codigo font',
//             },
//          ],
//          level: 1,
//          listItem: 'bullet',
//          markDefs: [],
//          style: 'normal',
//       },
//       {
//          _key: '81797b6d52b8',
//          _type: 'block',
//          children: [
//             {
//                _key: '1a520e03ba5f0',
//                _type: 'span',
//                marks: ['strong'],
//                text: 'Lorem Ipsum',
//             },
//             {
//                _key: '1a520e03ba5f1',
//                _type: 'span',
//                marks: [],
//                text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//             },
//          ],
//          markDefs: [],
//          style: 'normal',
//       },
//    ];
// }
