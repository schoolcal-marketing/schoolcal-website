import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01', // use a recent date
  useCdn: true, // set to false if you need fresh data
  token: process.env.SANITY_API_READ_TOKEN, // only needed for private data
});

export default sanityClient;
