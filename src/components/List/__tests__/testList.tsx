import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import List from '..';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('List', () => {
  it('should render spinner and not render items when it is loading', () => {
    const items = [
      {
        id: '1',
        columns: [
          {
            key: 'columnKey1',
            value: 'columnValue1',
          },
        ],
      },
    ];
    render(<List isLoading items={items} />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.queryByTestId('cardContainer')).not.toBeInTheDocument();
  });

  it('should render spinner when it is loading', () => {
    render(<List isLoading />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should not render spinner and render items when it is not loading', () => {
    const items = [
      {
        id: '1',
        columns: [
          {
            key: 'columnKey1',
            value: 'columnValue1',
          },
        ],
      },
    ];
    render(<List isLoading={false} items={items} />);

    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    expect(screen.getByTestId('cardContainer-1')).toBeInTheDocument();
  });

  it('should render multiple card when multiple items', () => {
    const items = [
      {
        id: '1',
        columns: [
          {
            key: 'columnKey1',
            value: 'columnValue1',
          },
        ],
      },
      {
        id: '2',
        columns: [
          {
            key: 'columnKey2',
            value: 'columnValue2',
          },
        ],
      },
    ];
    render(<List isLoading={false} items={items} />);

    expect(screen.getByTestId('cardContainer-1')).toBeInTheDocument();
    expect(screen.getByTestId('cardContainer-2')).toBeInTheDocument();
  });

  it('should filter items based on search input', () => {
    const items = [
      {
        id: '1',
        columns: [
          {
            key: 'name',
            value: 'John',
          },
          {
            key: 'displayName',
            value: 'Doe',
          },
        ],
      },
      {
        id: '2',
        columns: [
          {
            key: 'name',
            value: 'Alice',
          },
          {
            key: 'displayName',
            value: 'Smith',
          },
        ],
      },
    ];
    render(<List isLoading={false} items={items} />);

    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: 'John' },
    });

    expect(screen.getByTestId('cardContainer-1')).toBeInTheDocument();
    expect(screen.queryByTestId('cardContainer-2')).not.toBeInTheDocument();
  });

  it('should handle case-insensitive search', () => {
    const items = [
      {
        id: '1',
        columns: [
          {
            key: 'name',
            value: 'John',
          },
        ],
      },
      {
        id: '2',
        columns: [
          {
            key: 'name',
            value: 'Alice',
          },
        ],
      },
    ];
    render(<List isLoading={false} items={items} />);

    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: 'alice' },
    });

    expect(screen.getByTestId('cardContainer-2')).toBeInTheDocument();
    expect(screen.queryByTestId('cardContainer-1')).not.toBeInTheDocument();
  });

  it('should render an empty list when the search does not match any items', () => {
    const items = [
      {
        id: '1',
        columns: [
          {
            key: 'name',
            value: 'John',
          },
        ],
      },
      {
        id: '2',
        columns: [
          {
            key: 'name',
            value: 'Alice',
          },
        ],
      },
    ];
    render(<List isLoading={false} items={items} />);

    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: 'Bob' },
    });

    expect(screen.queryByTestId('cardContainer-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('cardContainer-2')).not.toBeInTheDocument();
  });
});
