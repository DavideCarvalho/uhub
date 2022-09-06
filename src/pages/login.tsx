import { Card, Container, Grid, Spacer, Input } from '@nextui-org/react';

export default function LoginPage() {
  return (
    <Container fluid css={{ h: '100vh' }}>
      <Grid.Container justify="center" alignItems="center" css={{ h: '100%' }}>
        <Grid css={{ minWidth: '20%', textAlign: 'center' }}>
          <h1>Login</h1>
          <Card css={{ py: '$6' }}>
            <Card.Body>
              <Input
                clearable
                bordered
                labelPlaceholder="Name"
                initialValue="NextUI"
              />
              <Spacer y={2.5} />
              <Input
                clearable
                bordered
                labelPlaceholder="Name"
                initialValue="NextUI"
              />
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>
  );
}
