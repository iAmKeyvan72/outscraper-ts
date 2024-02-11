import { mixed, object, string } from 'yup';

type NodeEnv = 'development' | 'production' | 'test';

const envSchema = object({
  NODE_ENV: mixed<NodeEnv>()
    .oneOf(['development', 'production', 'test'])
    .default('development')
    .required(),
  PLACES_API_BASE_URL: string().required(),
  PLACES_API_KEY: string().required(),
  PLACES_API_WEBHOOK: string().required(),
});

export const environment = () => envSchema.validateSync(process.env);
