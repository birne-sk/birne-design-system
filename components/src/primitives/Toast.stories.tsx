import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastContainer } from "./Toast";
import { Button } from "./Button";

const meta: Meta<typeof Toast> = {
  title: "Primitives/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "error", "warning", "info"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    title: "Notification",
    description: "This is a default toast message.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success!",
    description: "Your changes have been saved successfully.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    description: "Something went wrong. Please try again.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    description: "Your session will expire in 5 minutes.",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Did you know?",
    description: "You can use keyboard shortcuts to navigate faster.",
  },
};

export const WithAction: Story = {
  args: {
    variant: "default",
    title: "New update available",
    description: "A new version of the app is ready to install.",
    action: (
      <Button size="sm" variant="soft">
        Update now
      </Button>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 max-w-sm">
      <Toast title="Default" description="This is a default toast." />
      <Toast variant="success" title="Success" description="Operation completed." />
      <Toast variant="error" title="Error" description="Something went wrong." />
      <Toast variant="warning" title="Warning" description="Please be careful." />
      <Toast variant="info" title="Info" description="Here's some information." />
    </div>
  ),
};

export const InContainer: Story = {
  render: () => (
    <div className="relative h-64 bg-birne-sand-20 rounded-lg">
      <ToastContainer position="bottom-right">
        <Toast
          variant="success"
          title="Saved!"
          description="Your changes have been saved."
        />
      </ToastContainer>
    </div>
  ),
};
