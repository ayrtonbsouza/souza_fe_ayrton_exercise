import * as React from 'react';
import { Spinner as ChakraSpinner } from '@chakra-ui/react';

export function Spinner(): JSX.Element {
  return (
    <ChakraSpinner
      thickness="4px"
      speed="0.8s"
      emptyColor="#d1d5db"
      color="#3b82f6"
      size="xl"
      data-testid="spinner"
    />
  );
}
