import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./Drawer";
import { Button } from "./Button";
import { Text } from "./Typography";
import { Input } from "./Input";
import * as React from "react";

const meta: Meta<typeof Drawer> = {
  title: "Primitives/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Drawer Title"
          description="This is a drawer component."
        >
          <Text>Drawer content goes here.</Text>
        </Drawer>
      </>
    );
  },
};

export const Left: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          side="left"
          title="Navigation"
        >
          <nav className="space-y-2">
            <Text className="p-2 hover:bg-birne-black-5 rounded cursor-pointer">Dashboard</Text>
            <Text className="p-2 hover:bg-birne-black-5 rounded cursor-pointer">Projects</Text>
            <Text className="p-2 hover:bg-birne-black-5 rounded cursor-pointer">Settings</Text>
          </nav>
        </Drawer>
      </>
    );
  },
};

export const Bottom: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Bottom Sheet</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          side="bottom"
          size="md"
          title="Share"
        >
          <div className="flex gap-4 justify-center py-4">
            <Button variant="soft">Copy Link</Button>
            <Button variant="soft">Email</Button>
            <Button variant="soft">Twitter</Button>
          </div>
        </Drawer>
      </>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Large Drawer</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          size="lg"
          title="Edit Profile"
          description="Make changes to your profile here."
        >
          <div className="space-y-4">
            <div>
              <label className="font-text text-sm text-text-heading mb-1 block">Name</label>
              <Input placeholder="Enter your name" />
            </div>
            <div>
              <label className="font-text text-sm text-text-heading mb-1 block">Email</label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            <div className="pt-4">
              <Button>Save Changes</Button>
            </div>
          </div>
        </Drawer>
      </>
    );
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          showCloseButton={false}
          title="Minimal Drawer"
        >
          <Text>Click outside or press Escape to close.</Text>
        </Drawer>
      </>
    );
  },
};
