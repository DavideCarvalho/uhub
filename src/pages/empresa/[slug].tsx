import { ViewCompanyTemplate } from '@template/view-company.template';
import { trpc } from '@utils/trpc';
import { getSsgHelpers } from '@utils/get-ssg-helpers';
import { GetServerSidePropsContext } from 'next';

interface ViewCompanyPageProps {
  slug: string;
}

export default function ViewCompanyPage({
  slug,
}: ViewCompanyPageProps): JSX.Element {
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

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<{ slug: string }>) {
  const ssg = getSsgHelpers();
  const slug = params?.slug as string;
  /*
   * Prefetching the `post.byId` query here.
   * `prefetchQuery` does not return the result - if you need that, use `fetchQuery` instead.
   */
  await ssg.prefetchQuery('company.getCompanyBySlug', {
    slug,
  });
  // Make sure to return { props: { trpcState: ssg.dehydrate() } }
  return {
    props: {
      trpcState: ssg.dehydrate(),
      slug,
    },
  };
}
