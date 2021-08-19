import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { Coords } from '@/helpers/Field';

export interface CellProps {
  coords: Coords;
}

export const CellStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: red;
  border: 1px solid black;
  cursor: pointer;
`;

export const Cell: FC<CellProps> = ({ coords }) => {
  const [showCoord, setShowCoord] = useState(false);

  return (
    <CellStyles onClick={() => setShowCoord(!showCoord)} role="cell">
      {showCoord && `${coords[0]}:${coords[1]}`}
    </CellStyles>
  );
};
