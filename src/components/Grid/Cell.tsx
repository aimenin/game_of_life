import React, { FC } from 'react';
import { Coords, CellType } from '@/helpers/Field';

export interface CellProps {
  coords: Coords;
  /**
   * Cell coordinates
   */
}

export const Cell: FC<CellProps> = ({ coords }) => {
  return <div>{coords}</div>;
};
