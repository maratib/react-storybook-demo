import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "@/components/elements/Header";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "elements/Header",
    component: Header,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    //   primary: true,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

