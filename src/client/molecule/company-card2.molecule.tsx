import { Card, Grid, Text, Badge, Button, Row } from '@nextui-org/react';

interface CardMolecule2Props {
  name: string;
  description: string;
  href: string;
  categories: string[];
  onPress: () => void;
  className?: string;
}

export function CompanyCard2Molecule({
  name,
  description,
  categories,
  onPress,
}: CardMolecule2Props): JSX.Element {
  return (
    <Card isHoverable css={{ p: '$6', mw: '400px' }}>
      <Card.Header>
        <img
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
                {category}
              </Badge>
            ))}
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: '$2' }}>
        <Text>{description}</Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="flex-end">
          <Button onPress={() => onPress()} size={'sm'} color="primary">
            Ver
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
}
