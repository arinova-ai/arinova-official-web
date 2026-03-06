import { docs } from 'fumadocs-mdx:collections/server';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  i18n: {
    defaultLanguage: 'en',
    languages: ['en', 'zh-CN', 'zh-TW'],
  },
});
