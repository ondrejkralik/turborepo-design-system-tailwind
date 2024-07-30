import { Card } from "@repo/ui/card";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  decorators: [
    (Story) => (
      <div className="flex flex-col items-center justify-between min-h-screen p-24">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "title",
    href: "https://example.com",
    children: "children",
  },
};
