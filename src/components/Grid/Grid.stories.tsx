import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Grid, GridProps } from './Grid';

export default {
  title: 'Grid/Grid',
  component: Grid,
} as Meta;

export const GridExample: Story<GridProps> = (args) => <Grid {...args} />;

GridExample.args = {
  children: [
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
  ],
};
