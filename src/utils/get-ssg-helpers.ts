import { createSSGHelpers } from '@trpc/react/ssg';
import { appRouter } from '../server/router';
import { createContext } from '../server/router/context';
import superjson from 'superjson';

export function getSsgHelpers() {
  return createSSGHelpers({
    router: appRouter,
    ctx: {} as any,
    transformer: superjson,
  });
}
