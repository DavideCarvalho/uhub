import { trpc } from '@utils/trpc';
import { NavbarOrganism } from '@organism/navbar.organism';
import { CompanyCardMolecule } from '@molecule/company-card.molecule';
import { Company } from '@prisma/client';
import { Suspense } from 'react';

export default function ClientDashboardPage(): JSX.Element {
  const { data: companies, error: errorGettingCompanies } = trpc.useQuery(
    ['company.getCompanies'],
    { suspense: true }
  );
  return (
    <Suspense fallback={<h1>Carregando</h1>}>
      <NavbarOrganism />
      {errorGettingCompanies && <h1>Erro</h1>}
      {companies && <CompaniesCards companies={companies} />}
    </Suspense>
  );
}

interface CompaniesCardsProps {
  companies: Company[];
}

function CompaniesCards({ companies }: CompaniesCardsProps): JSX.Element {
  return (
    <>
      {companies.map((company) => (
        <CompanyCardMolecule
          key={company.cnpj}
          title={company.name}
          subtitle={''}
        />
      ))}
    </>
  );
}
