import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Home from "@/pages/Home";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "pages/Home",
  component: Home,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Home>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const View = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
View.args = {
  //   primary: true,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };
