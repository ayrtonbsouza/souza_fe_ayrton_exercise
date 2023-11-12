import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageContainer } from '..';

describe('PageContainer', () => {
  it('should render page container', () => {
    render(<PageContainer />);

    expect(screen.getByTestId('page-container')).toBeInTheDocument();
  });
});
