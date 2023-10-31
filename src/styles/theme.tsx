import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: {
      '50': '#fdf8f1',
      '100': '#f5f1ea',
      '200': '#ece7e0',
      '300': '#dbd7d0',
      '400': '#b7b3ac',
      '500': '#97938d',
      '600': '#6f6b65',
      '700': '#5b5752',
      '800': '#3c3934',
      '900': '#1c1914',
    },
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
  styles: {
    global: {
      body: {
        bgColor: 'primary.50',
        color: 'primary.900',
        overflowX: 'hidden',
      },
      a: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
});
