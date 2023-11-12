import * as React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { type ListItem, type UserData } from 'types';
import { Flex } from '@chakra-ui/react';
import { getTeamOverview, getUserData } from '../api';
import Card from '../components/Card';

import Header from '../components/Header';
import List from '../components/List';

const mapUsersToListItems = (users: UserData[]): ListItem[] =>
  users.map(user => {
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
    return {
      id: user.id,
      url: `/user/${user.id}`,
      columns,
      navigationProps: user,
    };
  }) as ListItem[];

const mapTeamLeadToCard = (teamLead: UserData): JSX.Element => {
  const columns = [
    {
      key: 'Team Lead',
      value: '',
    },
    {
      key: 'Name',
      value: `${teamLead.firstName} ${teamLead.lastName}`,
    },
    {
      key: 'Display Name',
      value: teamLead.displayName,
    },
    {
      key: 'Location',
      value: teamLead.location,
    },
  ];
  return (
    <Card
      columns={columns}
      url={`/user/${teamLead.id}`}
      navigationProps={teamLead}
    />
  );
};

interface PageState {
  teamLead?: UserData;
  teamMembers?: UserData[];
}

export default function TeamOverview(): JSX.Element {
  const location = useLocation();
  const { teamId } = useParams();
  const [pageData, setPageData] = React.useState<PageState>({});
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const getTeamUsers = async (): Promise<void> => {
      const { teamLeadId, teamMemberIds = [] } = await getTeamOverview(teamId);

      const fetchTeamLead = getUserData(teamLeadId);
      const fetchTeamMembers = Promise.all(
        teamMemberIds.map(
          async (id): Promise<UserData> => await getUserData(id),
        ),
      );

      const [teamLead, teamMembers] = await Promise.all([
        fetchTeamLead,
        fetchTeamMembers,
      ]);

      setPageData({
        teamLead,
        teamMembers,
      });
      setIsLoading(false);
    };
    void getTeamUsers();
  }, [teamId]);

  return (
    <Flex
      direction="column"
      flexWrap="wrap"
      justify="center"
      align="center"
      w="100%"
    >
      <Header title={`Team ${location.state.name}`} />
      {!isLoading && mapTeamLeadToCard(pageData.teamLead)}
      <List
        items={mapUsersToListItems(pageData?.teamMembers ?? [])}
        isLoading={isLoading}
      />
    </Flex>
  );
}
