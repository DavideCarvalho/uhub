import { PropsWithChildren } from 'react';
import { Navbar2Organism } from '@organism/navbar2.organism';
import { Container, Grid, styled } from '@nextui-org/react';
import { Category, Company, CompanyHasCategory } from '@prisma/client';
import { Loading } from '@nextui-org/react';
import { CompanyCard2Molecule } from '@molecule/company-card2.molecule';
import { TRPCClientErrorLike } from '@trpc/client';
import { AppRouter } from '../../server/router';

export const Box = styled('div', {
  boxSizing: 'border-box',
});

export const Content = ({ children }: PropsWithChildren) => (
  <Box css={{ px: '$12', mt: '$8', '@xsMax': { px: '$10' }, height: '100vh' }}>
    {children}
  </Box>
);

export function Layout({ children }: PropsWithChildren): JSX.Element {
  return (
    <Container fluid css={{ height: '100vh' }}>
      <Navbar2Organism />
      {children}
    </Container>
  );
}

interface ClientDashboardTemplateProps {
  companies:
    | (Company & {
        CompanyHasCategory: (CompanyHasCategory & { Category: Category })[];
      })[]
    | undefined;
  isLoadingCompanies: boolean;
  errorLoadingCompanies: TRPCClientErrorLike<AppRouter> | null;
}

export function ClientDashboardTemplate({
  errorLoadingCompanies,
  isLoadingCompanies,
  companies,
}: ClientDashboardTemplateProps): JSX.Element {
  return (
    <Layout>
      <Content>
        <CompaniesCards
          companies={companies}
          error={errorLoadingCompanies}
          isLoading={isLoadingCompanies}
        />
        {/*{isLoadingCompanies && (*/}
        {/*  <Grid.Container gap={2} justify="center">*/}
        {/*    <Loading />*/}
        {/*  </Grid.Container>*/}
        {/*)}*/}
        {/*{!isLoadingCompanies && errorLoadingCompanies && <div>Erro</div>}*/}
        {/*<Grid.Container gap={2} justify="flex-start">*/}
        {/*  {companies?.map((company) => (*/}
        {/*    <Grid xs={12} sm={6} md={4} lg={3} key={company.cnpj}>*/}
        {/*      <CompanyCard2Molecule*/}
        {/*        companyName={company.name}*/}
        {/*        companyDescription={company.description}*/}
        {/*        href={`/empresa/${company.slug}`}*/}
        {/*      />*/}
        {/*    </Grid>*/}
        {/*  ))}*/}
        {/*</Grid.Container>*/}
      </Content>
    </Layout>
  );
}

interface CompaniesCardsProps {
  companies:
    | (Company & {
        CompanyHasCategory: (CompanyHasCategory & { Category: Category })[];
      })[]
    | undefined;
  isLoading: boolean;
  error: TRPCClientErrorLike<AppRouter> | null;
}

function CompaniesCards({
  companies,
  isLoading,
  error,
}: CompaniesCardsProps): JSX.Element {
  return (
    <>
      {isLoading && (
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Loading />
          </Grid>
        </Grid.Container>
      )}
      {!isLoading && error && (
        <Grid.Container gap={2} justify="center">
          <Grid>
            <div>Erro</div>
          </Grid>
        </Grid.Container>
      )}
      {!isLoading && companies && (
        <Grid.Container gap={2} justify="flex-start">
          {companies.map((company) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={company.cnpj}>
              <CompanyCard2Molecule
                key={company.cnpj}
                name={company.name}
                description={company.description}
                categories={company.CompanyHasCategory.map(
                  (companyHasCategory) => companyHasCategory.Category.name
                )}
                href={`/empresa/${company.slug}`}
              />
            </Grid>
          ))}
        </Grid.Container>
      )}
    </>
  );
}
