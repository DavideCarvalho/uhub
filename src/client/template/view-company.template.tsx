import { Badge, Grid, Loading, Spacer, Text } from '@nextui-org/react';
import { LayoutOrganism } from '@organism/layout.organism';
import {
  Category,
  Company,
  CompanyHasCategory,
  CompanyProduct,
} from '@prisma/client';
import { TRPCClientErrorLike } from '@trpc/client';
import { AppRouter } from '../../server/router';

interface ViewCompanyTemplateProps {
  company:
    | (Company & {
        CompanyHasCategory: (CompanyHasCategory & {
          Category: Category;
        })[];
        CompanyProduct: CompanyProduct[];
      })
    | null
    | undefined;
  isLoadingCompany: boolean;
  errorLoadingCompany: TRPCClientErrorLike<AppRouter> | null;
}

export function ViewCompanyTemplate({
  company,
  isLoadingCompany,
  errorLoadingCompany,
}: ViewCompanyTemplateProps) {
  return (
    <LayoutOrganism>
      {isLoadingCompany && (
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Loading />
          </Grid>
        </Grid.Container>
      )}
      {!isLoadingCompany && errorLoadingCompany && (
        <Grid.Container gap={2} justify="center">
          <Grid>
            <div>Erro</div>
          </Grid>
        </Grid.Container>
      )}
      {!isLoadingCompany && company && (
        <Grid.Container justify="center">
          <Grid>
            <Text h1>{company.name}</Text>
            <Grid.Container justify="center">
              <Grid>
                {company.CompanyHasCategory.map((companyHasCategory) => (
                  <Badge
                    size="md"
                    color="secondary"
                    key={companyHasCategory.Category.id}
                  >
                    {companyHasCategory.Category.name}
                  </Badge>
                ))}
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid.Container>
      )}

      {!isLoadingCompany && company && (
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Text h3>Produtos</Text>
          </Grid>
        </Grid.Container>
      )}
    </LayoutOrganism>
  );
}
