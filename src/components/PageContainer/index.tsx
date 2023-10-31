import { Flex } from '@chakra-ui/react';
import React from 'react';

export function PageContainer({ children }: any): JSX.Element {
  return (
    <Flex w="100vw" p="8" data-testid="page-container">
      {children}
    </Flex>
  );
}
