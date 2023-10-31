import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { type Teams, type UserData } from 'types';
import { Flex, Text } from '@chakra-ui/react';

interface Props {
  id?: string;
  url?: string;
  columns: Array<{
    key: string;
    value: string;
  }>;
  hasNavigation?: boolean;
  navigationProps?: UserData | Teams;
}

function Card({
  id,
  columns,
  url,
  hasNavigation = true,
  navigationProps = null,
}: Props): JSX.Element {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (hasNavigation) {
      navigate(url, {
        state: navigationProps,
      });
    }
    e.preventDefault();
  };

  return (
    <Flex
      data-testid={`cardContainer-${id}`}
      cursor={hasNavigation ? 'pointer' : 'default'}
      onClick={handleClick}
      bgColor="primary.100"
      p="8"
      direction="row"
      borderRadius="8"
      boxShadow="md"
      align="center"
      justify="space-between"
    >
      <Flex direction="column">
        {columns.map(({ key: columnKey, value }) => (
          <Text as="p" key={columnKey}>
            <Text as="strong" fontWeight="bold">
              {columnKey}
            </Text>
            &nbsp;{value}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
}

export default Card;
