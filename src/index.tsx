import React from 'react';
import ReactDOM from 'react-dom';

import { Grid } from '@/components/Grid/Grid';

import { Field } from './helpers/Field';

const staticField: Field = [
  [9, 2, 9, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1, 0, 1, 9, 1, 1, 9, 1],
  [0, 0, 1, 9, 10, 0, 2, 2, 2, 1, 1, 1],
  [0, 0, 10, 10, 1, 0, 1, 9, 1, 2, 2, 2],
  [0, 1, 1, 2, 2, 9, 1, 1, 1, 0, 0, 0],
  [0, 1, 9, 3, 9, 2, 10, 0, 0, 2, 1, 1],
  [0, 2, 2, 4, 9, 2, 10, 1, 1, 1, 9, 1],
  [0, 1, 9, 2, 1, 1, 1, 9, 1, 2, 2, 2],
  [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],
];

ReactDOM.render(
  <>
    <h1>Hello world</h1>
    <Grid>{staticField}</Grid>
  </>,
  document.getElementById('root')
);
