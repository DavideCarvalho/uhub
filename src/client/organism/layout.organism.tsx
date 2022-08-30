import { Container, styled } from '@nextui-org/react';
import { PropsWithChildren } from 'react';
import { Navbar2Organism } from './navbar2.organism';

const Box = styled('div', {
  boxSizing: 'border-box',
});

function Content({ children }: PropsWithChildren) {
  return (
    <Box css={{ px: '$12', mt: '$8', '@xsMax': { px: '$10' }, height: '100%' }}>
      {children}
    </Box>
  );
}

export function LayoutOrganism({ children }: PropsWithChildren): JSX.Element {
  return (
    <Container fluid css={{ height: '100%' }}>
      <Navbar2Organism />
      <Content>{children}</Content>
    </Container>
  );
}
