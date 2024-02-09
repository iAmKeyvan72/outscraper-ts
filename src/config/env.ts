import { mixed, object, string } from 'yup';

type NodeEnv = 'development' | 'production' | 'test';

const envSchema = object({
  API_KEY: string().required(),
  NODE_ENV: mixed<NodeEnv>()
    .oneOf(['development', 'production', 'test'])
    .default('development')
    .required(),
});

export const environment = () => envSchema.validateSync(process.env);
