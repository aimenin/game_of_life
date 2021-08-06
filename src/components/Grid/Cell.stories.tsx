import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Cell, CellProps } from './Cell';

export default {
  title: 'Grid/Cell',
  component: Cell,
  argTypes: {
    coords: { defaultValues: [1, 1] },
  },
} as Meta;

const Template: Story<CellProps> = (args) => <Cell {...args} />;

export const CellAverage = Template.bind({});
CellAverage.args = {
  coords: [10, 5],
};
