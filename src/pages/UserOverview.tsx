import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { type UserData } from 'types';
import { Flex } from '@chakra-ui/react';
import Card from '../components/Card';

import Header from '../components/Header';

const mapUserToCard = (user: UserData): JSX.Element => {
  const columns = [
    {
      key: 'Name',
      value: `${user.firstName} ${user.lastName}`,
    },
    {
      key: 'Display Name',
      value: user.displayName,
    },
    {
      key: 'Location',
      value: user.location,
    },
  ];
  return (
    <Card columns={columns} hasNavigation={false} navigationProps={user} />
  );
};

function UserOverview(): JSX.Element {
  const location = useLocation();
  return (
    <Flex direction="column" flexWrap="wrap" justify="center" align="center">
      <Header
        title={`User ${location.state.firstName} ${location.state.lastName}`}
      />
      {mapUserToCard(location.state)}
    </Flex>
  );
}

export default UserOverview;
