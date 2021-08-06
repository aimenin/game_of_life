import React, { FC } from 'react';

import { Coords, Field } from '@/helpers/Field';

import { Cell } from './Cell';
import styled from '@emotion/styled';

export interface GridProps {
  children: Field;
}

export const Grid: FC<GridProps> = ({ children, ...rest }) => (
  <Wrapper size={children.length}>
    {children.map((row, y) =>
      row.map((cell, x) => (
        <Cell key={`${y}_${x}_${cell}`} coords={[y, x]} {...rest}>
          {cell}
        </Cell>
      ))
    )}
  </Wrapper>
);

interface WrapperProps {
  size: number;
}

const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, auto);
  width: max-content;
  border: 1px solid black;
`;
