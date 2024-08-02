import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const Env = createEnv({
  server: {
    DATABASE_URL: z.string().optional(),
  },

  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
  },

  shared: {
    NODE_ENV: z.enum(['test', 'development', 'production']),
  },

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
});
