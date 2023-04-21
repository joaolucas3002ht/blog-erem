import { defineType, defineArrayMember } from 'sanity';

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
   title: 'Block Content Main',
   name: 'blockContentMain',
   type: 'array',
   of: [
      defineArrayMember({
         title: 'Block',
         type: 'block',

         styles: [{ title: 'Normal', value: 'normal' }],
         lists: [],
         marks: { decorators: [], annotations: [] },
      }),

      defineArrayMember({
         type: 'image',
         options: { hotspot: true },
      }),
   ],
});
