// /schemas/product.js (.ts)

import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
   name: 'home',
   type: 'document',
   title: 'Home data',
   fields: [
      defineField({
         name: 'titleCarousel',
         type: 'string',
         title: 'Title name from Image for Carousel',
      }),
      defineField({
         name: 'imageCarousel',
         type: 'array',
         title: 'Image for Carousel',
         of: [
            defineArrayMember({
               name: 'imageData',
               type: 'document',

               fields: [
                  defineField({
                     name: 'alt',
                     title: 'Alternate Text',
                     type: 'string',
                  }),
                  defineField({
                     name: 'url',
                     title: 'Image',
                     type: 'image',
                     options: {
                        hotspot: true,
                     },
                  }),
               ],
            }),
         ],
      }),
      defineField({
         name: 'productName',
         type: 'string',
         title: 'Product name',
      }),
      defineField({
         title: 'Block Content',
         name: 'blockContent',
         type: 'array',
         of: [
            defineField({
               title: 'Block',
               type: 'block',
               // Styles let you set what your user can mark up blocks with. These
               // correspond with HTML tags, but you can set any title or value
               // you want and decide how you want to deal with it where you want to
               // use your content.
               /* @ts-expect-error  --------------------------------------------- */
               styles: [
                  { title: 'Normal', value: 'normal' },
                  { title: 'H2', value: 'h2' },
                  { title: 'H3', value: 'h3' },
                  { title: 'H4', value: 'h4' },
                  { title: 'Quote', value: 'blockquote' },
               ],
               lists: [{ title: 'Bullet', value: 'bullet' }],
               // Marks let you mark up inline text in the block editor.
               marks: {
                  // Decorators usually describe a single property – e.g. a typographic
                  // preference or highlighting by editors.
                  decorators: [
                     { title: 'Strong', value: 'strong' },
                     { title: 'Emphasis', value: 'em' },
                  ],
                  // Annotations can be any object structure – e.g. a link or a footnote.
                  annotations: [
                     {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                           {
                              title: 'URL',
                              name: 'href',
                              type: 'url',
                           },
                        ],
                     },
                  ],
               },
            }),
            // You can add additional types here. Note that you can't use
            // primitive types such as 'string' and 'number' in the same array
            // as a block type.
            // ------------------------------------------- //
            // defineArrayMember({
            //    type: 'image',
            //    options: { hotspot: true },
            // }),
         ],
      }),
      defineField({
         name: 'titleSectionCard',
         type: 'string',
         title: 'Title name from Section Card',
      }),
      defineField({
         name: 'titleAddress',
         type: 'string',
         title: 'Title Address',
      }),
   ],
});

// export default defineType({
//    title: 'Poster',
//    name: 'poster',
//    type: 'image',
//    options: {
//       hotspot: true, // <-- Defaults to false
//    },
//    fields: [
//       defineField({
//          name: 'caption',
//          type: 'string',
//          title: 'Caption',
//       }),
//       defineField({
//          name: 'attribution',
//          type: 'string',
//          title: 'Attribution',
//       }),
//    ],
// });
