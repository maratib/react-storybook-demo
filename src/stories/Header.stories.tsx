import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "@/components/elements/Header";

export default {
  title: "elements/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  //   primary: true,
};
