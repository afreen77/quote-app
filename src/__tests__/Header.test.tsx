import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../layout/Header';

it('renders Header Component correctly', () => {
  render(<Header />);
  expect(screen.getByText('Quick Quote')).toBeInTheDocument();
});