import { createSSGHelpers } from '@trpc/react/ssg';
import { appRouter } from '../server/router';
import { createContext } from '../server/router/context';
import superjson from 'superjson';

export async function getSsgHelpers({ req, res }) {
  return createSSGHelpers({
    router: appRouter,
    ctx: await createContext({ req, res }),
    transformer: superjson,
  });
}
