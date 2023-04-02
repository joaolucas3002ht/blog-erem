import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { myTheme } from './theme';
import {NavBar} from '../src/components/sanity/NavBar';
import "../style/globals.css"
import { dataset, projectId } from '../lib/sanity.client';

export default defineConfig({
   basePath: '/studio',
   name: 'NewsAI',
   title: 'NewsAI',

   projectId,
   dataset,

   plugins: [deskTool(), visionTool()],

   schema: {
      types: schemaTypes,
   },
   studio: {
      components: {
         navbar: NavBar,
      },
   },
   theme: myTheme,
});
