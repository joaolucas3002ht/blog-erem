import { defineField, defineType } from 'sanity';

export default defineType({
   name: 'main',
   title: 'Main Imagens',
   type: 'document',
   fields: [
      defineField({
         name: 'alt',
         title: 'Alternate Text',
         type: 'string',
      }),
      defineField({
         name: 'image',
         title: 'Image',
         type: 'image',
         options: {
            hotspot: true,
         },
      }),
   ],
});
