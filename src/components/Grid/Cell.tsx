import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Coords, CellType } from '@/helpers/Field';

export interface CellProps {
  coords: Coords;
  /**
   * Cell coordinates
   */
}

export const CellStyles = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
`;

export const Cell: FC<CellProps> = ({ coords }) => {
  return <CellStyles>{coords}</CellStyles>;
};
