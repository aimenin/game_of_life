import '@testing-library/jest-dom';

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Coords } from '@/helpers/Field';

import { Cell } from './Cell';

describe('Cell component check', () => {
  const coords: Coords = [1, 2];
  const testMessage = '1:2';
  test('rendering Cell component with empty', () => {
    render(<Cell coords={coords} />);

    expect(screen.queryByText(testMessage)).toBeNull();
  });
  test('testing Cell component click', () => {
    render(<Cell coords={coords} />);

    fireEvent.click(screen.queryByRole('cell'));

    expect(screen.queryByText(testMessage)).toBeInTheDocument();
  });
});
