import React from 'react';
import Button, { ButtonProps } from './Button';
import { Story, Meta } from '@storybook/react/';

const meta: Meta = {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: '버튼',
  },
  argTypes: {
    onClick: { action: 'onClick' },
    primary: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const DefaultButton: Story<ButtonProps> = props => (
  <Button style={{ width: 200, height: 50 }} {...props}>
    Button
  </Button>
);

export const PrimaryButton: Story<ButtonProps> = props => (
  <Button style={{ width: 200, height: 50 }} {...props} primary>
    Button
  </Button>
);
