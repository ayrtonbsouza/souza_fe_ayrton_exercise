import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { PageContainer } from 'components/PageContainer';
import TeamOverview from './pages/TeamOverview';
import Teams from './pages/Teams';
import UserOverview from './pages/UserOverview';
import { theme } from './styles/theme';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Teams />,
    },
    {
      path: '/team/:teamId',
      element: <TeamOverview />,
    },
    {
      path: '/user/:useId',
      element: <UserOverview />,
    },
  ]);
  return (
    <ChakraProvider theme={theme}>
      <PageContainer>
        <RouterProvider router={router} />
      </PageContainer>
    </ChakraProvider>
  );
}

export default App;
