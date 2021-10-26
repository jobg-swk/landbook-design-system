import React from "react";
import Button, { ButtonProps } from "./Button";
import { Story, Meta } from "@storybook/react/";

export default {
  title: "Button",
  component: Button,
  parameters: {
    componentSubtitle: "버튼",
  },
  argTypes: {
    primary: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
} as Meta;

export const DefaultButton: Story<ButtonProps> = (props) => (
  <Button width="200px" height="50px" {...props}>
    Button
  </Button>
);

export const PrimaryButton: Story = () => (
  <Button primary width="200px" height="50px">
    Button
  </Button>
);
