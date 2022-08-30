import { ViewCompanyTemplate } from '@template/view-company.template';
import { trpc } from '@utils/trpc';
import { useRouter } from 'next/router';

export default function CompanyDashboard(): JSX.Element {
  const router = useRouter();
  const { slug } = router.query as { slug: string };
  const {
    isLoading: isLoadingCompany,
    data: company,
    error: errorGettingCompany,
  } = trpc.useQuery(['company.getCompanyBySlug', { slug }]);
  return (
    <ViewCompanyTemplate
      isLoadingCompany={isLoadingCompany}
      company={company}
      errorLoadingCompany={errorGettingCompany}
    />
  );
}
