import React, { FC } from 'react';

import { Coords, Field } from '@/helpers/Field';

import { Cell } from './Cell';

export interface GridProps {
  children: Field;
}

export const Grid: FC<GridProps> = ({ children, ...rest }) => (
  <div>
    {children.map((row, y) => 
      row.map((cell, x) => (
        <Cell key={`${y}_${x}_${cell}`} coords={[y, x]} {...rest}>
          {cell}
        </Cell>
      ))
    )}
  </div>
);
