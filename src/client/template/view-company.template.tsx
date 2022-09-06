import { Badge, Card, Grid, Loading, Spacer, Text } from '@nextui-org/react';
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
            <Text h1>
              {company.name} {company.hasWhatsApp && <WhatsappIcon />}
            </Text>
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
            <Card css={{ p: '$6' }}>
              <Card.Header>
                <Grid.Container justify="center">
                  <Grid>
                    <Text h2>Informações</Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: '$10' }}>
                <Grid.Container gap={2} justify="center">
                  <Grid>
                    <Text h4>Endereço</Text>
                    <Text>{company.address}</Text>
                  </Grid>
                  <Grid>
                    <Text h4>Telefone</Text>
                    <Text>{company.phone}</Text>
                  </Grid>
                  {company.cellphone && (
                    <Grid>
                      <Text h4>Celular</Text>
                      <Text>{company.cellphone}</Text>
                    </Grid>
                  )}
                </Grid.Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      )}

      {!isLoadingCompany && company && (
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Text h2>Produtos</Text>
          </Grid>
        </Grid.Container>
      )}

      {!isLoadingCompany && company && (
        <Grid.Container gap={2} justify="center">
          {company.CompanyProduct.map((companyProduct) => (
            <Grid key={companyProduct.id}>
              <Card css={{ p: '$6', mw: '400px' }}>
                <Card.Header>
                  <Grid.Container justify="center">
                    <Grid>
                      <Text h4>{companyProduct.name}</Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </LayoutOrganism>
  );
}

function WhatsappIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="50px"
      viewBox="0 5 30 5"
      style={{ fill: '#00a000', transform: '', msFilter: '' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
      />
    </svg>
  );
}
