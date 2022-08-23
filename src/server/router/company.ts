import { createRouter } from './context';
import { prisma } from '../db/client';

export const companyRouter = createRouter().query('getCompanies', {
  resolve() {
    return prisma.company.findMany();
  },
});
