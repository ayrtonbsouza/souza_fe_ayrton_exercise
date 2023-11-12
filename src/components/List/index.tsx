import * as React from 'react';
import { type ListItem } from 'types';
import { Grid, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import Card from '../Card';
import { Spinner } from '../Spinner';

interface Props {
  items?: ListItem[];
  hasNavigation?: boolean;
  isLoading: boolean;
}

function List({ items, hasNavigation = true, isLoading }: Props): JSX.Element {
  const [filterValue, setFilterValue] = React.useState('');
  const [filteredItems, setFilteredItems] = React.useState(items || []);

  React.useEffect(() => {
    if (items && filterValue) {
      const lowercasedFilter = filterValue.toLowerCase();

      const newFilteredItems = items.filter(item => {
        const nameValue = item.columns?.[0]?.value || '';
        const displayNameValue = item.columns?.[1]?.value || '';
        const locationValue = item.columns?.[2]?.value || '';

        const concatenatedValues =
          `${nameValue} ${displayNameValue} ${locationValue}`.toLowerCase();

        return concatenatedValues.includes(lowercasedFilter);
      });

      setFilteredItems(newFilteredItems);
    } else {
      setFilteredItems(items || []);
    }
  }, [filterValue, items]);

  return (
    <>
      <InputGroup my="8">
        <InputLeftElement pointerEvents="none">
          <FiSearch color="gray.300" />
        </InputLeftElement>
        <Input
          placeholder="Search"
          variant="flushed"
          value={filterValue}
          onChange={e => {
            setFilterValue(e.target.value);
          }}
        />
      </InputGroup>
      <Grid
        gap="4"
        w="100%"
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
      >
        {isLoading && <Spinner />}
        {!isLoading &&
          filteredItems.map(({ url, id, columns, navigationProps }, index) => (
            <Card
              key={`${id}-${index}`}
              id={id}
              columns={columns}
              navigationProps={navigationProps}
              hasNavigation={hasNavigation}
              url={url}
            />
          ))}
      </Grid>
    </>
  );
}

export default List;
