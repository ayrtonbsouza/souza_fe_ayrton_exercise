import * as React from 'react';
import { type ListItem, type Teams as TeamsList } from 'types';
import { Flex } from '@chakra-ui/react';
import { getTeams as fetchTeams } from '../api';
import Header from '../components/Header';
import List from '../components/List';

const mapTeamsToListItems = (teams: TeamsList[]): ListItem[] =>
  teams.map(team => {
    const columns = [
      {
        key: 'Name',
        value: team.name,
      },
    ];

    const listItem: ListItem = {
      id: team.id,
      url: `/team/${team.id}`,
      columns,
      navigationProps: team,
    };

    return listItem;
  });

function Teams(): JSX.Element {
  const [teams, setTeams] = React.useState<TeamsList[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const getTeams = async (): Promise<void> => {
      const response = await fetchTeams();
      setTeams(response);
      setIsLoading(false);
    };

    void getTeams();
  }, []);

  return (
    <Flex
      direction="column"
      flexWrap="wrap"
      justify="center"
      align="center"
      w="100%"
    >
      <Header title="Teams" showBackButton={false} />
      <List items={mapTeamsToListItems(teams)} isLoading={isLoading} />
    </Flex>
  );
}

export default Teams;
