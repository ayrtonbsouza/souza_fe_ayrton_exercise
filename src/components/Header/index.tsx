import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Text } from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';

interface Props {
  title: string;
  showBackButton?: boolean;
}

function Header({ title, showBackButton = true }: Props): JSX.Element {
  const navigate = useNavigate();
  const handleGoBack = (): void => {
    navigate(-1);
  };
  return (
    <Flex
      w="100%"
      p="8"
      direction="column"
      align="flex-start"
      justify="space-between"
      mb="8"
    >
      <Flex align="center" justify="center">
        {showBackButton && (
          <Button
            onClick={handleGoBack}
            mr="8"
            h="16"
            w="16"
            borderRadius="full"
            bgColor="primary.100"
            boxShadow="md"
          >
            <FiChevronLeft size="24" />
          </Button>
        )}
        <Text fontSize="6xl" fontWeight="bold">
          {title}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Header;
