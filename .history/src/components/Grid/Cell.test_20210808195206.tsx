import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Coords } from '@/helpers/Field';

import { Cell } from './Cell';

describe('Cell component check', () => {
  test('rendering cell component', () => {
    const coords: Coords = [1, 2];
    const testMessage = '1:2';

    render(<Cell coords={coords} />);

    expect(screen.queryByText(testMessage)).toBeNull();
  });
});
