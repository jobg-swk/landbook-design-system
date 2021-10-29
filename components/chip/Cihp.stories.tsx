import React from 'react';
import Chip, { ChipProps } from './Chip';
import { Story, Meta } from '@storybook/react/';

const meta: Meta = {
  title: 'Chip',
  component: Chip,
  parameters: {
    componentSubtitle: '칩',
  },
  argTypes: {
    onClick: { action: 'onClick' },
    checked: {
      description: '체크 여부',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      description: '미사용 여부',
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

/**
 * Chip
 */
export const DefaultChip: Story<ChipProps> = props => (
  <Chip {...props}>Chip</Chip>
);
