import { config } from 'dotenv';
import createClient from 'openapi-fetch';

import { environment } from './config/env';
import { paths } from './schema';
import { Enrichments, Language, Region } from './types';

config();

const { GET } = createClient<paths>({
  baseUrl: environment().PLACES_API_BASE_URL,
  headers: {
    'X-API-KEY': environment().PLACES_API_KEY,
  },
});

const searchTopAttractions = async (
  query: string,
  region: Region,
  webhook: string,
  limit: number = 50,
  enrichment: Enrichments[] = [],
  language: Language = 'en'
) => {
  try {
    const { data } = await GET('/maps/search-v3', {
      params: {
        query: {
          async: true,
          dropDuplicates: true,
          enrichment,
          language,
          limit,

          query,
          region,
          webhook,
        },
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

searchTopAttractions(
  // '0x47c609eec1bb16e5:0xd54373ae6a408585',
  // '0x47c609e2c5b47ccf:0x6cd478550520ca35',
  'tourist attractions, rating +4.5 and +1000 reviewers in paris',
  // 'ChIJ-4hV9B0JxkcRlWODdZx6b9A',
  'FR',
  // 'https://dev.intripi.com/v1/places/webhook',
  environment().PLACES_API_WEBHOOK,
  5
);
