import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false, // 주로 동적인 데이터가 들어있으므로 cdn에 캐싱을 하지 않음.
  apiVersion: '2024-01-23',
  token: process.env.SANITY_SECRET_TOKEN,
});
