import { createRouter } from './context';
import { prisma } from '../db/client';
import { z } from 'zod';

export const companyRouter = createRouter()
  .query('getCompanies', {
    resolve() {
      return prisma.company.findMany({
        include: { CompanyHasCategory: { include: { Category: true } } },
      });
    },
  })
  .query('getCompanyBySlug', {
    input: z.object({
      slug: z.string(),
    }),
    resolve({ input }) {
      return prisma.company.findUnique({
        include: {
          CompanyHasCategory: { include: { Category: true } },
          CompanyProduct: true,
        },
        where: {
          slug: input.slug,
        },
      });
    },
  });
