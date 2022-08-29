import { Card, Grid, Text, Badge } from '@nextui-org/react';
import Image from 'next/image';

interface CardMolecule2Props {
  name: string;
  description: string;
  href: string;
  categories: string[];
  className?: string;
}

export function CompanyCard2Molecule({
  name,
  description,
  categories,
}: CardMolecule2Props): JSX.Element {
  return (
    <Card css={{ p: '$6', mw: '400px' }}>
      <Card.Header>
        <Image
          alt="nextui logo"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: '$6' }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: '$xs' }}>
              {name}
            </Text>
          </Grid>
          <Grid xs={12}>
            {categories.map((category) => (
              <Badge color="primary" variant="flat" key={category}>
                Construção
              </Badge>
            ))}
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: '$2' }}>
        <Text>{description}</Text>
      </Card.Body>
    </Card>
  );
}
