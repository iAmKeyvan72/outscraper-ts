import { config } from 'dotenv';
import fs from 'fs';
import createClient from 'openapi-fetch';

import { environment } from './config/env';
import { paths } from './schema';
import { Enrichments, Language, Region } from './types';

config();

const { GET } = createClient<paths>({
  baseUrl: 'https://api.app.outscraper.com',
  headers: {
    'X-API-KEY': environment().API_KEY,
  },
});

const searchTopAttractions = async (
  query: string,
  region: Region,
  webhook: string,
  limit: number = 2,
  enrichment: Enrichments[] = [],
  language: Language = 'en'
) => {
  try {
    const { data, response } = await GET('/maps/search-v3', {
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

    console.log(data);
    console.log(response);

    fs.writeFileSync(
      'top-attractions-data.json',
      JSON.stringify(data, null, 2)
    );
    fs.writeFileSync(
      'top-attractions-response.json',
      JSON.stringify(response, null, 2)
    );

    return data;
  } catch (error) {
    console.error(error);
    fs.writeFileSync(
      'top-attractions-error.json',
      JSON.stringify(error, null, 2)
    );
  }
};

searchTopAttractions(
  'top tourist attractions with rating +4.5 and more than 1000 reviewers in amsterdam',
  'NL',
  'https://webhook.site/cba8d459-44a0-44da-8592-ff5b91b80a29'
);
