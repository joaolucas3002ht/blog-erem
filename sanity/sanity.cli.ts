import { loadEnvConfig } from '@next/env';
import { defineCliConfig } from 'sanity/cli';
import { dataset, projectId } from '../lib/sanity.client';

const dev = dataset !== 'production';
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error });

export default defineCliConfig({
   api: {
      projectId,
      dataset,
   },
});
