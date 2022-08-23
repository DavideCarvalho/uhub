// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { exampleRouter } from './example';
import { companyRouter } from './company';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('company.', companyRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
