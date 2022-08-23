import { trpc } from '../../utils/trpc';
import { NavbarOrganism } from '@organism/navbar.organism';
import { CardMolecule } from '@molecule/card.molecule';
import { Company } from '@prisma/client';

export default function ClientDashboard(): JSX.Element {
  const {
    data: companies,
    error: errorGettingCompanies,
    isLoading,
  } = trpc.useQuery(['company.getCompanies']);
  return (
    <div>
      <NavbarOrganism />
      {!isLoading && !errorGettingCompanies && companies && (
        <CompaniesCards companies={companies} />
      )}
    </div>
  );
}

interface CompaniesCardsProps {
  companies: Company[];
}

function CompaniesCards({ companies }: CompaniesCardsProps): JSX.Element {
  return (
    <>
      {companies.map((company) => (
        <CardMolecule key={company.cnpj} title={company.name} subtitle={''} />
      ))}
    </>
  );
}
