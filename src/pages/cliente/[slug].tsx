import { trpc } from '@utils/trpc';
import { ClientDashboardTemplate } from '@template/client-dashboard.template';

export default function ClientDashboardPage(): JSX.Element {
  const {
    isLoading: isLoadingCompanies,
    data: companies,
    error: errorGettingCompanies,
  } = trpc.useQuery(['company.getCompanies']);
  return (
    <ClientDashboardTemplate
      companies={companies}
      isLoadingCompanies={isLoadingCompanies}
      errorLoadingCompanies={errorGettingCompanies}
    />
  );
}
